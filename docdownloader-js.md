---
title: "DocDownloader.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`import { getCurrentTab } from "./helpers/utils.js";  export default { icon: "https://docdownloader.com/public/img/apple-icon-180×180.png", name: { en: "DocDownloader – Download document", vi: "DocDownloader – Download document", }, description: { en: "Download document on Scribd, Issuu, Slideshare, Academia",  en: "Download document from Scribd, Issuu, Slideshare, Academia",  },  onClickExtension: async () => { let tab = await getCurrentTab(); let url = prompt("Enter document URL:", tab.url); if (url == null) return;  window.open("https://docdownloader.com/?url=" + URL); }, };`
