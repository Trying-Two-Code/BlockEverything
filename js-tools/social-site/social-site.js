let getInfo = async () => {
    let siteInformationSource = "./../assets/data/social-media.json";
    let response = await fetch(siteInformationSource);
    let siteInformationObject = await response.json();

    let socialMediaUrls = siteInformationObject["social-media-urls"];
    let socialMediaNames = Object.keys(socialMediaUrls);

    return socialMediaNames;
}

let getSite = () => {
    return window.browserData.domain;
}

let isSocialSite = async () => {
    let userSite = getSite();
    let socialSites = await getInfo();
    return userSite in socialSites;
}

window.browserData = window.browserData || {};
window.browserData.updateIsSocialSite = async () => {
    window.browserData.isSocialSite = await isSocialSite();
}