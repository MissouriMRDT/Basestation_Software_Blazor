// Used by RoverMap.razor

// imported globally in App.razor
//import L from "./lib/leaflet/leaflet.js";
//import "./lib/leaflet-contextmenu/leaflet.contextmenu.min.js";

import { generateArucoMarker } from "./aruco-tag-generator.js";

export const roverMaps = {};

export class RoverMap {
    id = "";
    lMap = null;
    waypointLayerGroup = null;
    dotNetComponent = null;
    positionDisplay = null;
    roverIcon = null;

    // Create leaflet map.
    constructor(id, dotNetComponent, urlTemplate, initialLat, initialLong, initialZoomLevel) {
        this.dotNetComponent = dotNetComponent;
        this.lMap = L.map(id, {
            center: [initialLat, initialLong],
            zoom: initialZoomLevel,
            contextmenu: true,
            contextmenuWidth: 140,
            contextmenuItems: [{
                text: "Add Waypoint",
                callback: this.addWaypoint.bind(this)
            }]
        }).addLayer(L.tileLayer(urlTemplate, {
            attribution: "Basestation_Software.Api",
            maxNativeZoom: 18,
            maxZoom: 21,
        })).addControl(L.control.scale({
            metric: true,
            imperial: false
        }));
        this.lMap.on("zoomend", this.onZoomLevelChange.bind(this));
        this.lMap.on("moveend", this.onZoomLevelChange.bind(this));
        let Position = L.Control.extend({
            container: null,
            options: {
                position: "topright"
            },
            onAdd: function(map) {
                this.container = L.DomUtil.create("div", "mouseposition");
                this.container.style = "padding: 0.1em; color: red; background-color: rgba(255, 255, 0, 0.9);";
                return this.container;
            },
            updateHTML: function(lat, lng) {
                this.container.innerHTML = `Latitude: ${lat.toFixed(6)} Longitiude: ${lng.toFixed(6)}`;
            }
        });
        this.positionDisplay = new Position();
        this.lMap.addControl(this.positionDisplay);
        this.lMap.addEventListener('mousemove', (event) => {
            this.positionDisplay.updateHTML(event.latlng.lat, event.latlng.lng);
        });
        this.roverIcon = L.marker([37.951764, -91.778441], { icon: new L.divIcon({ className: "rover-map-icon", iconSize: [50, 50] }) }).addTo(this.lMap);

        this.waypointLayerGroup = L.layerGroup([]).addTo(this.lMap);
    }
    // Call component.OnZoomLevel.
    onZoomLevelChange() {
        let center = this.lMap.getCenter();
        let zoom = this.lMap.getZoom();
        this.dotNetComponent.invokeMethodAsync("OnZoomLevel", center.lat, center.lng, zoom);
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
                L.svgOverlay(svgElement, svgBounds, { interactive: false, zIndex: 0 }).addTo(this.waypointLayerGroup);
                L.polyline([[lat, lng], [lat + o, lng]], { color: "white" }).addTo(this.waypointLayerGroup);
            });
        }

    }
    // Clear waypoint markers.
    clearWaypointMarkers() {
        this.waypointLayerGroup.clearLayers();
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

export function createRoverMap(id, dotNetComponent, urlTemplate, initialLat, initialLong, initialZoomLevel) {
    if (id in roverMaps) {
        console.warn("RoverMap", id, "already exists.");
    } else {
        roverMaps[id] = new RoverMap(id, dotNetComponent, urlTemplate, initialLat, initialLong, initialZoomLevel);
    }
    console.log("Created RoverMap:", id);
}

export function deleteRoverMap(id) {
    if (id in roverMaps) {
        delete roverMaps[id];
        console.log("Deleted RoverMap:", id);
    }
}
