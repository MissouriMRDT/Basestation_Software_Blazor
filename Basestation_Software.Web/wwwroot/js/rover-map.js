// Used by RoverMap.razor

// imported globally in App.razor
//import L from "./lib/leaflet/leaflet.js";
//import "./lib/leaflet-contextmenu/leaflet.contextmenu.min.js";

import { generateArucoMarker } from "./aruco-tag-generator.js";

export class RoverMap {
    container = null;
    lMap = null;
    waypointLayerGroup = null;
    dotNetComponent = null;
    positionDisplay = null;
    roverIcon = null;

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
            attribution: "Basestation_Software.Api",
            maxNativeZoom: 18,
            maxZoom: 21,
            errorTileUrl: "js/lib/leaflet/images/tile-error.png",
        });
        this.satelliteLayer = satelliteLayer;

        const shadowLayer = L.tileLayer(urlTemplate2, {
            attribution: "Basestation_Software.Api",
            maxNativeZoom: 18,
            maxZoom: 21,
            errorTileUrl: "js/lib/leaflet/images/tile-error.png",
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
                    text: "Copy Latitude",
                    callback: (e) => navigator.clipboard?.writeText(e.latlng.lat)
                },
                {
                    text: "Copy Longitude",
                    callback: (e) => navigator.clipboard?.writeText(e.latlng.lng)
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

        const baseMaps = {
            "Satellite": satelliteLayer,
            "Shadows": shadowLayer
        };

        const overlays = {
            "Waypoints": this.waypointLayerGroup,
            "Tags": this.tagLayerGroup,
            "Rover": this.roverIcon
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
    // Call component.OnZoomLevel.
    onZoomLevelChange() {
        let center = this.lMap.getCenter();
        let zoom = this.lMap.getZoom();
    //    this.dotNetComponent.invokeMethodAsync("OnZoomLevel", center.lat, center.lng, zoom);
    }
    // Call component.AddWaypoint.
    addWaypoint(event) {
        this.dotNetComponent.invokeMethodAsync("AddWaypoint", event.latlng.lat, event.latlng.lng);
    }
    // Create a waypoint marker.
    addWaypointMarker(lat, lng, radius, color, id = -1) {
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
            generateArucoMarker(10, 4, 4, "4x4_1000", id).then((svgElement) => {
                const r = 0.0001;
                const o = 0.000015 * Math.max(radius, 15);
                const svgBounds = [[lat + o - r, lng - r], [lat + o + r, lng + r]];
                L.svgOverlay(svgElement, svgBounds, { interactive: false, zIndex: 0 }).addTo(this.tagLayerGroup);
                L.polyline([[lat, lng], [lat + o, lng]], { color: "white" }).addTo(this.tagLayerGroup);
            });
        }

    }
    // Clear waypoint markers.
    clearWaypointMarkers() {
        this.waypointLayerGroup.clearLayers();
        this.tagLayerGroup.clearLayers();
    }
    // Navigate to coordinate.
    panToCoordinates(lat, long) {
        this.lMap.panTo(new L.LatLng(lat, long));
    }
    // Add a pin where the rover is.
    addRoverIcon(lat, lng) {
        this.roverIcon.setLatLng([lat, lng]);
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

    async downloadTileRange(start_lat, start_lng, end_lat, end_lng) {
        const southWest_lat = Math.min(start_lat, end_lat);
        const northEast_lat = Math.max(start_lat, end_lat);
        const southWest_lng = Math.min(start_lng, end_lng);
        const northEast_lng = Math.max(start_lng, end_lng);
        const zoom = this.lMap.getZoom();

        await this.dotNetComponent.invokeMethodAsync("DownloadTileRange", southWest_lat, northEast_lat, southWest_lng, northEast_lng, zoom, false);

        // Force redraw of the satellite layer to show the new tiles
        this.satelliteLayer.redraw();

        this.toggleMultiSelect();
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

}

export function createRoverMap(container, dotNetComponent, urlTemplate, urlTemplate2, initialLat, initialLong, initialZoomLevel) {
    return new RoverMap(container, dotNetComponent, urlTemplate, urlTemplate2, initialLat, initialLong, initialZoomLevel);
}
