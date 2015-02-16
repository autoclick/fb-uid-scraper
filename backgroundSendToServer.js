chrome.runtime.onInstalled.addListener(function () {
    chrome.tabs.create({ url: 'http://autoclick.us/projects' });
});