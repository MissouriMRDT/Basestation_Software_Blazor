// Used by Rover3DView.razor

import * as THREE from "./lib/three/three.module.js";
import { GLTFLoader } from "./lib/three/GLTFLoader.js";
import { OrbitControls } from "./lib/three/OrbitControls.js";

function map(x, x1, x2, y1, y2) {
    return (x - x1) / (x2 - x1) * (y2 - y1) + y1
}

const NEGATIVE_Y = new THREE.Vector3(0, -1, 0);
const POSITIVE_Y = new THREE.Vector3(0, 1, 0);
const MATERIALS = {
    master: new THREE.MeshLambertMaterial({ color: new THREE.Color(0xffffff), transparent: true, opacity: 0.4 }),
    disconnected: new THREE.MeshLambertMaterial({ color: new THREE.Color(0xff0000) }),
    ok: new THREE.MeshLambertMaterial({ color: new THREE.Color(0x65c100) }),
    off: new THREE.MeshLambertMaterial({ color: new THREE.Color(0x808080) }),
    error: new THREE.MeshLambertMaterial({ color: new THREE.Color(0xff6600) }),
    auto: new THREE.MeshLambertMaterial({ color: new THREE.Color(0xffffff), transparent: true, opacity: 0.4 }),
    science: new THREE.MeshLambertMaterial({ color: new THREE.Color(0xffffff), transparent: true, opacity: 0.4 }),
    // auto: new THREE.MeshLambertMaterial({ color: new THREE.Color(0xcc22ee), transparent: true, opacity: 0.4 }),
    // science: new THREE.MeshLambertMaterial({ color: new THREE.Color(0x22eecc), transparent: true, opacity: 0.4 }),
    arm: new THREE.MeshLambertMaterial({ color: new THREE.Color(0x44ffaa), transparent: true, opacity: 0.4 }),
    targetArm: new THREE.MeshLambertMaterial({ color: new THREE.Color(0x888888), transparent: true, opacity: 0.4 }),
}

class Camera {
    pan = null;
    tilt = null;
    camera = null;

    constructor(pan, tilt, camera) {
        this.pan = pan;
        this.tilt = tilt;
        this.camera = camera;
    }

    // state: disconnected: 0, streaming: 1, connected: 2
    update(pan, tilt, state) {
        if (this.camera !== null && state >= 0 && state <= 2) this.camera.material = [MATERIALS.disconnected, MATERIALS.ok, MATERIALS.off][state];
        if (this.pan !== null) this.pan.rotation.set(0, pan * Math.PI / 180, 0);
        if (this.tilt !== null) this.tilt.rotation.set(0, 0, -tilt * Math.PI / 180);
    }
}

export class Rover3DView {
    container = null;
    renderer = null;
    scene = null;
    camera = null;

    system = "NONE"; // NONE, AUTONOMY, SCIENCE, ARM

    masterLoaded = false;
    masterRoot = null;
    master = {
        left_gimbal_pan: null, left_gimbal_tilt: null, left_camera: null,
        right_gimbal_pan: null, right_gimbal_tilt: null, right_camera: null,
        back_gimbal_pan: null, back_gimbal_tilt: null, back_camera: null,
        core_board: null, lighting_panel: null, pms_board: null, camera_1: null, camera_2: null, rear_zed: null
    };

    cameras = { left: null, right: null, back: null, science_gimbal: null, af: null, microscope: null, base: null, j4: null, wrist: null };

    autoRoot = null;
    auto = { autonomy: null, front_zed: null };

    scienceRoot = null;
    science = {
        auger_gantry: null, auger_limit_p: null, auger_limit_n: null, auger: null, af_board: null, af_camera: null, af_filters: null, auger_board: null, gimbal_pan: null, gimbal_tilt: null, gimbal_camera: null, y_diverter: null,
        instruments_gantry: null, instruments_limit_p: null, instruments_limit_n: null, ccd_breakout: null, microscope: null, raman_board: null
    };

    armRoot = null;
    arm = { arm_board: null, base_gimbal: null, base_camera: null, j4_gimbal: null, j4_camera: null, wrist_camera: null };
    armJoints = { x: null, j2: null, j3: null, j4: null, j5: null, j6: null };
    targetArmRoot = null;
    targetArmJoints = { x: null, j2: null, j3: null, j4: null, j5: null, j6: null };
    endEffectorSphere = null;

    resizeObserver = null;
    frameId = 0;

    constructor(container) {
        this.container = container;
        const scene = new THREE.Scene();

        const gltfLoader = new GLTFLoader();
        gltfLoader.load("/models/master.glb", loadedData => {
            this.masterRoot = loadedData.scene.children[0]
            this.masterRoot.position.set(0, 0, 0);
            this.masterRoot.material = MATERIALS.master;
            this.masterRoot.scale.set(0.1, 0.1, 0.1);
            for (let object in this.master) { this.master[object] = this.masterRoot.getObjectByName(object); }
            for (let object of ["left_gimbal_pan", "left_gimbal_tilt", "right_gimbal_pan", "right_gimbal_tilt", "back_gimbal_pan", "back_gimbal_tilt", "rear_zed"]) { this.master[object].material = MATERIALS.master; }
            for (let object of ["left_camera", "right_camera", "back_camera", "core_board", "pms_board", "camera_1", "camera_2"]) { this.master[object].material = MATERIALS.disconnected; }
            this.master.lighting_panel.material = new THREE.MeshPhysicalMaterial({ color: 0x000000, emissive: 0x000000 });
            this.cameras.left = new Camera(this.master.left_gimbal_pan, this.master.left_gimbal_tilt, this.master.left_camera);
            this.cameras.right = new Camera(this.master.right_gimbal_pan, this.master.right_gimbal_tilt, this.master.right_camera);
            this.cameras.back = new Camera(this.master.back_gimbal_pan, this.master.back_gimbal_tilt, this.master.back_camera);

            scene.add(this.masterRoot);
            this.masterLoaded = true;
        });

        scene.add(new THREE.AmbientLight(0xfcf9cf));
        const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
        directionalLight.position.y = 3;
        scene.add(directionalLight);

        const camera = new THREE.PerspectiveCamera(75, this.container.clientWidth / this.container.clientHeight, 0.1, 1000);
        camera.position.set(-4, 4, -5);

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(this.container.clientWidth, this.container.clientHeight, false);
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

    setSystem(system) {
        if (!this.masterLoaded) return;
        const gltfLoader = new GLTFLoader();
        if (system == "ARM") {
            gltfLoader.load("/models/arm.glb", loadedData => {
                this.armRoot = loadedData.scene.children[0];
                // this.armRoot.scale.multiplyScalar(0.112);
                this.armRoot.setRotationFromEuler(new THREE.Euler(Math.PI / 2, Math.PI / 2, -Math.PI / 2, "XYZ"));
                this.armRoot.position.set(-6.93, 3.5, -9.88);
                this.armRoot.material = MATERIALS.arm;
                for (let joint in this.armJoints) {
                    this.armJoints[joint] = this.armRoot.getObjectByName(joint);
                    this.armJoints[joint].material = MATERIALS.arm;
                }
                for (let object in this.arm) { this.arm[object] = this.armRoot.getObjectByName(object); }
                for (let object of ["base_gimbal", "j4_gimbal"]) { this.arm[object].material = MATERIALS.arm; }
                for (let object of ["arm_board", "base_camera", "j4_camera", "wrist_camera"]) { this.arm[object].material = MATERIALS.disconnected; }
                this.cameras.base = new Camera(null, this.arm.base_gimbal, this.arm.base_camera);
                this.cameras.j4 = new Camera(null, this.arm.j4_gimbal, this.arm.j4_camera);
                this.cameras.wrist = new Camera(null, null, this.arm.wrist_camera);

                this.masterRoot.add(this.armRoot);

                this.endEffectorSphere = new THREE.Mesh(new THREE.SphereGeometry(1), new THREE.MeshBasicMaterial({ color: 0xFFFF00 }));
                this.endEffectorSphere.visible = false;
                this.armRoot.add(this.endEffectorSphere);

                gltfLoader.load("/models/arm.glb", loadedData => {
                    this.targetArmRoot = loadedData.scene.children[0];
                    // this.targetArmRoot.scale.multiplyScalar(0.112);
                    this.targetArmRoot.setRotationFromEuler(new THREE.Euler(Math.PI / 2, Math.PI / 2, -Math.PI / 2, "XYZ"));
                    this.targetArmRoot.position.set(-6.93, 3.5, -9.88);
                    this.targetArmRoot.material = MATERIALS.targetArm;
                    for (let joint in this.targetArmJoints) {
                        this.targetArmJoints[joint] = this.targetArmRoot.getObjectByName(joint);
                        this.targetArmJoints[joint].material = MATERIALS.targetArm;
                    }
                    for (let object in this.arm) { this.targetArmRoot.getObjectByName(object).material = MATERIALS.targetArm; }
                    this.masterRoot.add(this.targetArmRoot);
                    this.system = "ARM";
                });
            });
        } else if (system == "AUTONOMY") {
            gltfLoader.load("/models/auto.glb", loadedData => {
                this.autoRoot = loadedData.scene.children[0];
                this.autoRoot.material = MATERIALS.auto;
                this.autoRoot.position.set(0, 2.5, -17.7);

                for (let object in this.auto) { this.auto[object] = this.autoRoot.getObjectByName(object); }
                this.auto.front_zed.material = MATERIALS.auto;
                this.auto.autonomy.material = MATERIALS.disconnected;

                this.masterRoot.add(this.autoRoot);
                this.system = "AUTONOMY";
            });
        } else if (system == "SCIENCE") {
            gltfLoader.load("/models/science.glb", loadedData => {
                this.scienceRoot = loadedData.scene.children[0];
                this.scienceRoot.material = MATERIALS.science;
                this.scienceRoot.rotation.y = Math.PI;
                this.scienceRoot.position.set(0, 3.4, -9.2);

                for (let object in this.science) { this.science[object] = this.scienceRoot.getObjectByName(object); }
                for (let object of ["auger_gantry", "auger", "gimbal_pan", "gimbal_tilt", "y_diverter", "instruments_gantry", "ccd_breakout", "af_board", "af_filters"]) { this.science[object].material = MATERIALS.science; }
                for (let object of ["af_camera", "auger_board", "gimbal_camera", "microscope", "raman_board", "instruments_limit_p", "instruments_limit_n", "auger_limit_p", "auger_limit_n"]) { this.science[object].material = MATERIALS.disconnected; }
                this.cameras.science_gimbal = new Camera(this.science.gimbal_pan, this.science.gimbal_tilt, this.science.gimbal_camera);
                this.cameras.af = new Camera(null, null, this.science.af_camera);
                this.cameras.microscope = new Camera(null, null, this.science.microscope);

                this.masterRoot.add(this.scienceRoot);
                this.system = "SCIENCE";
            });
        }
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

    updateCameras(left_pan, left_tilt, left_state,
        right_pan, right_tilt, right_state,
        back_pan, back_tilt, back_state,
        science_gimbal_pan, science_gimbal_tilt, science_gimbal_state,
        af_status, microscope_state,
        base_tilt, base_state,
        j4_tilt, j4_state,
        wrist_state) {
        if (this.masterLoaded) {
            this.cameras.left.update(map(left_pan, 105, 193, -90, 0), map(left_tilt, 117, 30, 90, 0), left_state);
            this.cameras.right.update(map(right_pan, 163, 72, -90, -180), map(right_tilt, 117, 30, 90, 0), right_state);
            this.cameras.back.update(map(back_pan, 80, 260, 90, -90), map(back_tilt, 199, 12, 90, -90), back_state);
        }
        if (this.system == "SCIENCE") {
            this.cameras.science_gimbal.update(map(science_gimbal_pan, 0, 172, 150, -40), map(science_gimbal_tilt, 107, 24, -90, 0), science_gimbal_state);
            this.cameras.af.update(0, 0, af_status);
            this.cameras.microscope.update(0, 0, microscope_state);
        } else if (this.system == "ARM") {
            this.cameras.base.update(0, map(base_tilt, 93, 0, 0, -90), base_state);
            this.cameras.j4.update(0, map(j4_tilt, 228, 104, -90, 0), j4_state);
            this.cameras.wrist.update(0, 0, wrist_state);
        }
    }

    updateAnglesFromUpVector(x, y, z) {
        const upVector = new THREE.Vector3(x, y, z);
        const normalizedUp = upVector.clone().normalize();
        const axisAround = normalizedUp.clone().cross(POSITIVE_Y).normalize();
        const angleAround = normalizedUp.angleTo(POSITIVE_Y);
        let roll = Math.round((Math.asin(normalizedUp.x) / Math.PI) * 180);
        let pitch = Math.round((Math.asin(normalizedUp.z) / Math.PI) * 180);
        // this still breaks for y < 0, but if the rover gets itself into that orientation, we have bigger problems
        if (normalizedUp.y < 0) {
            roll = 180 - roll;
            pitch = 180 - pitch;
        }
        // set angles
        if (normalizedUp.equals(NEGATIVE_Y)) {
            this.masterRoot?.setRotationFromEuler(new THREE.Euler(0, 0, Math.PI));
        } else {
            this.masterRoot?.setRotationFromAxisAngle(axisAround, angleAround);
        }
    }

    updateMaster(corePing, pmsPing, camera1Ping, camera2Ping, r, g, b) {
        if (!this.masterLoaded) return;
        this.master.core_board.material = corePing ? MATERIALS.ok : MATERIALS.disconnected;
        this.master.pms_board.material = pmsPing ? MATERIALS.ok : MATERIALS.disconnected;
        this.master.camera_1.material = camera1Ping ? MATERIALS.ok : MATERIALS.disconnected;
        this.master.camera_2.material = camera2Ping ? MATERIALS.ok : MATERIALS.disconnected;
        this.master.lighting_panel.material.emissive.setRGB(r / 255.0, g / 255.0, b / 255.0);
    }

    updateArm(armPing) {
        if (this.system != "ARM") return;
        this.arm.arm_board.material = armPing ? MATERIALS.ok : MATERIALS.disconnected;
    }

    updateArmJoints(x, j2, j3, j4, j5, j6) {
        if (this.system != "ARM") return;
        this.armJoints.x.position.z = 7.06 + x;
        this.armJoints.j2.setRotationFromEuler(new THREE.Euler(0, 0, j2 * Math.PI / 180, "XYZ"));
        this.armJoints.j3.setRotationFromEuler(new THREE.Euler(0, 0, j3 * Math.PI / 180, "XYZ"));
        this.armJoints.j4.setRotationFromEuler(new THREE.Euler(j4 * Math.PI / 180, 0, 0, "XYZ"));
        this.armJoints.j5.setRotationFromEuler(new THREE.Euler(0, 0, j5 * Math.PI / 180, "XYZ"));
        this.armJoints.j6.setRotationFromEuler(new THREE.Euler(j6 * Math.PI / 180, 0, 0, "XYZ"));
    }

    updateTargetArm(x, j2, j3, j4, j5, j6) {
        if (this.system != "ARM") return;
        this.targetArmJoints.x.position.z = 7.06 + x;
        this.targetArmJoints.j2.setRotationFromEuler(new THREE.Euler(0, 0, j2 * Math.PI / 180, "XYZ"));
        this.targetArmJoints.j3.setRotationFromEuler(new THREE.Euler(0, 0, j3 * Math.PI / 180, "XYZ"));
        this.targetArmJoints.j4.setRotationFromEuler(new THREE.Euler(j4 * Math.PI / 180, 0, 0, "XYZ"));
        this.targetArmJoints.j5.setRotationFromEuler(new THREE.Euler(0, 0, j5 * Math.PI / 180, "XYZ"));
        this.targetArmJoints.j6.setRotationFromEuler(new THREE.Euler(j6 * Math.PI / 180, 0, 0, "XYZ"));
    }

    updateTarget(visible, x, y, z) {
        if (this.system != "ARM") return;
        this.endEffectorSphere.position.set(x, y, z);
        this.endEffectorSphere.visible = visible;
    }

    updateAutonomy(autoPing) {
        if (this.system != "AUTONOMY") return;
        this.auto.autonomy.material = autoPing ? MATERIALS.ok : MATERIALS.disconnected;
    }

    updateScience(augerPosition, augerSpeed, augerLimitSwitch, augerBoardPing, ramanPosition, ramanLimitSwitch, ramanBoardPing) {
        if (this.system != "SCIENCE") return;
        this.science.auger_gantry.position.y = -augerPosition;
        this.science.auger_board.material = augerBoardPing ? MATERIALS.ok : MATERIALS.disconnected;
        this.science.auger_limit_p.material = augerBoardPing ? (augerLimitSwitch & 0b1 ? MATERIALS.ok : MATERIALS.off) : MATERIALS.disconnected;
        this.science.auger_limit_n.material = augerBoardPing ? (augerLimitSwitch & 0b10 ? MATERIALS.ok : MATERIALS.off) : MATERIALS.disconnected;
        this.science.instruments_gantry.position.y = -ramanPosition;
        this.science.raman_board.material = ramanBoardPing ? MATERIALS.ok : MATERIALS.disconnected;
        this.science.auger_limit_p.material = ramanBoardPing ? (ramanLimitSwitch & 0b1 ? MATERIALS.ok : MATERIALS.off) : MATERIALS.disconnected;
        this.science.auger_limit_n.material = ramanBoardPing ? (ramanLimitSwitch & 0b10 ? MATERIALS.ok : MATERIALS.off) : MATERIALS.disconnected;
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