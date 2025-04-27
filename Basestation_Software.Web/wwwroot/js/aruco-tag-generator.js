// Taken from: https://chev.me/arucogen/

var arucoTagDict = null;

// Fetch markers dict
function loadArucoTagDict() {
    return fetch("js/lib/aruco-tags.json").then((res) => res.json())
        .then((json) => {
            arucoTagDict = json;
            //console.log("Loaded aruco-tags.json");
        }).catch((err) => console.error("Failed to load aruco-tags.json:", err.message));
}

const arucoTagsPromise = loadArucoTagDict();

export async function generateMarkerSvg(scale, width, height, bits, fixPdfArtifacts = true) {
    const xmlns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(xmlns, "svg");
    svg.setAttribute("xmlns", xmlns);
    svg.setAttribute("viewBox", "0 0 " + (width + 2) + " " + (height + 2));
    svg.setAttribute("width", (width + 2) * scale);
    svg.setAttribute("height", (height + 2) * scale);
    svg.setAttribute("shape-rendering", "crispEdges");

    // Background rect
    const rect = document.createElementNS(xmlns, "rect");
    rect.setAttribute("x", 0);
    rect.setAttribute("y", 0);
    rect.setAttribute("width", width + 2);
    rect.setAttribute("height", height + 2);
    rect.setAttribute("fill", "black");
    svg.appendChild(rect);

    // "Pixels"
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const white = bits[i * height + j];
            if (!white) continue;

            const pixel = document.createElementNS(xmlns, "rect");
            pixel.setAttribute("width", 1);
            pixel.setAttribute("height", 1);
            pixel.setAttribute("x", j + 1);
            pixel.setAttribute("y", i + 1);
            pixel.setAttribute("fill", "white");
            svg.appendChild(pixel);

            if (!fixPdfArtifacts) continue;

            if ((j < width - 1) && (bits[i * height + j + 1])) {
                pixel.setAttribute("width", 1.5);
            }

            if ((i < height - 1) && (bits[(i + 1) * height + j])) {
                const pixel2 = document.createElementNS(xmlns, "rect");
                pixel2.setAttribute("width", 1);
                pixel2.setAttribute("height", 1.5);
                pixel2.setAttribute("x", j + 1);
                pixel2.setAttribute("y", i + 1);
                pixel2.setAttribute("fill", "white");
                svg.appendChild(pixel2);
            }
        }
    }

    return svg;
}

export async function generateArucoMarker(scale, width, height, dictName, id) {
    // Lazy load markers
    if (arucoTagDict === null) {
        await arucoTagsPromise;
    }

    //console.log("Generating ArUco marker " + id + " of type " + dictName);

    const bytes = arucoTagDict[dictName][id];
    const bits = [];
    const bitsCount = width * height;

    // Parse marker's bytes
    for (let byte of bytes) {
        const start = bitsCount - bits.length;
        for (let i = Math.min(7, start - 1); i >= 0; i--) {
            bits.push((byte >> i) & 1);
        }
    }

    const svg = await generateMarkerSvg(scale, width, height, bits);
    return svg
}

export async function appendArucoMarker(elementRef, scale, width, height, dictName, id) {
    const svg = await generateArucoMarker(scale, width, height, dictName, id);
    if (elementRef) {
        elementRef.appendChild(svg);
    }
}

export async function updateArucoMarker(elementRef, scale, width, height, dictName, id) {
    for (const child of elementRef.children) {
        if (child.nodeName.toUpperCase() == "SVG") {
            const svg = await generateArucoMarker(scale, width, height, dictName, id);
            if (elementRef) {
                elementRef.replaceChild(svg, child);
                return;
            }
        }
    }
}
