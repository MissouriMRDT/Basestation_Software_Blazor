// Used by Accelerometer.razor
import * as THREE from "three";
import { STLLoader } from "three-stdlib";
import { OrbitControls } from "three-stdlib";

export const roverViews = {};

export class Rover3DView {
    id = null;
    dotNetComponent = null;
    renderer = null;
    scene = null;
    camera = null;
    roverMesh = null;

    constructor(id, dotNetComponent) {
        this.id = id;
        this.dotNetComponent = dotNetComponent;

        const container = document.getElementById(`rover-view-${this.id}`);

        const scene = new THREE.Scene();
        scene.castShadow = true;
        scene.receiveShadow = true;
        const loader = new STLLoader();

        loader.load("models/Rover.stl", (roverGeometry) => {
            const material = new THREE.MeshPhongMaterial({ color: 0x9a0000, specular: 0x111111, shininess: 200 });
            this.roverMesh = new THREE.Mesh(roverGeometry, material);
            this.roverMesh.position.set(0, 0, 0);
            this.roverMesh.scale.set(1, 1, 1);
            this.roverMesh.castShadow = true;

            roverGeometry.center();
            scene.add(this.roverMesh);
        });

        const groundPlane = new THREE.Mesh(
            new THREE.PlaneGeometry(20, 20),
            new THREE.MeshPhongMaterial({ color: 0xa1a1a1, side: THREE.DoubleSide })
        );
        groundPlane.rotation.x = -Math.PI / 2;
        groundPlane.position.y = -5;
        groundPlane.receiveShadow = true;
        scene.add(groundPlane);

        scene.add(new THREE.AmbientLight(0xfcf9cf));
        const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
        directionalLight.position.y = 3;
        directionalLight.castShadow = true;
        scene.add(directionalLight);

        //const helper = new THREE.CameraHelper(directionalLight.shadow.camera);
        //this.scene.add(helper);

        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.z = 6;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap
        container.appendChild(renderer.domElement);

        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;

        //this.mutationObserver = new MutationObserver((mutationList) => {
        //    for (const mutation of mutationList) {
        //        if (mutation.type === "childList") {
        //            if (mutation.removedNodes && mutation.removedNodes[0] === container) {
        //                this.mutationObserver && this.observer.disconnect();
        //                delete this.mutationObserver;
        //                deleteRoverView(this.id);
        //            }
        //        }
        //    }
        //});
        //this.mutationObserver.observe(container, { childList: true });

        new ResizeObserver(() => this.onResize()).observe(container);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.minDistance = 1;
        controls.maxDistance = 7;
        controls.enablePan = false;

        this.animationLoop();
    }

    onResize() {
        const container = document.getElementById(`rover-view-${this.id}`);
        this.camera.aspect = container.clientWidth / container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(container.clientWidth, container.clientHeight);
    }

    animationLoop() {
        requestAnimationFrame(this.animationLoop.bind(this));
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

export function deleteRoverView(id) {
    delete roverViews[id];
    console.log("Deleted Rover3DView:", id);
}
