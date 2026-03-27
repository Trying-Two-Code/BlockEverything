let getLocalSettings = () => {
    let settings = localStorage.getItem("settings");
    settings = settings || "{}";
    settings = JSON.parse(settings);
    return settings;
}

let setLocalSetting = (newSettingsObject) => {
    localStorage.setItem("settings", newSettingsObject);
}

let changeLocalSetting = (newSettingsObject = {}) => {
    let currentSettings = getLocalSettings();
    let returnNewSettings = structuredClone(currentSettings);
    let newSettingsKeys = Object.keys(newSettingsObject);

    newSettingsKeys.forEach(key => {
        let newSettingValue = newSettingsObject[key];
        returnNewSettings[key] = newSettingValue;
    });
    returnNewSettings = JSON.stringify(returnNewSettings);

    setLocalSetting(returnNewSettings);
}

window.localSetting.changeLocalSetting = (newSettingsObject = {}) => {
    changeLocalSetting(newSettingsObject);
}