---
title: "Youtube_toggleLight.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: "https://lh3.googleusercontent.com/Apmrldj2Vnje0MIEvqYslaGRjDj2R3u72YboNiUHJ8sSORBmLCYJNJ50FTCFhXrCuXs3e6vaCTJqOKeq-I3AMkIFLw=w128-h128-e365-rj-sc0x00ffffff", name: { en: "Toggle light youtube", vi: "Turn off / On youtube light", }, description: {  en: "Toggle light on/off to focus to youtube video", vi: "Turn on/On light to focus on watching youtube video",  },  whiteList: ["*://www.youtube.com/*"],  onClick: function() { ["#below", "#secondary", "#masthead-container"].forEach((_) => { let doms = document.querySelectorAll(_); Array.from(doms).forEach((dom) => { let current = dom.style.opacity || 1; let newValue = current == 1 ? 0 : 1; dom.style.opacity = newValue;  dom.style.pointerEvents = newValue ? "" : "none"; }); });  document.querySelector("#player-theater-container")?. scrollIntoView?. ({ behavior: "smooth", }); }, };`
