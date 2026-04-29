// Used by VR.razor

import * as THREE from "./lib/three/three.module.js";
import { STLLoader } from "./lib/three/STLLoader.js";
import { GLTFLoader } from "./lib/three/GLTFLoader.js";
import { OrbitControls } from "./lib/three/OrbitControls.js";
import { VRButton } from "./lib/three/VRButton.js";
import * as Cameras from "./cameras.js";

const NEGATIVE_Y = new THREE.Vector3(0, -1, 0);
const POSITIVE_Y = new THREE.Vector3(0, 1, 0);
const MATERIALS = {
    rover: new THREE.MeshLambertMaterial({ color: new THREE.Color().setRGB(1, 0, 0), transparent: true, opacity: 0.7 }),
    arm: new THREE.MeshLambertMaterial({ color: new THREE.Color().setRGB(0, 1, 0), transparent: true, opacity: 0.7 }),
    targetArm: new THREE.MeshLambertMaterial({ color: new THREE.Color().setRGB(0, 0, 1), transparent: true, opacity: 0.7 })
}

let camera, scene, renderer, roverMesh, arm, targetArm, video;
let armJoints = { x: null, j2: null, j3: null, j4: null, j5: null, j6: null };
let targetArmJoints = { x: null, j2: null, j3: null, j4: null, j5: null, j6: null };

function init() {
    scene = new THREE.Scene();
    scene.castShadow = true;
    scene.receiveShadow = true;
    const stlLoader = new STLLoader();

    stlLoader.load("/models/Rover.stl", (roverGeometry) => {
        roverMesh = new THREE.Mesh(roverGeometry, MATERIALS.rover);
        roverMesh.position.set(0, 0, 0);
        roverMesh.scale.set(1, 1, 1);
        roverMesh.castShadow = true;
        roverGeometry.center();

        let lightingPanel = new THREE.Mesh(
            new THREE.PlaneGeometry(0.8, 0.8),
            new THREE.MeshPhysicalMaterial({ color: 0x000000, emissive: 0x000000 })
        );
        lightingPanel.position.y = -0.55;
        lightingPanel.position.z = 2;
        roverMesh.add(lightingPanel);

        scene.add(roverMesh);

        const gltfLoader = new GLTFLoader();
        gltfLoader.load("/models/AthenaArm.glb", (loadedData) => {
            arm = loadedData.scene.children[0];
            arm.scale.multiplyScalar(0.112);
            arm.setRotationFromEuler(new THREE.Euler(Math.PI / 2, Math.PI / 2, -Math.PI / 2, "XYZ"));
            arm.position.set(-0.75, -0.67, -0.75);
            arm.material = MATERIALS.arm;
            arm.castShadow = true;
            armJoints.x = arm.getObjectByName("Shoulder");
            armJoints.j2 = arm.getObjectByName("Bicep");
            armJoints.j3 = arm.getObjectByName("Forearm_Roll");
            armJoints.j4 = arm.getObjectByName("Forearm");
            armJoints.j5 = arm.getObjectByName("Wrist");
            armJoints.j6 = arm.getObjectByName("Gripper");
            for (let joint in targetArmJoints) {
                armJoints[joint].material = MATERIALS.arm;
                armJoints[joint].castShadow = true;
            }
            roverMesh.add(arm);
        });

        gltfLoader.load("/models/AthenaArm.glb", (loadedData) => {
            targetArm = loadedData.scene.children[0];
            targetArm.scale.multiplyScalar(0.112);
            targetArm.setRotationFromEuler(new THREE.Euler(Math.PI / 2, Math.PI / 2, -Math.PI / 2, "XYZ"));
            targetArm.position.set(-0.75, -0.67, -0.75);
            targetArm.material = MATERIALS.targetArm;
            targetArm.castShadow = true;
            targetArmJoints.x = targetArm.getObjectByName("Shoulder");
            targetArmJoints.j2 = targetArm.getObjectByName("Bicep");
            targetArmJoints.j3 = targetArm.getObjectByName("Forearm_Roll");
            targetArmJoints.j4 = targetArm.getObjectByName("Forearm");
            targetArmJoints.j5 = targetArm.getObjectByName("Wrist");
            targetArmJoints.j6 = targetArm.getObjectByName("Gripper");
            for (let joint in targetArmJoints) {
                targetArmJoints[joint].material = MATERIALS.targetArm;
                targetArmJoints[joint].castShadow = true;
            }
            roverMesh.add(targetArm);
        });
    });

    Cameras.onConnected.push(() => {
        let video = document.createElement(Cameras.tracks[0].kind);
        video.srcObject = new MediaStream([Cameras.tracks[0]]);
        video.autoplay = true;
        video.muted = true;
        video.controls = false;
        document.body.appendChild(video);
        const texture = new THREE.VideoTexture(video);
        texture.colorSpace = THREE.SRGBColorSpace;
        const geometry = new THREE.SphereGeometry(30, 50, 50, 0, Math.PI * 0.25 * (1600 / 1200), Math.PI * 0.25, Math.PI * 0.25);
        geometry.scale(-1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.y = - Math.PI / 2;
        scene.add(mesh);
    });
    Cameras.connect();

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

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 6;

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap
    renderer.domElement.style = "position: absolute; top: 0; left: 0;";
    renderer.xr.enabled = true;
    document.body.appendChild(renderer.domElement);

    scene = scene;
    camera = camera;
    renderer = renderer;

    window.addEventListener('resize', onWindowResize);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 1;
    controls.maxDistance = 10;
    controls.enablePan = true;

    document.body.appendChild(VRButton.createButton(renderer));

    renderer.setAnimationLoop(function () {
        renderer.render(scene, camera);
    });

    animationLoop();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animationLoop() {
    renderer.render(scene, camera);
    requestAnimationFrame(animationLoop);
}

function updateAngles(pitch, yaw, roll) {
    console.log("Set angle:", pitch, yaw, roll);
    roverMesh?.rotation.set(pitch, yaw, roll);
}

function updateArm(x, j2, j3, j4, j5, j6) {
    armJoints.x.position.z = 7.06 + x;
    armJoints.j2.setRotationFromEuler(new THREE.Euler(0, 0, j2 * Math.PI / 180, "XYZ"));
    armJoints.j3.setRotationFromEuler(new THREE.Euler(0, 0, j3 * Math.PI / 180, "XYZ"));
    armJoints.j4.setRotationFromEuler(new THREE.Euler(j4 * Math.PI / 180, 0, 0, "XYZ"));
    armJoints.j5.setRotationFromEuler(new THREE.Euler(0, 0, j5 * Math.PI / 180, "XYZ"));
    armJoints.j6.setRotationFromEuler(new THREE.Euler(j6 * Math.PI / 180, 0, 0, "XYZ"));
}

function updateTargetArm(x, j2, j3, j4, j5, j6) {
    targetArmJoints.x.position.z = 7.06 + x;
    targetArmJoints.j2.setRotationFromEuler(new THREE.Euler(0, 0, j2 * Math.PI / 180, "XYZ"));
    targetArmJoints.j3.setRotationFromEuler(new THREE.Euler(0, 0, j3 * Math.PI / 180, "XYZ"));
    targetArmJoints.j4.setRotationFromEuler(new THREE.Euler(j4 * Math.PI / 180, 0, 0, "XYZ"));
    targetArmJoints.j5.setRotationFromEuler(new THREE.Euler(0, 0, j5 * Math.PI / 180, "XYZ"));
    targetArmJoints.j6.setRotationFromEuler(new THREE.Euler(j6 * Math.PI / 180, 0, 0, "XYZ"));
}

function updateAnglesFromUpVector(x, y, z) {
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
        roverMesh?.setRotationFromEuler(new THREE.Euler(0, 0, Math.PI));
    } else {
        roverMesh?.setRotationFromAxisAngle(axisAround, angleAround);
    }
    // displayPitch: -pitch;
    // displayRoll: -roll;
}

function updateLighting(r, g, b) {
    lightingPanel?.material.emissive.setRGB(r / 255.0, g / 255.0, b / 255.0);
}

init();
