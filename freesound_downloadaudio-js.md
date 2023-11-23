---
title: "Freesound_downloadAudio.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`import { getCurrentTab, showLoading } from “./helpers/utils.js”;  export default { icon: “https://freesound.org/favicon.ico”, name: { en: “Freesound – Download audio”, vi: “Freesound – Tải âm thanh”, }, description: { en: “Download audio on freesound.org”, vi: “Tải âm thanh trên freesound.org”, },  onClickExtension: async function () { // https://github.com/soimort/you-get/blob/develop/src/you_get/extractors/freesound.py  let tab = await getCurrentTab(); let url = prompt(“Nhập link freesound: “, tab.url); if (url == null) return;  let { closeLoading } = showLoading(“Đang tìm file âm thanh…”); try { let res = await fetch(url); let html = await res.text();  // prettier-ignore let title = new RegExp(‘`
