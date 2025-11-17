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
                    callback: this.addWaypoint.bind(this)
                },
                {
                    text: "Copy Latitude",
                    callback: (e) => navigator.clipboard?.writeText(e.latlng.lat)
                },
                {
                    text: "Copy Longitude",
                    callback: (e) => navigator.clipboard?.writeText(e.latlng.lng)
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
            updateHTML: function (lat, lng) {
                this.positionDiv.innerHTML = `Latitude: ${lat.toFixed(6)} Longitiude: ${lng.toFixed(6)}`;
            }
        });
        this.positionDisplay = new Position();
        this.lMap.addControl(this.positionDisplay);
        this.lMap.addEventListener('mousemove', (event) => {
            this.positionDisplay.updateHTML(event.latlng.lat, event.latlng.lng);
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
}

export function createRoverMap(container, dotNetComponent, urlTemplate, urlTemplate2, initialLat, initialLong, initialZoomLevel) {
    return new RoverMap(container, dotNetComponent, urlTemplate, urlTemplate2, initialLat, initialLong, initialZoomLevel);
}
