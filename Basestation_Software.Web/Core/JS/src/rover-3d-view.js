// Used by Accelerometer.razor
import * as THREE from "three";
import { STLLoader } from "three-stdlib";
import { OrbitControls } from "three-stdlib";

export const roverViews = {};

export class Rover3DView {
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
        const loader = new STLLoader();

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
            new THREE.MeshPhongMaterial({ color: 0xa1a1a1, side: THREE.DoubleSide })
        );
        groundPlane.rotation.x = -Math.PI / 2;
        groundPlane.position.y = -5;
        groundPlane.receiveShadow = true;
        this.scene.add(groundPlane);

        this.scene.add(new THREE.AmbientLight(0xfcf9cf));
        const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
        directionalLight.position.y = 3;
        directionalLight.castShadow = true;
        this.scene.add(directionalLight);

        //const helper = new THREE.CameraHelper(directionalLight.shadow.camera);
        //this.scene.add(helper);

        this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        this.camera.position.z = 6;

        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
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

        const controls = new OrbitControls(this.camera, this.renderer.domElement);
        controls.minDistance = 0.5;
        controls.maxDistance = 5;
        controls.enablePan = false;

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

    updateAngles(pitch, yaw, roll) {
        this.roverMesh?.rotation.set(pitch, yaw, roll);
    }
}

export function createRoverView(id, dotNetComponent) {
    roverViews[id] = new Rover3DView(id, dotNetComponent);
    console.log("Created Rover3DView:", id);
}
