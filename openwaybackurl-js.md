---
title: "OpenWaybackUrl.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`import { getCurrentTab } from “./helpers/utils.js”;  export default { icon: “https://archive.org/images/glogo.jpg”, name: { en: “Open wayback url”, vi: “Xem wayback url của website”, }, description: { en: “Open wayback url for website”, vi: “Giúp xem nội dung website trong quá khứ”, },  onClickExtension: async function () { let { url } = await getCurrentTab(); let url_to_check = prompt(“Nhập URL muốn xem: “, url); if (url_to_check) { window.open(“https://web.archive.org/web/*/” + url_to_check); } }, };`
