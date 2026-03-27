document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("toggle-btn");
    const btnImage = document.getElementById("toggle-btn-image");
    const btnImageSources = {
        off: "../assets/visuals/icons/main-button/off/vector-theme-1.svg",
        on : "../assets/visuals/icons/main-button/on/vector-theme-1.svg"
    };
    let isBlocking = window.localSetting.getLocalSetting("active");

    let showButton = (isBlocking) => {
        if (isBlocking) {
            btnImage.src = btnImageSources.off;
            btnImage.alt = "off";
        } else {
            btnImage.src = btnImageSources.on;
            btnImage.alt = "on";
        }
    }

    showButton(isBlocking);

    btn.addEventListener("click", async () => {
        isBlocking = !isBlocking;

        showButton(isBlocking);

        if (isBlocking) {
            window.localSetting.changeLocalSetting({active: true});
        } else {
            window.localSetting.changeLocalSetting({active: false});
            await window.browserData.findURL();
        }
    });
});
