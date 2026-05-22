// Used by Rover3DView.razor

import * as THREE from "./lib/three/three.module.js";
import { STLLoader } from "./lib/three/STLLoader.js";
import { GLTFLoader } from "./lib/three/GLTFLoader.js";
import { OrbitControls } from "./lib/three/OrbitControls.js";

export const roverViews = {};

const NEGATIVE_Y = new THREE.Vector3(0, -1, 0);
const POSITIVE_Y = new THREE.Vector3(0, 1, 0);
const MATERIALS = {
    rover: new THREE.MeshLambertMaterial({ color: new THREE.Color().setRGB(1, 0, 0), transparent: true, opacity: 0.7 }),
    arm: new THREE.MeshLambertMaterial({ color: new THREE.Color().setRGB(0, 1, 0), transparent: true, opacity: 0.4 }),
    targetArm: new THREE.MeshLambertMaterial({ color: new THREE.Color().setRGB(0, 0, 1), transparent: true, opacity: 0.4 }),
}

export class Rover3DView {
    container = null;
    renderer = null;
    scene = null;
    camera = null;
    roverMesh = null;
    arm = null;
    armJoints = { x: null, j2: null, j3: null, j4: null, j5: null, j6: null };
    targetArm = null;
    targetArmJoints = { x: null, j2: null, j3: null, j4: null, j5: null, j6: null };
    endEffectorSphere = null;
    lightingPanel = null;
    resizeObserver = null;
    frameId = 0;

    constructor(container) {
        this.container = container;
        const scene = new THREE.Scene();
        scene.castShadow = true;
        scene.receiveShadow = true;
        const stlLoader = new STLLoader();

        stlLoader.load("/models/Rover.stl", (roverGeometry) => {
            this.roverMesh = new THREE.Mesh(roverGeometry, MATERIALS.rover);
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

            const gltfLoader = new GLTFLoader();
            gltfLoader.load("/models/AthenaArm.glb", (loadedData) => {
                this.arm = loadedData.scene.children[0];
                this.arm.scale.multiplyScalar(0.112);
                this.arm.setRotationFromEuler(new THREE.Euler(Math.PI / 2, Math.PI / 2, -Math.PI / 2, "XYZ"));
                this.arm.position.set(-0.75, -0.67, -0.75);
                this.arm.material = MATERIALS.arm;
                this.arm.castShadow = true;
                this.armJoints.x = this.arm.getObjectByName("Shoulder");
                this.armJoints.j2 = this.arm.getObjectByName("Bicep");
                this.armJoints.j3 = this.arm.getObjectByName("Forearm_Roll");
                this.armJoints.j4 = this.arm.getObjectByName("Forearm");
                this.armJoints.j5 = this.arm.getObjectByName("Wrist");
                this.armJoints.j6 = this.arm.getObjectByName("Gripper");
                for (let joint in this.targetArmJoints) {
                    this.armJoints[joint].material = MATERIALS.arm;
                    this.armJoints[joint].castShadow = true;
                }
                this.roverMesh.add(this.arm);

                this.endEffectorSphere = new THREE.Mesh(new THREE.SphereGeometry(1), new THREE.MeshBasicMaterial({ color: 0xFFFF00 }));
                this.endEffectorSphere.visible = false;
                this.arm.add(this.endEffectorSphere);
            });

            gltfLoader.load("/models/AthenaArm.glb", (loadedData) => {
                this.targetArm = loadedData.scene.children[0];
                this.targetArm.scale.multiplyScalar(0.112);
                this.targetArm.setRotationFromEuler(new THREE.Euler(Math.PI / 2, Math.PI / 2, -Math.PI / 2, "XYZ"));
                this.targetArm.position.set(-0.75, -0.67, -0.75);
                this.targetArm.material = MATERIALS.targetArm;
                this.targetArm.castShadow = true;
                this.targetArmJoints.x = this.targetArm.getObjectByName("Shoulder");
                this.targetArmJoints.j2 = this.targetArm.getObjectByName("Bicep");
                this.targetArmJoints.j3 = this.targetArm.getObjectByName("Forearm_Roll");
                this.targetArmJoints.j4 = this.targetArm.getObjectByName("Forearm");
                this.targetArmJoints.j5 = this.targetArm.getObjectByName("Wrist");
                this.targetArmJoints.j6 = this.targetArm.getObjectByName("Gripper");
                for (let joint in this.targetArmJoints) {
                    this.targetArmJoints[joint].material = MATERIALS.targetArm;
                    this.targetArmJoints[joint].castShadow = true;
                }
                this.roverMesh.add(this.targetArm);
            });
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

        const camera = new THREE.PerspectiveCamera(75, this.container.clientWidth / this.container.clientHeight, 0.1, 1000);
        camera.position.z = 6;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(this.container.clientWidth, this.container.clientHeight, false);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFShadowMap;
        renderer.domElement.style = "position: absolute; top: 0; left: 0;";
        this.container.style.position = "relative";
        this.container.appendChild(renderer.domElement);

        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;

        this.resizeObserver = new ResizeObserver(this.onResize.bind(this));
        this.resizeObserver.observe(this.container);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.minDistance = 1;
        controls.maxDistance = 10;
        controls.enablePan = true;

        this.animationLoop();
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
        this.frameId = requestAnimationFrame(this.animationLoop.bind(this));
    }

    updateAngles(pitch, yaw, roll) {
        console.log("Set angle:", pitch, yaw, roll);
        this.roverMesh?.rotation.set(pitch, yaw, roll);
    }

    updateArm(x, j2, j3, j4, j5, j6) {
        this.armJoints.x.position.z = 7.06 + x;
        this.armJoints.j2.setRotationFromEuler(new THREE.Euler(0, 0, j2 * Math.PI / 180, "XYZ"));
        this.armJoints.j3.setRotationFromEuler(new THREE.Euler(0, 0, j3 * Math.PI / 180, "XYZ"));
        this.armJoints.j4.setRotationFromEuler(new THREE.Euler(j4 * Math.PI / 180, 0, 0, "XYZ"));
        this.armJoints.j5.setRotationFromEuler(new THREE.Euler(0, 0, j5 * Math.PI / 180, "XYZ"));
        this.armJoints.j6.setRotationFromEuler(new THREE.Euler(j6 * Math.PI / 180, 0, 0, "XYZ"));
    }

    updateTargetArm(x, j2, j3, j4, j5, j6) {
        this.targetArmJoints.x.position.z = 7.06 + x;
        this.targetArmJoints.j2.setRotationFromEuler(new THREE.Euler(0, 0, j2 * Math.PI / 180, "XYZ"));
        this.targetArmJoints.j3.setRotationFromEuler(new THREE.Euler(0, 0, j3 * Math.PI / 180, "XYZ"));
        this.targetArmJoints.j4.setRotationFromEuler(new THREE.Euler(j4 * Math.PI / 180, 0, 0, "XYZ"));
        this.targetArmJoints.j5.setRotationFromEuler(new THREE.Euler(0, 0, j5 * Math.PI / 180, "XYZ"));
        this.targetArmJoints.j6.setRotationFromEuler(new THREE.Euler(j6 * Math.PI / 180, 0, 0, "XYZ"));
    }

    updateTarget(visible, x, y, z) {
        this.endEffectorSphere.position.set(x, y, z);
        this.endEffectorSphere.visible = visible;
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
        cancelAnimationFrame(this.frameId);
        this.renderer.dispose(); // this should happen automatically, but it doesn't hurt to be safe
        this.resizeObserver.disconnect(); // ResizeObserver keeps references to js objects
    }
}

export function createRoverView(container) {
    return new Rover3DView(container);
}
