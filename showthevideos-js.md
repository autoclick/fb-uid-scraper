---
title: "ShowTheVideos.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)``export default { icon: '', name: { en: "Show all videos in website", vi: "Show all videos in website", }, description: {  en: "Download video easier",  en: "Download videos easier",  },  onClick: function() { let videos = Array.from(document.querySelectorAll("video"));  if (!videos.length) { alert("No video found."); return; }  videos.forEach((video) => (video.controls = "controls"));  let html = '  ${videos .map((video) => {  if (video.src) { if (video.src.startsWith("blob:")) { return ' Download `; } return''; } return '`; }) .join(" ")}  CLOSE  `;  let div = document.createElement("div"); div.innerHTML = html; document.body.appendChild(div); }, };``
