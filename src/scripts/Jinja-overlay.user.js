// ==UserScript==
// @name         Jinja Template
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the canvas!
// @author       placeDE Devs, changed by maxwai
// @match        https://garlic-bread.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/maxwai/place-overlay-Jinja/raw/main/src/scripts/Jinja-overlay.user.js
// @downloadURL  https://github.com/maxwai/place-overlay-Jinja/raw/main/src/scripts/Jinja-overlay.user.js
// ==/UserScript==

var overlayImage = null;
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        const canvasContainer = document.querySelector("garlic-bread-embed").shadowRoot.querySelector("div.layout").querySelector("garlic-bread-canvas").shadowRoot.querySelector("div.container");
        overlayImage = document.createElement("img");
        updateImage();
        overlayImage.style = `position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1500px;height: 1000px;pointerEvents: 'none';`;
        canvasContainer.appendChild(overlayImage);
    }, false);
}

function updateImage() {
    overlayImage.src = "https://jinja.waideli.ch/jinja/overlay_target.png"
}

setInterval(function () {overlayImage.src = "https://jinja.waideli.ch/jinja/overlay_target.png"}, 30000);
