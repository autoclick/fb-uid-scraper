---
title: "Fb_getPageId.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { name: { en: "Get fb Page ID", vi: "Get fb Page ID", }, description: {  en: "Get id of page in facebook website",  vi: "Get id of page in current facebook page",  }, whiteList: ["https://www.facebook.com/*"],  onClick: function() { / / Get page id – while in page fb. For example, https://www.facebook.com/ColourfulSpace  const page_name = document.title; const found = (check) => { if (check && check[0]) { prompt('PAGE ID of ${page_name}:', check[0]); return true; } return false; }; if (found(/(?<=\"pageID\"\:\")(.*?) (?=\")/.exec(document.body.innerHTML))) return; if (found(/(?<=facebook\.com\/)(.*?) ($|(?=\/)|(?=&)) /.exec(location.href))) return; prompt( "No PAGE ID found in url!\nAre you on the correct page page fb?\nSite Example:", "https://www.facebook.com/ColourfulSpace" ); }, };`
