chrome.runtime.oninstalled.addlistener(function () {
    chrome.tabs.create({ url: 'http://www.autoclick.us' });
});