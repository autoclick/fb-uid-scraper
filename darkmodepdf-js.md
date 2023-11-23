---
title: "DarkModePDF.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)```export default { icon: ``, name: { en: “Darkmode for pdf”, vi: “Chế độ tối cho PDF”, }, description: { en: “Enable/Disable darkmode for PDF”, vi: “Bật/Tắt chế độ tối cho PDF bạn đang xem”, },  onClick: function () { let id = “useful-scripts-darkModePDF”;  let old = document.querySelector(“#” + id); if (old) old.remove(); else { var cover = document.createElement(“div”); cover.id = id; let css = `position: fixed; pointer-events: none; top: 0; left: 0; width: 100vw; height: 100vh; background-color: #fffbfbcf; mix-blend-mode: difference; z-index: 99999;`; cover.setAttribute(“style”, css); document.body.appendChild(cover); } }, };```
