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

class RoverMap {
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
        this.roverIcon = L.marker([37.951764, -91.778441], { icon: new L.divIcon({ className: "rover-map-icon", iconSize: [50, 50] }) }).addTo(this.lMap);

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

    addRoverIcon(lat, lng) {
        this.roverIcon.setLatLng([lat, lng]);
    }

    // Clear waypoint markers.
    clearWaypointMarkers() {
        this.waypointLayerGroup.clearLayers();
    }
}

function createRoverMap(id, dotNetComponent, urlTemplate, initialLat, initialLong, initialZoomLevel) {
    // Create global roverMaps collection if it doesn't exist.
    if (window.roverMaps === undefined) { window.roverMaps = {}; }
    window.roverMaps[id] = new RoverMap(id, dotNetComponent, urlTemplate, initialLat, initialLong, initialZoomLevel);
}

class Rover3DView {
    id = null;
    dotNetComponent = null;
    scene = null;
    camera = null;
    renderer = null;
    roverMesh = null;
    clock = null;
    resizeObserver = null;
    darkModeObserver = null;

    constructor(id, dotNetComponent) {
        this.id = id;
        this.dotNetComponent = dotNetComponent;

        const container = document.getElementById(`rover-view-${this.id}`);

        this.scene = new THREE.Scene();
        this.scene.castShadow = true;
        this.scene.receiveShadow = true;
        const loader = new THREE.STLLoader();


        //const group = new THREE.Group();
        //this.scene.add(group);
        loader.load("models/Rover.stl", (roverGeometry) => {

            const material = new THREE.MeshPhongMaterial({ color: 0x9a0000, specular: 0x111111, shininess: 200 });
            this.roverMesh = new THREE.Mesh(roverGeometry, material);
            this.roverMesh.position.set(0, 0, 0);
            this.roverMesh.scale.set(1, 1, 1);
            this.roverMesh.castShadow = true;

            roverGeometry.center();
            this.scene.add(this.roverMesh);
        });

        const groundPlane = new THREE.Mesh(
            new THREE.PlaneGeometry(20, 20),
            new THREE.MeshBasicMaterial({ color: 0xc1c1c1, side: THREE.DoubleSide })
        );
        groundPlane.rotation.x = -Math.PI / 2;
        groundPlane.position.y = -3;
        groundPlane.receiveShadow = true;
        this.scene.add(groundPlane);

        this.scene.add(new THREE.AmbientLight(0xfcf9cf));
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.y = 3;
        directionalLight.castShadow = true;
        this.scene.add(directionalLight);

        const helper = new THREE.CameraHelper(directionalLight.shadow.camera);
        this.scene.add(helper);
        //const light = new THREE.PointLight(0xffffff, 1, 100);
        //light.position.set(15, 15, 15);
        //this.scene.add(light);

        this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        this.camera.position.z = 3;

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.renderer.shadowMap.enabled = true;
        //this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
        container.appendChild(this.renderer.domElement);

        //window.addEventListener("resize", this.onWindowResize.bind(this));
        this.resizeObserver = new ResizeObserver(this.onWindowResize.bind(this));
        this.resizeObserver.observe(container);
        //this.darkModeObserver = new MutationObserver((mutationList) => {
        //    for (const mutation of mutationList) {
        //        if (mutation.type === "attributes" && mutation.attributeName === "data-bs-theme") {
        //            console.log("changed theme!");
        //        }
        //    }
        //});
        //this.darkModeObserver.observe(document.querySelector("html"), { attributes: true, childLists: false });

        const controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        controls.minDistance = 0.5;
        controls.maxDistance = 5;
        controls.enablePan = false;

        console.log("created 3D view:", this);

        this.clock = new THREE.Clock();
        this.animationLoop();
    }

    onWindowResize() {
        const container = document.getElementById(`rover-view-${this.id}`);
        this.camera.aspect = container.clientWidth / container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(container.clientWidth, container.clientHeight);
    }

    animationLoop() {
        requestAnimationFrame(this.animationLoop.bind(this));
        const dt = this.clock.getDelta();
        this.renderer.render(this.scene, this.camera);
    }
}

function createRoverView(id, dotNetComponent) {
    // lazy load view array
    if (window.roverViews === undefined) { window.roverViews = {}; }
    window.roverViews[id] = new Rover3DView(id, dotNetComponent);
}
