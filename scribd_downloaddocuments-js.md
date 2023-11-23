---
title: "Scribd_downloadDocuments.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`import { getCurrentTab } from "./helpers/utils.js";  export default { icon: "https://documents-downloader.pages.dev/apple-icon-57×57.png", name: { en: "Scribd – Download documents", vi: "Scribd – Download documents", }, description: {  en: "Download document on Scribd for free",  en: "Download documents on Scribd for free",  },  onClickExtension: async function() { // Post: https://www.facebook.com/groups/j2team.community/posts/1642123806119733/ /  / Source: https://chrome.google.com/webstore/detail/documents-downloader/ikecplijfhabpahaolhdgglbbafknkdo?utm_source=j2team&utm_medium=url_shortener&utm_campaign=documents-downloader  let tab = await getCurrentTab(); let url = prompt( "Enter link document:\nFormat: https://www.scribd.com/document/...", tab.url ); if (url != null) window.open("https://documents-downloader.pages.dev/?documentUrl=" + URL); }, };`
