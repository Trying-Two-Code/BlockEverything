let getInfo = async () => {
    let siteInformationSource = "./../assets/data/social-media.json";
    let response = await fetch(siteInformationSource);
    let siteInformationObject = await response.json();

    let socialMediaUrls = siteInformationObject["social-media-urls"];
    let socialMediaNames = Object.keys(socialMediaUrls);
}

let getSite = () => {
    return window.browserData.url;
}