chrome.runtime.onInstalled.addListener(function () {
    chrome.tabs.create({ url: 'http://www.autoclick.us/' });
});