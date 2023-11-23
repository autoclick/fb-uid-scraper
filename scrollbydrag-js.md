---
title: "ScrollByDrag.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: '', name: { en: "Scroll by dragging", vi: "Scroll the web by dragging and dropping", },  description: { en: "Use this will turn the cursor into a scroller and use it again will return it back to normal.",  en: "Clicking will turn the cursor into a scroller and clicking it again will bring the cursor back to normal",  }, onClick: async function() { let X, Y;  if (document.onmousedown &&; document.onmouseup &&; document.onmousemove) { body.style.cursor = "auto"; document.onmousedown = document.onmouseup = document.onmousemove = null;  alert("Scroll by dragging DISABLED"); } else {  body.style.cursor = "all-scroll";  document.onmousedown = function (e) { if ((e & !e.button) || (window.event && event.button & 1)) { X = e.clientX; Y = e.clientY; return false; } }; document.onmouseup = function(e) { if((e && !e.button) || (window.event && event.button & 1)) { X = Y = null; return false; } }; document.onmousemove = function(e) { if(X|| Y) { window.scrollBy(X – e.clientX, Y – e.clientY); X = e.clientX; Y = e.clientY; return false; } }; alert("Scroll by dragging ENABLED"); } }, };`
