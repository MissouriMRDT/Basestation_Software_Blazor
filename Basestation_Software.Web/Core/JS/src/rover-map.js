// Used by RoverMap.razor
import L from "leaflet";
import "leaflet-contextmenu";

// Snowpack will automatically inject CSS files
import "leaflet/dist/leaflet.css";
import "leaflet-contextmenu/dist/leaflet.contextmenu.css";

export const roverMaps = {};

export class RoverMap {
    lMap = null;
    waypointLayerGroup = null;
    dotNetComponent = null;
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
        this.lMap.on('zoomend', this.onZoomLevelChange.bind(this));
        this.lMap.on('moveend', this.onZoomLevelChange.bind(this));
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
    addWaypointMarker(lat, lng, radius, color) {
        if (radius === 0) {
            L.circleMarker([lat, lng], { radius: 20, color: color, dashArray: "15.4 16", fill: false }).addTo(this.waypointLayerGroup);
        } else {
            L.circle([lat, lng], { radius: radius, color: color }).addTo(this.waypointLayerGroup);
        }
    }
    // Clear waypoint markers.
    clearWaypointMarkers() {
        this.waypointLayerGroup.clearLayers();
    }
}

export function createRoverMap(id, dotNetComponent, urlTemplate, initialLat, initialLong, initialZoomLevel) {
    roverMaps[id] = new RoverMap(id, dotNetComponent, urlTemplate, initialLat, initialLong, initialZoomLevel);
    console.log("Created RoverMap:", id);
}
