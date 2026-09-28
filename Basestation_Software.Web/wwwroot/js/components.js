let dotNetComponent = null;
let componentTimeouts = [];
let components = [];

let capturedIndex = 0;
function clampedPercent(x, min, max) {
    return Math.min(Math.max(Math.round(x * 100), min), max);
}

class Component {
    constructor(dom) {
        this.dom = dom;
        this.idx = parseInt(this.dom.getAttribute("idx"));
        this.x = this.dom.offsetLeft;
        this.y = this.dom.offsetTop;
        this.width = this.dom.offsetWidth;
        this.height = this.dom.offsetHeight;

        this.editPositionType = 0;
        // 0 = none, 1 = drag
        // 10 = e, 11 = ne, 12 = se
        // 20 = w, 21 = nw, 22 = sw
        // 31 = n, 32 = s

        const getPageX = () => {
            return this.dom.getBoundingClientRect().left + window.scrollX;
        };

        const getPageY = () => {
            return this.dom.getBoundingClientRect().top + window.scrollY;
        };

        const move = event => {
            this.x += event.movementX;
            this.y += event.movementY;
            const layoutRect = document.getElementById("layout-grid").getBoundingClientRect();
            this.dom.style.left = `${clampedPercent(this.x / layoutRect.width, 0, 100)}%`;
            this.dom.style.top = `${clampedPercent(this.y / layoutRect.height, 0, 100)}%`;
        };

        const resize = (event, editType) => {
            const keepXPosition = (Math.trunc(editType / 10) != 2);
            const keepYPosition = (editType % 10 != 1);
            const allowHorizontalResize = (editType < 30);
            const allowVerticalResize = (editType % 10 != 0);

            this.x += event.movementX * (keepXPosition ? 0 : 1) * (allowHorizontalResize ? 1 : 0);
            this.y += event.movementY * (keepYPosition ? 0 : 1) * (allowVerticalResize ? 1 : 0);
            this.width += event.movementX * (keepXPosition ? 1 : -1) * (allowHorizontalResize ? 1 : 0);
            this.height += event.movementY * (keepYPosition ? 1 : -1) * (allowVerticalResize ? 1 : 0);

            if (this.height < 30) {
                this.height = 30;
            }
            if (this.width < 30) {
                this.width = 30;
            }

            this.updateStyle();
        };

        this.dom.addEventListener("pointerdown", event => {
            if (event.target.closest('button') || capturedIndex != 0) {
                // allow components to be deleted
                return;
            }
            capturedIndex = this.idx;
            dotNetComponent.invokeMethodAsync("PauseSave");
            this.dom.setPointerCapture(event.pointerId);
        });
        
        this.dom.addEventListener("pointermove", event => {

            // sets mouse style, to indicate whether component can be dragged or moved
            // and handles moving/resizing when necessary
            if (this.dom.hasPointerCapture(event.pointerId) && this.editPositionType == 1) {
                move(event);
            } else if (this.dom.hasPointerCapture(event.pointerId) && Math.floor(this.editPositionType / 10) != 0) {
                resize(event, this.editPositionType);
            } else if (event.clientY < getPageY() + 20 && event.clientY > getPageY() + 5) {
                this.dom.style.cursor = "move";
                this.editPositionType = 1;
            } else if (event.clientX > getPageX() + this.width - 10) {
                if (event.clientY > getPageY() + this.height - 10) {
                    this.dom.style.cursor = "se-resize";
                    this.editPositionType = 12;
                } else if (event.clientY < getPageY() + 10) {
                    this.dom.style.cursor = "ne-resize";
                    this.editPositionType = 11;
                } else {
                    this.dom.style.cursor = "ew-resize";
                    this.editPositionType = 10;
                }
            } else if (event.clientX < getPageX() + 10) {
                if (event.clientY > getPageY() + this.height - 10) {
                    this.dom.style.cursor = "sw-resize";
                    this.editPositionType = 22;
                } else if (event.clientY < getPageY() + 10) {
                    this.dom.style.cursor = "nw-resize";
                    this.editPositionType = 21;
                } else {
                    this.dom.style.cursor = "ew-resize";
                    this.editPositionType = 20;
                }
            } else {
                if (event.clientY > getPageY() + this.height - 10) {
                    this.dom.style.cursor = "ns-resize";
                    this.editPositionType = 32;
                } else if (event.clientY < getPageY() + 10) {
                    this.dom.style.cursor = "ns-resize";
                    this.editPositionType = 31;
                } else {
                    this.dom.style.cursor = "default";
                    this.editPositionType = 0;
                }
            }
        });

        this.dom.addEventListener("pointerup", event => {

            this.dom.releasePointerCapture(event.pointerId);
            this.componentModified_();
        });
        this.dom.addEventListener("touchstart", event => this.dom.preventDefault());

        

    }
    
    componentModified_() {
        if (capturedIndex != this.idx) { return; }

        capturedIndex = 0;

        const layoutRect = document.getElementById("layout-grid").getBoundingClientRect();

        const x = clampedPercent(this.x / layoutRect.width, 0, 100);
        const y = clampedPercent(this.y / layoutRect.height, 0, 100);

        this.dom.style.left = `${x}%`;
        this.dom.style.top = `${y}%`;

        const width = clampedPercent(this.width / layoutRect.width, 5, 100);
        const height = clampedPercent(this.height / layoutRect.height, 5, 100);
        this.dom.style.width = `${width}%`;
        this.dom.style.height = `${height}%`;

        console.log(components.length + " " + this.idx);

        dotNetComponent.invokeMethodAsync("ComponentModified", this.idx, x, y, width, height);
    };

    // update div style
    updateStyle() {
        const layoutRect = document.getElementById("layout-grid").getBoundingClientRect();

        const x = clampedPercent(this.x / layoutRect.width, 0, 100);
        const y = clampedPercent(this.y / layoutRect.height, 0, 100);

        this.dom.style.left = `${x}%`;
        this.dom.style.top = `${y}%`;

        const width = clampedPercent(this.width / layoutRect.width, 5, 100);
        const height = clampedPercent(this.height / layoutRect.height, 5, 100);
        this.dom.style.width = `${width}%`;
        this.dom.style.height = `${height}%`;
    };
}

export function setDotNetComponent(dotNetComponent_) {
    dotNetComponent = dotNetComponent_;
}

export function delete_(idx) {
    // shift component locations over when deleting
    for (let i = 0; i < components.length; i++) {
        let firstComponent = components[i];
        if ( firstComponent.idx >= idx )
            for (let j = 0; j < components.length; j++) {
                let secondComponent = components[j];

                if (firstComponent.idx == secondComponent.idx - 1) {
                    firstComponent.x = secondComponent.x;
                    firstComponent.y = secondComponent.y;
                    firstComponent.width = secondComponent.width;
                    firstComponent.height = secondComponent.height;

                    firstComponent.componentModified_();
                }
            }
    }

    dotNetComponent.invokeMethodAsync("DeleteComponent", idx);
}
export function registerComponents() {
    components = [];
    for (const component of document.getElementsByClassName("component")) {
        components.push(new Component(component));
    }
}
export function updateComponentsStyle() {
    for (let i = 0; i < components.length; i++) {
        components[i].updateStyle();
    }
}