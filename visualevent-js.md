---
title: "VisualEvent.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: “http://www.sprymedia.co.uk/favicon.ico”, name: { en: “Show all javascript events”, vi: “Xem tất cả tất cả javascript events”, }, description: { en: “Visual Event – Visually show Javascript events on a page”, vi: “Visual Event – Hiển thị tất cả javascript events xuất hiện trong trang web”, },  onClick: function () { // http://www.sprymedia.co.uk/article/Visual+Event+2  var protocol = window.location.protocol === “file:” ? “http:” : “”; var url = protocol + “//www.sprymedia.co.uk/VisualEvent/VisualEvent_Loader.js”; if (typeof VisualEvent != “undefined”) { if (VisualEvent.instance !== null) { VisualEvent.close(); } else { new VisualEvent(); } } else { var n = document.createElement(“script”); n.setAttribute(“language”, “JavaScript”); n.setAttribute(“src”, url + “?rand=” + new Date().getTime()); document.body.appendChild(n); } }, };  // https://stackoverflow.com/a/10213800/11898496`
