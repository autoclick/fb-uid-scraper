---
title: "Fb_toggleLight.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: ``, name: { en: “Turn off light fb newfeed”, vi: “Tắt đèn fb newfeed”, }, description: { en: “Hide Navigator bar and complementary bar in facebook”, vi: “Ẩn giao diện 2 bên newfeed, giúp tập trung vào newfeed facebook”, }, whiteList: [“https://www.facebook.com/*”],  onDocumentIdle: () => { [ document.querySelectorAll(‘[role=”navigation”]’)?.[2], document.querySelectorAll(‘[role=”complementary”]’)?.[0], ].forEach((el) => { if (el) { el.style.display = “none”; } else console.log(“ERROR: Cannot find element”); }); },  onClick: function () { [ document.querySelectorAll(‘[role=”navigation”]’)?.[2], document.querySelectorAll(‘[role=”complementary”]’)?.[0], ].forEach((el) => { if (el) { el.style.display = el.style.display != “none” ? “none” : “”; } else console.log(“ERROR: Cannot find element”); }); }, };`
