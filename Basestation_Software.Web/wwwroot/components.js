class RoverAttitude {
    dotNetComponent = null;
    svg = null;
    svgPitch = null;
    svgRoll = null;
    svgPointer = null;

    constructor(id, dotNetComponent) {
        this.dotNetComponent = dotNetComponent;
        this.svg = document.getElementById(id);
        this.svgPitch = this.svg.getElementById("pitch");
        this.svgRoll = this.svg.getElementById("roll");
        this.svgPointer = this.svg.getElementById("pointer");
    }

    update(pitch, roll) {
        // Pitch relative to upright [-90D,90U]
        if (pitch > 90) { pitch = 90; }
        else if (pitch < -90) { pitch = -90; }
        // Roll relative to upright [-180L, 180R]
        if (roll > 180) { roll = 180; }
        else if (roll < -180) { roll = -180; }
        this.svgPitch.transform.baseVal.getItem(0).setTranslate(-60, pitch - 60);
        this.svgPitch.transform.baseVal.getItem(1).setRotate(roll, 90, 90 - pitch);
        this.svgRoll.transform.baseVal.getItem(0).setRotate(roll, 30, 30);
    }
}

function createRoverAttitude(id, dotNetComponent) {
    // Create global roverAttitude collection if it doesn't exist.
    if (window.roverAttitude === undefined) { window.roverAttitude = {}; }
    window.roverAttitude[id] = new RoverAttitude(id, dotNetComponent);
}

class roverMap {
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
                callback: this.addWaypoint
            }]
        }).addLayer(L.tileLayer(urlTemplate, {
            attribution: "Basestation_Software.Api",
            maxNativeZoom: 18,
            maxZoom: 21,
        })).addControl(L.control.scale({
            metric: true,
            imperial: false
        }));
        this.lMap.on('zoomend', this.onZoomLevelChange);
        this.lMap.on('moveend', this.onZoomLevelChange);
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

function createRoverMap(id, dotNetComponent, urlTemplate, initialLat, initialLong, initialZoomLevel) {
    // Create global roverMaps collection if it doesn't exist.
    if (window.roverMaps === undefined) { window.roverMaps = {}; }
    window.roverMaps[id] = new roverMap(id, dotNetComponent, urlTemplate, initialLat, initialLong, initialZoomLevel);
}
