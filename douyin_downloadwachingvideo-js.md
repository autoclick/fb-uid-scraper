---
title: "Douyin_downloadWachingVideo.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`import { runScriptInCurrentTab } from "./helpers/utils.js";  export default { icon: "https://www.douyin.com/favicon.ico", name: { en: "Douyin – Download watching video", vi: "Douyin – Download watching video", }, description: {  en: "Show all downloadable videos in current douyin webpage", en: "Show all downloadable videos in current douyin page",  }, whiteList: ["https://www.douyin.com/*"],  onClickExtension: async function() { const { downloadURL } = UsefulScriptGlobalPageContext.Utils;  const src = await runScriptInCurrentTab(async() => { return await UsefulScriptGlobalPageContext.DOM.getWatchingVideoSrc(); });  if (!src) { alert("No video found."); return; }  downloadURL(src, "douyin_video.mp4"); }, };`
