---
title: "Scribd_bypassPreview.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: "https://www.scribd.com/favicon.ico", name: { en: "Scribd – bypass preview", vi: "Scribd – Free VIP view", }, description: { en: "View VIP document on Scribd.com, bypass preview popup / reveal blurred content.",  en: "View VIP document on Scribd.com, remove popup block preview, remove blur effect.",  }, blackList: [],  whiteList: ["https://www.scribd.com/*"],  onDocumentIdle: () => { UsefulScriptGlobalPageContext.Extension.getURL( "scripts/scribd_bypassPreview.css " ).then(UsefulScriptGlobalPageContext.DOM.injectCssFile);  function ufs_bypass_preview() { [... document.querySelectorAll(".blurred_page .newpage *")].forEach( (el) => { if (el.style.color === "transparent") { el.style.color = "black"; } } ); [... document.querySelectorAll(".blurred_page")].forEach((el) => { el.classList.remove("blurred_page"); }); }  ufs_bypass_preview(); setInterval(ufs_bypass_preview, 3000); }, };`
