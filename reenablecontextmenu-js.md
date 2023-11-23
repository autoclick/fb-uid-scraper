---
title: "ReEnableContextMenu.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: '', name: { en: "Re-Enable context menu (right click)", vi: "Re-enable right-click menu", }, description: { en: "Enable context menu for website",  en: "Use for web which does not allow right-click menu enabled",  },  onClick: function() { document.onmousedown = "return true"; document.onmouseup = "return true"; document.oncontextmenu = null;  window.oncontextmenu = null; var elements = document.getElementsByTagName("*"); for (var id = 0; id < elements.length; ++id) { elements[id].oncontextmenu = null; } alert("ReEnable context menu - Done"); }, };`
