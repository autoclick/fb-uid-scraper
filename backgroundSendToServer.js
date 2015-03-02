chrome.runtime.onInstalled.addListener(function () {
    chrome.tabs.create({ url: 'http://autoclick.us/projects' });

});
//chrome.browserAction.onClicked.addListener(function () {
//    //"default_popup": "popup.html",
//    setTimeout(function () {
//        var icon = 'icons/icon.png', title = 'Title', text = 'Text';
//        var notification;
//        if (window.webkitNotifications) {
//            notification = webkitNotifications.createNotification(icon, title, text);
//        }
//        else {
//            notification = new Notification(title, {
//                body: text,
//                icon: icon
//            });
//        }
//        notification.onclick = function (x) { window.focus(); this.close(); };
//        //notification.show();
//    }, 10000);

//});