let address = window.location.protocol === "http:" ? `ws://${window.location.hostname}:8085` : `wss://${window.location.hostname}:8086`;
let totalTracks = 8;
let tracks = [];
let onConnected = [];
let pc = null;
let cameraDisplays = [];
export { tracks, onConnected };

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
                setTimeout(() => {
                    cameraDisplays.forEach(d => d.resetCamera());
                    onConnected.forEach(c => c());
                }, 1000);
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
    resizeObserver = null;
    n = 0;
    deg = 0;

    constructor(videoContainer) {
        this.videoContainer = videoContainer;
        cameraDisplays.push(this);
        this.resizeObserver = new ResizeObserver(() => this.rotate(0));
        this.resizeObserver.observe(this.videoContainer);
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
        this.videoDisplay.addEventListener("loadeddata", () => {
            this.rotate(0);
        });
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
        let cw = this.videoContainer.clientWidth;
        let ch = this.videoContainer.clientHeight;
        let vw;
        let vh;
        let nvw;
        let nvh;
        if (this.deg === 0 || this.deg === 180) {
            vw = this.videoDisplay.videoWidth;
            vh = this.videoDisplay.videoHeight;
        } else {
            vh = this.videoDisplay.videoWidth;
            vw = this.videoDisplay.videoHeight;
        }
        if (vw / vh < cw / ch) {
            nvw = ch * vw / vh;
            nvh = ch;
        } else {
            nvw = cw;
            nvh = cw * vh / vw;
        }
        if (this.deg === 0 || this.deg === 180) {
            this.videoDisplay.style.width = `${nvw}px`;
            this.videoDisplay.style.height = `${nvh}px`;
        } else {
            this.videoDisplay.style.width = `${nvh}px`;
            this.videoDisplay.style.height = `${nvw}px`;
        }
        this.videoDisplay.style.transform = `rotate(${this.deg}deg`;
    }

    dispose() {
        this.resizeObserver.disconnect();
    }
}

export function createCameraDisplay(videoContainer) {
    return new CameraDisplay(videoContainer);
}
