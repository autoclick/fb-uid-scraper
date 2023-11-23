---
title: "Download_watchingVideo.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`import { runScriptInCurrentTab, showLoading } from "./helpers/utils.js";  export default { icon: "", name: { en: "Download watching video", vi: "Download watching video", }, description: {  en: "tiktok, doutu.be, phimmoi2...", vi: "tiktok, doutu.be, phimmoi2...",  },  onClickExtension: async() => { let src = await runScriptInCurrentTab(async() => { return await UsefulScriptGlobalPageContext.DOM.getWatchingVideoSrc(); });  if (!src) { alert("Video not found"); return; }  const { closeLoading, setLoadingText } = showLoading("Video loading..."); await UsefulScriptGlobalPageContext.Utils.downloadBlobUrl( src, "video.mp4", (loaded, total) => { let loadedMB = ~~(loaded / 1024 / 1024); let totalMB = ~~(total / 1024 / 1024);  let percent = ((loaded/total) * 100) | 0; setLoadingText( 'Loading video... (${loadedMB}/${totalMB}MB – ${percent}%)' ); } ); closeLoading(); }, };`
