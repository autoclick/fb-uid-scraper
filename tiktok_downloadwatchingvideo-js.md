---
title: "Tiktok_downloadWatchingVideo.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`import download_watchingVideo from "./download_watchingVideo.js";  export default { icon: "https://www.tiktok.com/favicon.ico", name: { en: "Tiktok – Download watching video (no watermark)", vi: "Tiktok – Download watching video (no watermark)", }, description: {  en: "Download tiktok video you are watching (no watermark)",  vi: "Download tiktok video you are watching (no watermark)",  },  onClickExtension: download_watchingVideo.onClickExtension, };  export const shared = { getWatchingVideoTitle: function() { return document.querySelector("video").parentElement.parentElement .previousElementSibling.alt; }, getWatchingVideoId: function() {  return document.querySelector("video").parentElement.id.split ("-").at(-1); },  getLinkWatchingVideoFromWeb: function() { let el = document.querySelector("video")?. parentElement.parentElement, keyFiber="", keyProp=""; for (let k of Object.keys(el)) { if (k.startsWith("__reactFiber")) keyFiber = k; if (k.startsWith("__reactProps")) keyProp = k;  } return( el[keyFiber].firstEffect?. memoizedProps?. URL || el[keyProp].children?. [0]?. Props?. URL || el[keyFiber].child?. memoizedProps?. url ); }, };`
