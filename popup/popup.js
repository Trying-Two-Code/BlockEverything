document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("toggle-btn");
    const btnImage = document.getElementById("toggle-btn-image");
    const btnImageSources = {
        off: "../assets/visuals/icons/main-button/off/vector-theme-1.svg",
        on : "../assets/visuals/icons/main-button/on/vector-theme-1.svg"
    };
    let isBlocking = false;

    btn.addEventListener("click", async () => {
        isBlocking = !isBlocking;

        if (isBlocking) {
            btnImage.src = btnImageSources.off;
            btnImage.alt = "off";
        } else {
            btnImage.src = btnImageSources.on;
            btnImage.alt = "on";
            await window.browserData.findURL();
        }
    });
});
