// Used by GPS.razor

export const roverAttitudes = {};

export class RoverAttitude {
    dotNetComponent = null;
    svg = null;
    svgPitch = null;
    svgRoll = null;
    svgPointer = null;

    constructor(id, dotNetComponent) {
        this.dotNetComponent = dotNetComponent;
        this.svg = document.getElementById(id);
        this.svgPitch = this.svg.getElementById("pitch");
        this.svgRoll = this.svg.getElementById("roll");
        this.svgPointer = this.svg.getElementById("pointer");
    }

    update(pitch, roll) {
        // Pitch relative to upright [-90D,90U]
        if (pitch > 90) { pitch = 90; }
        else if (pitch < -90) { pitch = -90; }
        // Roll relative to upright [-180L, 180R]
        if (roll > 180) { roll = 180; }
        else if (roll < -180) { roll = -180; }
        this.svgPitch.transform.baseVal.getItem(0).setTranslate(-60, pitch - 60);
        this.svgPitch.transform.baseVal.getItem(1).setRotate(roll, 90, 90 - pitch);
        this.svgRoll.transform.baseVal.getItem(0).setRotate(roll, 30, 30);
    }
}

export function createRoverAttitude(id, dotNetComponent) {
    roverAttitudes[id] = new RoverAttitude(id, dotNetComponent);
    console.log("Created RoverAttitude:", id);
}
