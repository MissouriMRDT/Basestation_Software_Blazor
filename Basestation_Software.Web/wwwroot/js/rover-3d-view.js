// Used by Rover3DView.razor

import * as THREE from "./lib/three/three.js";
import { STLLoader } from "./lib/three/STLLoader.js";
import { OrbitControls } from "./lib/three/OrbitControls.js";

const NEGATIVE_Y = new THREE.Vector3(0, -1, 0);
const POSITIVE_Y = new THREE.Vector3(0, 1, 0);

export class Rover3DView {
    container = null;
    renderer = null;
    scene = null;
    camera = null;
    roverMesh = null;
    lightingPanel = null;

    constructor(container) {
        this.container = container;

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

            this.lightingPanel = new THREE.Mesh(
                new THREE.PlaneGeometry(0.8, 0.8),
                new THREE.MeshPhysicalMaterial({ color: 0x000000, emissive: 0x000000 })
            );
            this.lightingPanel.position.y = -0.55;
            this.lightingPanel.position.z = 2;
            this.roverMesh.add(this.lightingPanel);

            scene.add(this.roverMesh);
        });

        const groundPlane = new THREE.Mesh(
            new THREE.PlaneGeometry(20, 20),
            new THREE.MeshPhongMaterial({ color: 0xa1a1a1, side: THREE.FrontSide })
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

        const camera = new THREE.PerspectiveCamera(75, this.container.clientWidth / this.container.clientHeight, 0.1, 1000);
        camera.position.z = 6;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(this.container.clientWidth, this.container.clientHeight, false);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap
        renderer.domElement.style = "position: absolute; top: 0; left: 0;";
        this.container.style.position = "relative";
        this.container.appendChild(renderer.domElement);

        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;

        new ResizeObserver(() => this.onResize()).observe(this.container);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.minDistance = 1;
        controls.maxDistance = 7;
        controls.enablePan = false;

        this.renderer.setAnimationLoop(this.animationLoop.bind(this));
    }

    onResize() {
        if (this.container !== null) {
            this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(this.container.clientWidth, this.container.clientHeight, false);
        }
    }

    animationLoop() {
        this.renderer.render(this.scene, this.camera);
    }

    updateAngles(pitch, yaw, roll) {
        console.log("Set angle:", pitch, yaw, roll);
        this.roverMesh?.rotation.set(pitch, yaw, roll);
    }

    updateAnglesFromUpVector(x, y, z) {
        const upVector = new THREE.Vector3(x, y, z);
        const normalizedUp = upVector.clone().normalize();
        const axisAround = normalizedUp.clone().cross(POSITIVE_Y).normalize();
        const angleAround = normalizedUp.angleTo(POSITIVE_Y);
        let roll = Math.round((Math.asin(normalizedUp.x) / Math.PI) * 180);
        let pitch = Math.round((Math.asin(normalizedUp.z) / Math.PI) * 180);
        // this still braks for y < 0, but if the rover gets itself into that orientation, we have bigger problems
        if (normalizedUp.y < 0) {
            roll = 180 - roll;
            pitch = 180 - pitch;
        }
        // set angles
        if (normalizedUp.equals(NEGATIVE_Y)) {
            this.roverMesh?.setRotationFromEuler(new THREE.Euler(0, 0, Math.PI));
        } else {
            this.roverMesh?.setRotationFromAxisAngle(axisAround, angleAround);
        }
        // displayPitch: -pitch;
        // displayRoll: -roll;
    }

    updateLighting(r, g, b) {
        this.lightingPanel?.material.emissive.setRGB(r / 255.0, g / 255.0, b / 255.0);
    }

    dispose() {
        this.renderer.setAnimationLoop(null);
    }
}

export function createRoverView(container) {
    return new Rover3DView(container);
}
