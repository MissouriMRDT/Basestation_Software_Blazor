class WebRTCCameras {
    address = null;
    totalTracks = 0;
    tracks = [];
    pc = null;

    constructor(address, totalTracks) {
        this.address = address;
        this.totalTracks = totalTracks;
    }

    connect() {
        if (this.tracks.length > 0) { this.disconnect(); }
        console.log("[WebRTC] Connecting.");

        this.pc = new RTCPeerConnection({
            iceServers: []
        });

        this.pc.ontrack = event => {
            console.log(`[WebRTC] Received track.`);
            console.log(event);
            this.tracks.push(event.track);
        };

        this.pc.oniceconnectionstatechange = e => console.log(`[WebRTC] iceConnectionState changed: ${this.pc.iceConnectionState}`);
        this.pc.onicecandidate = event => {
            if (event.candidate === null) {
                console.log(`[WebRTC] Negotiated ICE candidates. Connecting to camera signal socket ${this.address}.`);
                let cameraSignalSocket = new WebSocket(this.address);
                cameraSignalSocket.onopen = (event) => {
                    let localSessionDescription = btoa(JSON.stringify(this.pc.localDescription));
                    console.log(`[WebRTC] Connected to camera signal socket. Sending local session description:\n${localSessionDescription}`);
                    cameraSignalSocket.send(localSessionDescription)
                }
                cameraSignalSocket.onmessage = (event) => {
                    console.log(`[WebRTC] Received remote session description:\n${event.data}`);
                    this.pc.setRemoteDescription(new RTCSessionDescription(JSON.parse(atob(event.data)))).catch(error => console.log(`[WebRTC] Failed to set remote session description: ${error}.`));
                    console.log("[WebRTC] Closing camera signal socket.");
                    cameraSignalSocket.close();
                }
            }
        };

        for (let i = 0; i < this.totalTracks; i++) {
            this.pc.addTransceiver("video", { "direction": "recvonly" });
        }
        console.log("[WebRTC] Creating offer.");
        this.pc.createOffer().then(d => this.pc.setLocalDescription(d)).catch(error => console.log(`[WebRTC] Failed to set local session description: ${error}.`));
    }

    disconnect() {
        console.log("[WebRTC] Disconnecting.");
        this.tracks.forEach(track => track.stop());
        this.tracks.length = 0;
        if (this.pc !== null) { this.pc.close(); }
    }
}

class CameraDisplay {
    videoContainer = null;

    constructor(videoContainer) {
        this.videoContainer = videoContainer;
    }

    setCamera(n) {
        if (window.webRTCCameras.tracks.length <= n) {
            console.warn(`Cannot switch camera to track ${n} when ${window.webRTCCameras.tracks.length} tracks exist.`);
            return;
        }
        var element = document.createElement(window.webRTCCameras.tracks[n].kind);
        element.srcObject = new MediaStream([window.webRTCCameras.tracks[n]]);
        element.autoplay = true;
        element.controls = false;
        element.className = "video-display";
        for (let oldElement of this.videoContainer.getElementsByClassName("video-display")) {
            this.videoContainer.removeChild(oldElement);
        }
        this.videoContainer.prepend(element);
    }
}

function createCameraDisplay(videoContainer) {
    if (window.webRTCCameras === undefined) {
        window.webRTCCameras = new WebRTCCameras(`ws://${window.location.hostname}:8085`, 8);
        window.cameraViewers = {};
    }
    return new CameraDisplay(videoContainer);
}
