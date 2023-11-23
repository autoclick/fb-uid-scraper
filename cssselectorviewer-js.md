---
title: "CssSelectorViewer.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: ``, name: { en: “CSS selector viewer”, vi: “Trình kiểm tra css cục bộ”, }, description: { en: “Inspect css at specific element on the web”, vi: “Kiểm tra mã css cho thành phần bất kỳ trong trang web”, },  onClick: function () { var s = document.createElement(“div”); s.innerHTML = “Loading…”; s.style.color = “black”; s.style.padding = “20px”; s.style.position = “fixed”; s.style.zIndex = “9999”; s.style.fontSize = “3.0em”; s.style.border = “2px solid black”; s.style.right = “40px”; s.style.top = “40px”; s.setAttribute(“class”, “selector_gadget_loading”); s.style.background = “white”; document.body.appendChild(s);  s = document.createElement(“script”); s.setAttribute(“type”, “text/javascript”); s.setAttribute( “src”, “https://dv0akt2986vzh.cloudfront.net/unstable/lib/selectorgadget.js” ); s.onerror = () => { alert(“ERROR, cannot load remote script.”); }; document.body.appendChild(s); }, };`
