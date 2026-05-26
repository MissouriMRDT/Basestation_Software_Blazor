// Used by Map.razor

// imported globally in App.razor
//import L from "./lib/leaflet/leaflet.js";
//import "./lib/leaflet-contextmenu/leaflet.contextmenu.min.js";

import { generateArucoMarker } from "./aruco-tag-generator.js";

const waypointIcons = [];
waypointIcons[-1] = "/images/any.png";
waypointIcons[-2] = "/images/mallet.png";
waypointIcons[-3] = "/images/bottle.png";
waypointIcons[-4] = "/images/pick.png";
waypointIcons[-99] = "/images/continuousNavigate.png";

export class RoverMap {
    container = null;
    lMap = null;
    waypointLayerGroup = null;
    tagLayerGroup = null;
    pathLayerGroup = null;
    labelLayerGroup = null;
    dotNetComponent = null;
    positionDisplay = null;
    roverIcon = null;
    droneIcon = null;

    currentTileHighlight = null;
    satelliteLayer = null;

    multiSelect = false; // For keeping track of whether we are selecting multiple tiles.
    startingTile_lat = null;
    startingTile_lng = null;
    endingTile_lat = null;
    endingTile_lng = null;

    contextMenuOpen = false;

    // Create leaflet map.
    constructor(container, dotNetComponent, urlTemplate, urlTemplate2, initialLat, initialLong, initialZoomLevel) {

        this.container = container;
        this.dotNetComponent = dotNetComponent;

        const satelliteLayer = L.tileLayer(urlTemplate, {
            attribution: "Basestation_Software",
            maxNativeZoom: 18,
            minNativeZoom: 13,
            maxZoom: 21,
            minZoom: 12,
        });
        this.satelliteLayer = satelliteLayer;

        const shadowLayer = L.tileLayer(urlTemplate2, {
            attribution: "Basestation_Software",
            maxNativeZoom: 18,
            minNativeZoom: 13,
            maxZoom: 21,
            minZoom: 12,
        });

        this.lMap = L.map(this.container, {
            layers: [satelliteLayer],
            center: [initialLat, initialLong],
            zoom: initialZoomLevel,
            contextmenu: true,
            contextmenuWidth: 140,
            contextmenuItems: [
                {
                    text: "Add Waypoint",
                    callback: this.addWaypoint.bind(this),
                },
                {
                    text: "Download Tile(s)",
                    callback: (e) => this.downloadTileRange(this.startingTile_lat, this.startingTile_lng, e.latlng.lat, e.latlng.lng)
                },
                {
                    text: "Select Multiple (CTRL+LMB)",
                    callback: (e) => this.toggleMultiSelect(e)
                },
                {
                    text: "Copy ddd.dddddd, ddd.dddddd",
                    callback: (e) => navigator.clipboard?.writeText(`${e.latlng.lat.toFixed(6)}, ${e.latlng.lng.toFixed(6)}`)
                },
                {
                    text: "Copy ddd mm.mmmmm, ddd mm.mmmmm",
                    callback: (e) => navigator.clipboard?.writeText(`${e.latlng.lat.toFixed(0)}d${(Math.abs(e.latlng.lat) * 60 % 60).toFixed(5)}m, ${e.latlng.lng.toFixed(0)}d${(Math.abs(e.latlng.lng) * 60 % 60).toFixed(5)}m`)
                },
                {
                    text: "Copy ddd mm ss.sss, ddd mm ss.sss",
                    callback: (e) => navigator.clipboard?.writeText(`${e.latlng.lat.toFixed(0)}d${(Math.abs(e.latlng.lat) * 60 % 60).toFixed(0)}m${(Math.abs(e.latlng.lat) * 3600 % 60).toFixed(3)}s, ${e.latlng.lng.toFixed(0)}d${(Math.abs(e.latlng.lng) * 60 % 60).toFixed(0)}m${(Math.abs(e.latlng.lng) * 3600 % 60).toFixed(3)}s`)
                },
                {
                    text: "Copy Zoom",
                    callback: (e) => navigator.clipboard?.writeText(this.lMap.getZoom())
                },
                {
                    text: "Copy Tile URL",
                    callback: (e) => {
                        const zoom = this.lMap.getZoom();
                        const x = Math.floor((e.latlng.lng + 180) / 360 * Math.pow(2, zoom));
                        const y = Math.floor((1 - Math.log(Math.tan(e.latlng.lat * Math.PI / 180) + 1 / Math.cos(e.latlng.lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, zoom));
                        const url = "http://mt1.google.com/vt/lyrs=y&x=" + x + "&y=" + y + "&z=" + zoom;
                        navigator.clipboard?.writeText(url);
                    }
                }
            ]
        });

        this.lMap.addControl(L.control.scale({
            metric: true,
            imperial: false
        }));

        let Position = L.Control.extend({
            positionDiv: null,
            options: {
                position: "topright"
            },
            onAdd: function (map) {
                this.positionDiv = L.DomUtil.create("div", "mouseposition");
                this.positionDiv.style = "padding: 0.1em; color: red; background-color: rgba(255, 255, 0, 0.9);";
                return this.positionDiv;
            },
            updateHTML: function (lat, lng, zoom) {
                this.positionDiv.innerHTML = `Latitude: ${lat.toFixed(6)} Longitiude: ${lng.toFixed(6)} Zoom: ${zoom}`;
            }
        });
        this.positionDisplay = new Position();
        this.lMap.addControl(this.positionDisplay);
        this.lMap.addEventListener('mousemove', (event) => {
            this.positionDisplay.updateHTML(event.latlng.lat, event.latlng.lng, this.lMap.getZoom());
        });
        this.roverIcon = L.marker([37.951764, -91.778441], { icon: new L.divIcon({ className: "rover-map-icon", iconSize: [50, 50] }) }).addTo(this.lMap);

        this.waypointLayerGroup = L.layerGroup([]).addTo(this.lMap);
        this.tagLayerGroup = L.layerGroup([]).addTo(this.lMap);
        this.pathLayerGroup = L.layerGroup([]).addTo(this.lMap);
        this.roverPathLayerGroup = L.layerGroup([]).addTo(this.lMap);
        this.labelLayerGroup = L.layerGroup([]).addTo(this.lMap);
        this.currentPlannedPoints = [];
        this.eta = 0;

        const baseMaps = {
            "Satellite": satelliteLayer,
            "Shadows": shadowLayer
        };

        const overlays = {
            "Waypoints": this.waypointLayerGroup,
            "Tags": this.tagLayerGroup,
            "Rover": this.roverIcon,
            "Drone": this.droneIcon,
            "Planned Path": this.pathLayerGroup,
            "Rover Path": this.roverPathLayerGroup
        };

        this.lMap.addControl(L.control.layers(baseMaps, overlays));

        // Set up event handlers for tile highlighting
        this.lMap.on('mousemove', this.highlightTile.bind(this));
        this.lMap.on('mouseout', this.clearTileHighlight.bind(this));
        this.lMap.on('click', this.handleLeftClick.bind(this)); // For selecting an area of tiles.
        this.lMap.on('contextmenu', this.handleRightClick.bind(this));
        this.lMap.on('contextmenu.select', (e) => { this.contextMenuOpen = false; });

        // Clean up tile highlighting handlers
        this.lMap.on('unload', () => {
            this.lMap.off('mousemove', this.highlightTile);
            this.lMap.off('mouseout', this.clearTileHighlight);
            this.clearTileHighlight();
        })

    }
    // Call component.AddWaypoint.
    addWaypoint(event) {
        this.dotNetComponent.invokeMethodAsync("AddWaypoint", event.latlng.lat, event.latlng.lng);
    }
    // Create a waypoint marker.
    addWaypointMarker(name, lat, lng, radius, color, id = -1) {
        if (name !== "") {
            let tooltip = L.tooltip([lat, lng], { permanent: true, content: name, direction: "right", opacity: 1 }).addTo(this.labelLayerGroup).getElement();
            tooltip.style.borderColor = color;
            tooltip.style.boxShadow = "none";
            tooltip.style.color = "#000";
            tooltip.style.backgroundColor = "#fff8";
            tooltip.style.fontSize = "20px";
        }
        if (radius === 0) {
            L.circleMarker([lat, lng], { radius: 20, color: color, dashArray: "15.4 16", fill: false })
                .on("click", () => {
                    this.dotNetComponent.invokeMethodAsync("OnWaypointSelected", lat, lng);
                }).addTo(this.waypointLayerGroup);
        } else {
            L.circle([lat, lng], { radius: radius, color: color })
                .on("click", () => {
                    this.dotNetComponent.invokeMethodAsync("OnWaypointSelected", lat, lng);
                })
                .addTo(this.waypointLayerGroup);
        }
        if (id >= 0) {
            generateArucoMarker(4, 4, 4, "4x4_1000", id).then((svgElement) => {
                L.marker([lat, lng], { icon: L.divIcon({ html: svgElement, iconSize: 10, iconAnchor: [15, 15] }) }).on("click", () => {
                    this.dotNetComponent.invokeMethodAsync("OnWaypointSelected", lat, lng);
                }).addTo(this.tagLayerGroup);
            });
        } else {
            const r = 0.0001;
            const imageUrl = waypointIcons[id];
            if (imageUrl !== undefined) {
                L.marker([lat, lng], { icon: L.icon({ iconUrl: imageUrl, iconSize: 25 }) }).on("click", () => {
                    this.dotNetComponent.invokeMethodAsync("OnWaypointSelected", lat, lng);
                }).addTo(this.tagLayerGroup);
            }
        }
    }
    // Clear waypoint markers.
    clearWaypointMarkers() {
        this.waypointLayerGroup.clearLayers();
        this.tagLayerGroup.clearLayers();
        this.labelLayerGroup.clearLayers();
    }
    // Navigate to coordinate.
    panToCoordinates(lat, long) {
        this.lMap.panTo(new L.LatLng(lat, long));
    }
    // Add a pin where the rover is.
    addRoverIcon(lat, lng) {
        this.roverIcon.setLatLng([lat, lng]);
    }

    // Add a pin where the drone is.
    addDroneIcon(lat, lng)
    {
        //Put it here so it only initializes if basestation recieves drone packets.
        this.droneIcon = L.marker([37.951964, -91.778441], {icon: new L.divIcon({className: "drone-map-icon", iconSize: [50, 50]})}).addTo(this.lMap);

        this.droneIcon.setLatLng([lat, lng]);
    }

    highlightTile(e) {
        if (this.contextMenuOpen) {
            return; // Don't update the highlighted tiles while the context menu is open
        }

        const map = this.lMap;
        const point = e.containerPoint;
        const latlng = map.containerPointToLatLng(point);
        const zoom = map.getZoom();
        const tileSize = 256;
        const scale = Math.pow(2, zoom);

        // Determine (current) tile coordinates
        const tileX = Math.floor((latlng.lng + 180) / 360 * scale);
        const tileY = Math.floor((1 - Math.log(Math.tan(latlng.lat * Math.PI / 180) + 1 / Math.cos(latlng.lat * Math.PI / 180)) / Math.PI) / 2 * scale);

        // Remove previous highlight
        if (this.currentTileHighlight) {
            map.removeLayer(this.currentTileHighlight);
            //    this.currentTileHighlight = null;
        }

        // Recompute corners if selecting multiple tiles
        if (this.multiSelect) {
            const startingTileX = Math.floor((this.startingTile_lng + 180) / 360 * scale);
            const startingTileY = Math.floor((1 - Math.log(Math.tan(this.startingTile_lat * Math.PI / 180) + 1 / Math.cos(this.startingTile_lat * Math.PI / 180)) / Math.PI) / 2 * scale);

            if (startingTileX <= tileX && startingTileY <= tileY) {
                // Dragging to bottom-right
                const nw = map.unproject([startingTileX * tileSize, startingTileY * tileSize], zoom);
                const se = map.unproject([(tileX + 1) * tileSize, (tileY + 1) * tileSize], zoom);

                // Draw border
                this.currentTileHighlight = L.rectangle([nw, se], { className: 'tile-hover-border', weight: 3, color: "#ff7800", fillOpacity: 0 }).addTo(map);
            } else if (startingTileX <= tileX && startingTileY >= tileY) {
                // Dragging to top-right
                const nw = map.unproject([startingTileX * tileSize, (tileY) * tileSize], zoom);
                const se = map.unproject([(tileX + 1) * tileSize, (startingTileY + 1) * tileSize], zoom);

                // Draw border
                this.currentTileHighlight = L.rectangle([nw, se], { className: 'tile-hover-border', weight: 3, color: "#ff7800", fillOpacity: 0 }).addTo(map);
            } else if (startingTileX >= tileX && startingTileY <= tileY) {
                // Dragging to bottom-left
                const nw = map.unproject([tileX * tileSize, startingTileY * tileSize], zoom);
                const se = map.unproject([(startingTileX + 1) * tileSize, (tileY + 1) * tileSize], zoom);

                // Draw border
                this.currentTileHighlight = L.rectangle([nw, se], { className: 'tile-hover-border', weight: 3, color: "#ff7800", fillOpacity: 0 }).addTo(map);
            } else if (startingTileX >= tileX && startingTileY >= tileY) {
                // Dragging to top-left
                const nw = map.unproject([tileX * tileSize, tileY * tileSize], zoom);
                const se = map.unproject([(startingTileX + 1) * tileSize, (startingTileY + 1) * tileSize], zoom);

                // Draw border
                this.currentTileHighlight = L.rectangle([nw, se], { className: 'tile-hover-border', weight: 3, color: "#ff7800", fillOpacity: 0 }).addTo(map);
            }
        } else {
            // Compute tile corners
            const nw = map.unproject([tileX * tileSize, tileY * tileSize], zoom);
            const se = map.unproject([(tileX + 1) * tileSize, (tileY + 1) * tileSize], zoom);

            // Draw border
            this.currentTileHighlight = L.rectangle([nw, se], { className: 'tile-hover-border', weight: 3, color: "#ff7800", fillOpacity: 0 }).addTo(map);
        }

    }

    clearTileHighlight() {
        if (this.currentTileHighlight && !this.contextMenuOpen) {
            this.lMap.removeLayer(this.currentTileHighlight);
            this.currentTileHighlight = null;
        }
    }

    handleRightClick(e) {
        this.contextMenuOpen = true;
    }

    handleLeftClick(e) {

        this.contextMenuOpen = false;

        // Handle multi-tile selection with Ctrl key
        if (e.originalEvent.ctrlKey) {
            this.toggleMultiSelect(e);
        }

    }

    async downloadTileRange(lat1, lon1, lat2, lon2) {
        const zoom = this.lMap.getZoom();
        if (lat1 === null) lat1 = lat2;
        if (lon1 === null) lon1 = lon2;
        await this.dotNetComponent.invokeMethodAsync("SetRange", lat1, lon1, lat2, lon2, zoom);

        // Force redraw of the satellite layer to show the new tiles
        this.satelliteLayer.redraw();

        this.multiSelect = false;
    }

    toggleMultiSelect(e) {
        if (this.multiSelect) {
            this.multiSelect = false;
        } else {
            this.multiSelect = true;
            this.startingTile_lat = e.latlng.lat;
            this.startingTile_lng = e.latlng.lng;
        }
    }

    // Display path rover has taken
    displayRoverPath(points) {
        return; // Disabled for safety until performance issues are resolved.
        if (points.length == 0) {
            return;
        }

        // Convert points to 2D lat lon list
        const pointPairs = [];
        for (let i = 0; i < points.length; i += 2) {
            pointPairs.push([points[i], points[i + 1]]);
        }

        // this.roverPathLayerGroup.clearLayers();
        L.polyline(pointPairs, { color: "red", weight: 5 }).addTo(
            this.roverPathLayerGroup
        );
    }

    // Remove path rover has taken
    removeRoverPath() {
        this.roverPathLayerGroup.clearLayers();
    }

    // Display planned Path
    displayPath(points) {
        return; // Disabled for safety until performance issues are resolved.
        if (points.length == 0) {
            return;
        }

        // Convert points to 2D lat lon list
        const pointPairs = [];
        for (let i = 0; i < points.length - 1; i += 2) {
            pointPairs.push([points[i], points[i + 1]]);
        }

        this.currentPlannedPoints = points;

        this.pathLayerGroup.clearLayers();
        var path = L.polyline(pointPairs, { color: "blue", weight: 5 }).addTo(this.pathLayerGroup);

        var lastPoint = pointPairs[pointPairs.length - 1];


        var timeDate = new Date(this.eta * 1000);
        var ETAString = "ETA: " + timeDate.toString();

        // Do not show ETA if rover is not moving
        if (this.eta < 0) {
            ETAString = "Waiting for movement update...";
        }

        L.marker([lastPoint[0], lastPoint[1]]).addTo(this.pathLayerGroup).bindTooltip(ETAString, { direction: "top" });
    }

    // Remove planned path
    removePath() {
        this.pathLayerGroup.clearLayers();
        this.currentPlannedPoints = [];
    }

    // Set estimated time of arrival (seconds since epoch)
    setETA(eta) {
        this.eta = eta;
        this.displayPath(this.currentPlannedPoints);
    }
}

export function createRoverMap(container, dotNetComponent, urlTemplate, urlTemplate2, initialLat, initialLong, initialZoomLevel) {
    return new RoverMap(container, dotNetComponent, urlTemplate, urlTemplate2, initialLat, initialLong, initialZoomLevel);
}
