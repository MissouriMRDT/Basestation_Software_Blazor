let dotNetComponent = null;
let componentTimeouts = [];
let components = [];

function clampedPercent(x, min, max) {
    return Math.min(Math.max(Math.round(x * 100), min), max);
}

class Component {
    constructor(dom) {
        this.dom = dom;
        this.idx = parseInt(this.dom.getAttribute("idx"));
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;

        const moveButton = this.dom.getElementsByClassName("component-move")[0];
        const move = event => {
            this.x += event.movementX;
            this.y += event.movementY;
            const layoutRect = document.getElementById("layout-grid").getBoundingClientRect();
            this.dom.style.left = `${clampedPercent(this.x / layoutRect.width, 0, 100)}%`;
            this.dom.style.top = `${clampedPercent(this.y / layoutRect.height, 0, 100)}%`;
        };

        moveButton.addEventListener("pointerdown", event => {
            moveButton.setPointerCapture(event.pointerId);
            this.x = this.dom.offsetLeft;
            this.y = this.dom.offsetTop;
            dotNetComponent.invokeMethodAsync("PauseSave", this.idx, width, height);
        });
        moveButton.addEventListener("pointermove", event => moveButton.hasPointerCapture(event.pointerId) && move(event));
        moveButton.addEventListener("pointerup", event => {
            const layoutRect = document.getElementById("layout-grid").getBoundingClientRect();
            const x = clampedPercent(this.x / layoutRect.width, 0, 100);
            const y = clampedPercent(this.y / layoutRect.height, 0, 100);
            this.dom.style.left = `${x}%`;
            this.dom.style.top = `${y}%`;
            dotNetComponent.invokeMethodAsync("ComponentMoved", this.idx, x, y);
        });
        moveButton.addEventListener("touchstart", event => moveButton.preventDefault());

        const resizeButton = this.dom.getElementsByClassName("component-resize")[0];
        const resize = event => {
            this.width += event.movementX;
            this.height += event.movementY;
            const layoutRect = document.getElementById("layout-grid").getBoundingClientRect();
            this.dom.style.width = `${clampedPercent(this.width / layoutRect.width, 5, 100)}%`;
            this.dom.style.height = `${clampedPercent(this.height / layoutRect.height, 5, 100)}%`;
        };

        resizeButton.addEventListener("pointerdown", event => {
            resizeButton.setPointerCapture(event.pointerId);
            this.width = this.dom.offsetWidth;
            this.height = this.dom.offsetHeight;
            dotNetComponent.invokeMethodAsync("PauseSave", this.idx, width, height);
        });
        resizeButton.addEventListener("pointermove", event => resizeButton.hasPointerCapture(event.pointerId) && resize(event));
        resizeButton.addEventListener("pointerup", event => {
            const layoutRect = document.getElementById("layout-grid").getBoundingClientRect();
            const width = clampedPercent(this.width / layoutRect.width, 5, 100);
            const height = clampedPercent(this.height / layoutRect.height, 5, 100);
            this.dom.style.width = `${width}%`;
            this.dom.style.height = `${height}%`;
            dotNetComponent.invokeMethodAsync("ComponentResized", this.idx, width, height);
        });
        resizeButton.addEventListener("touchstart", event => resizeButton.preventDefault());
    }
}

export function setDotNetComponent(dotNetComponent_) {
    dotNetComponent = dotNetComponent_;
}

export function delete_(idx) {
    dotNetComponent.invokeMethodAsync("DeleteComponent", idx);
}

export function registerComponents() {
    for (const component of document.getElementsByClassName("component")) {
        components.push(new Component(component));
    }
}
