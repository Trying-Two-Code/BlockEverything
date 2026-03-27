window.browserData = window.data || {};

window.browserData.findURL = async () => {
    try{
        let queryOptions = { active: true, lastFocusedWindow: true };
        let [tab] = await chrome.tabs.query(queryOptions);

        const url = tab.url;
        const domain = new URL(url).hostname;

        window.browserData.url = url;
        window.browserData.domain = domain;

        return "url & domain found and secured.";
    } catch (error) {
        console.error(error);
        return error;
    }
};