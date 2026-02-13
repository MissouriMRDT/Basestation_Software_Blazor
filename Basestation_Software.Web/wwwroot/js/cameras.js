let address = `ws://${window.location.hostname}:8085`;
let totalTracks = 8;
let tracks = [];
let pc = null;
let cameraDisplays = [];

export function connect() {
    if (tracks.length > 0) { disconnect(); }
    console.log("[WebRTC] Connecting.");

    pc = new RTCPeerConnection({
        iceServers: []
    });

    pc.ontrack = event => {
        console.log(`[WebRTC] Received track.`);
        console.log(event);
        tracks.push(event.track);
    };

    pc.oniceconnectionstatechange = e => console.log(`[WebRTC] iceConnectionState changed: ${pc.iceConnectionState}`);
    pc.onicecandidate = event => {
        if (event.candidate === null) {
            console.log(`[WebRTC] Negotiated ICE candidates. Connecting to camera signal socket ${address}.`);
            let cameraSignalSocket = new WebSocket(address);
            cameraSignalSocket.onopen = (event) => {
                let localSessionDescription = btoa(JSON.stringify(pc.localDescription));
                console.log(`[WebRTC] Connected to camera signal socket. Sending local session description:\n${localSessionDescription}`);
                cameraSignalSocket.send(localSessionDescription)
            }
            cameraSignalSocket.onmessage = (event) => {
                console.log(`[WebRTC] Received remote session description:\n${event.data}`);
                pc.setRemoteDescription(new RTCSessionDescription(JSON.parse(atob(event.data)))).catch(error => console.log(`[WebRTC] Failed to set remote session description: ${error}.`));
                console.log("[WebRTC] Closing camera signal socket.");
                cameraSignalSocket.close();
                setTimeout(() => cameraDisplays.forEach(d => d.resetCamera()), 1000);
            }
        }
    };

    for (let i = 0; i < totalTracks; i++) {
        pc.addTransceiver("video", { "direction": "recvonly" });
    }
    console.log("[WebRTC] Creating offer.");
    pc.createOffer().then(d => pc.setLocalDescription(d)).catch(error => console.log(`[WebRTC] Failed to set local session description: ${error}.`));
}

export function disconnect() {
    console.log("[WebRTC] Disconnecting.");
    tracks.forEach(track => track.stop());
    tracks.length = 0;
    if (pc !== null) { pc.close(); }
}

function floorModulo(a, n) {
    return a - n * Math.floor(a / n);
}

export class CameraDisplay {
    videoContainer = null;
    videoDisplay = null;
    n = 0;
    deg = 0;

    constructor(videoContainer) {
        this.videoContainer = videoContainer;
        cameraDisplays.push(this);
    }

    setCamera(n) {
        if (tracks.length <= n) {
            console.warn(`[CameraDisplay] Cannot switch camera to track ${n} when ${tracks.length} tracks exist.`);
            return;
        }

        this.n = n;
        this.videoDisplay = document.createElement(tracks[this.n].kind);
        this.videoDisplay.srcObject = new MediaStream([tracks[this.n]]);
        this.videoDisplay.autoplay = true;
        this.videoDisplay.controls = false;
        this.videoDisplay.className = "video-display";
        this.videoDisplay.style.transform = `rotate(${this.deg}deg`;
        for (let oldElement of this.videoContainer.getElementsByClassName("video-display")) {
            this.videoContainer.removeChild(oldElement);
        }
        this.videoContainer.appendChild(this.videoDisplay);
    }

    resetCamera() {
        console.log("[CameraDisplay] Resetting camera display.");
        this.setCamera(this.n);
    }

    rotate(deg) {
        this.deg = floorModulo(this.deg + deg, 360);
        if (this.videoDisplay === null) {
            console.warn("No display to rotate.");
            return;
        }
        this.videoDisplay.style.transform = `rotate(${this.deg}deg`;
    }
}

export function createCameraDisplay(videoContainer) {
    return new CameraDisplay(videoContainer);
}
