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
    rover: new THREE.MeshLambertMaterial({ color: new THREE.Color(1, 0, 0), transparent: true, opacity: 0.7 }),
    arm: new THREE.MeshLambertMaterial({ color: new THREE.Color(0, 1, 0), transparent: true, opacity: 0.7 }),
    targetArm: new THREE.MeshLambertMaterial({ color: new THREE.Color(0, 0, 1), transparent: true, opacity: 0.7 })
}

let camera, scene, renderer, roverMesh, arm, targetArm, dotNetComponent;
let armJoints = { x: null, j2: null, j3: null, j4: null, j5: null, j6: null };
let targetArmJoints = { x: null, j2: null, j3: null, j4: null, j5: null, j6: null };
let videoElements = [];
let videoMeshes = [];

export function init(dotNetComponent_) {
    dotNetComponent = dotNetComponent_;
    scene = new THREE.Scene();
    scene.castShadow = true;
    scene.receiveShadow = true;
    const stlLoader = new STLLoader();

    stlLoader.load("/models/Rover.stl", (roverGeometry) => {
        roverMesh = new THREE.Mesh(roverGeometry, MATERIALS.rover);
        roverMesh.position.set(2, -1, 0);
        roverMesh.rotation.set(0, Math.PI * 0.3, 0, "XYZ")
        roverMesh.scale.set(0.5, 0.5, 0.5);
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
            }
            roverMesh.add(targetArm);
        });
    });

    Cameras.connect();

    scene.add(new THREE.AmbientLight(0xfcf9cf, 2));

    // Display Dimensions: [phiStart, phiLength, thetaStart, thetaLength]
    const d = [
        [Math.PI * 0.5, Math.PI * 0.25, Math.PI * 0.25, Math.PI * 0.25], // Left
        [Math.PI * 0.75, Math.PI * 0.5, Math.PI * 0.25, Math.PI * 0.25], // Center
        [Math.PI * 1.25, Math.PI * 0.25, Math.PI * 0.25, Math.PI * 0.25], // Right
        [Math.PI * 0.75, Math.PI * 0.5, Math.PI * 0, Math.PI * 0.25], // Up
        [Math.PI * 0.75, Math.PI * 0.5, Math.PI * 0.5, Math.PI * 0.25], // Down
    ]
    for (let displayIndex = 0; displayIndex < 5; displayIndex++) {
        const geometry = new THREE.SphereGeometry(30, 10, 10, d[displayIndex][0], d[displayIndex][1], d[displayIndex][2], d[displayIndex][3]);
        geometry.scale(-1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 0) });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.y = - Math.PI / 2;
        scene.add(mesh);
        videoMeshes[displayIndex] = mesh;
    }

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

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

export function updateArm(x, j2, j3, j4, j5, j6) {
    armJoints.x.position.z = 7.06 + x;
    armJoints.j2.setRotationFromEuler(new THREE.Euler(0, 0, j2 * Math.PI / 180, "XYZ"));
    armJoints.j3.setRotationFromEuler(new THREE.Euler(0, 0, j3 * Math.PI / 180, "XYZ"));
    armJoints.j4.setRotationFromEuler(new THREE.Euler(j4 * Math.PI / 180, 0, 0, "XYZ"));
    armJoints.j5.setRotationFromEuler(new THREE.Euler(0, 0, j5 * Math.PI / 180, "XYZ"));
    armJoints.j6.setRotationFromEuler(new THREE.Euler(j6 * Math.PI / 180, 0, 0, "XYZ"));
}

export function updateTargetArm(x, j2, j3, j4, j5, j6) {
    targetArmJoints.x.position.z = 7.06 + x;
    targetArmJoints.j2.setRotationFromEuler(new THREE.Euler(0, 0, j2 * Math.PI / 180, "XYZ"));
    targetArmJoints.j3.setRotationFromEuler(new THREE.Euler(0, 0, j3 * Math.PI / 180, "XYZ"));
    targetArmJoints.j4.setRotationFromEuler(new THREE.Euler(j4 * Math.PI / 180, 0, 0, "XYZ"));
    targetArmJoints.j5.setRotationFromEuler(new THREE.Euler(0, 0, j5 * Math.PI / 180, "XYZ"));
    targetArmJoints.j6.setRotationFromEuler(new THREE.Euler(j6 * Math.PI / 180, 0, 0, "XYZ"));
}

export function updateLighting(r, g, b) {
    lightingPanel?.material.emissive.setRGB(r / 255.0, g / 255.0, b / 255.0);
}

export function setSource(displayIndex, cameraIndex) {
    if (videoMeshes[displayIndex] === undefined) {
        console.warn(`[CameraDisplay] Cannot switch display ${displayIndex} when it does not exist.`);
        return;
    }

    if (videoElements[displayIndex] !== undefined) document.body.removeChild(videoElements[displayIndex]);
    if (cameraIndex < 0 || Cameras.tracks.length <= cameraIndex) {
        videoElements[displayIndex] = undefined;
        const material = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 0) });
        videoMeshes[displayIndex].material.dispose();
        videoMeshes[displayIndex].material = material;
        return;
    }

    videoElements[displayIndex] = document.createElement(Cameras.tracks[cameraIndex].kind);
    videoElements[displayIndex].srcObject = new MediaStream([Cameras.tracks[cameraIndex]]);
    videoElements[displayIndex].autoplay = true;
    videoElements[displayIndex].muted = true;
    videoElements[displayIndex].controls = false;
    videoElements[displayIndex].style.width = "50px";
    document.body.appendChild(videoElements[displayIndex]);
    const texture = new THREE.VideoTexture(videoElements[displayIndex]);
    texture.center.x = 0.5;
    texture.center.y = 0.5;
    texture.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.MeshBasicMaterial({ map: texture });
    videoMeshes[displayIndex].material.dispose();
    videoMeshes[displayIndex].material = material;
}

export function rotateDisplay(displayIndex, rotation) {
    if (videoMeshes[displayIndex] === undefined) {
        console.warn(`[CameraDisplay] Cannot rotate display ${displayIndex} when it does not exist.`);
        return;
    }
    let map = videoMeshes[displayIndex]?.material?.map;
    if (map !== undefined && map !== null) map.rotation = rotation * Math.PI / 180;
}

function setGeometry(displayIndex, phi0, phi1, theta0, theta1) {
    if (videoMeshes[displayIndex] === undefined) {
        console.warn(`[CameraDisplay] Cannot set geometry of display ${displayIndex} when it does not exist.`);
        return;
    }
    const geometry = new THREE.SphereGeometry(30, 10, 10, phi0 * Math.PI / 180, (phi1 - phi0) * Math.PI / 180, theta0 * Math.PI / 180, (theta1 - theta0) * Math.PI / 180);
    geometry.scale(-1, 1, 1);
    videoMeshes[displayIndex].geometry.dispose();
    videoMeshes[displayIndex].geometry = geometry;
}

export function setGrid(angles) {
    let [p0, p1, p2, p3, t0, t1, t2, t3] = angles;
    console.log(p0, p1, p2, p3, t0, t1, t2, t3);
    if (p1 < p0) { p1 = p0; }
    if (p2 < p1) { p2 = p1; }
    if (p3 < p2) { p3 = p2; }
    if (t1 < t0) { t1 = t0; }
    if (t2 < t1) { t2 = t1; }
    if (t3 < t2) { t3 = t2; }
    setGeometry(0, p0, p1, t1, t2);
    setGeometry(1, p1, p2, t1, t2);
    setGeometry(2, p2, p3, t1, t2);
    setGeometry(3, p1, p2, t0, t1);
    setGeometry(4, p1, p2, t2, t3);
}