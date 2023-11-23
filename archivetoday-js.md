---
title: "ArchiveToday.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)``import { getCurrentTab } from “./helpers/utils.js”;  export default { icon: `https://archive.ph/favicon.ico`, name: { en: “Archive the current Page online”, vi: “Lưu trữ online trang hiện tại”, }, description: { en: “Creates an archive of the current page on archive.today.”, vi: “Lưu trang web hiện tại lên archive.today”, },  onClickExtension: async function () { let { url } = await getCurrentTab();  var a = prompt( “Nhập URL muốn tạo archive: “, url.replace(/^http\:\/\/(.*)$/, “$1”) ); if (a != null) { window.open(“https://archive.today/?run=1&url=” + encodeURIComponent(a)); } }, };``
