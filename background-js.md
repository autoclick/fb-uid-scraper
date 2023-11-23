---
title: "Background.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)``// https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/tutorials/focus-mode/background.js  // chrome.runtime.onInstalled.addListener(() => { // chrome.action.setBadgeText({ // text: “NEW”, // }); // });  // ================= UNSTABLE =================  // import * as scripts from “./popup/scripts/scripts.js”;  // let scriptsNeedRunBackground = Object.values(scripts).filter( // (script) => // script.backgroundFunc && typeof script.backgroundFunc === “function” // );  // console.log( // `run ${scriptsNeedRunBackground.length} background scripts`, // scriptsNeedRunBackground // );  // scriptsNeedRunBackground.forEach((script) => { // script.backgroundFunc(); // });``
