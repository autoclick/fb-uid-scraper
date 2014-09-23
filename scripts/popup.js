// Copyright (c) 2014 MarIO - http://www.mvcejas.com. All rights reserved.


document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('start').onclick = function (e) {
        chrome.tabs.insertCSS(null, { file: "assets/style.css" });
        chrome.tabs.executeScript(null, { file: "scripts/jquery.js" },
            function () {
                chrome.tabs.executeScript(null, { file: "scripts/myhttp.js" },
                    function () {
                        chrome.tabs.executeScript(null, { file: "scripts/script.js" });
                    });
            });
        //window.close();
    };

});