---
title: "ViewScriptsUsed.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)```export default { icon: ``, name: { en: “View scripts used”, vi: “Xem tất cả scripts”, }, description: { en: “View all scripts used in current website”, vi: “Mở danh sách scripts đươc dùng bởi trang web trong tab mới”, },  onClick: function () { s = document.getElementsByTagName(“SCRIPT”); d = window.open().document; d.open(); d.close(); b = d.body;  function trim(s) { return s.replace(/^\s*\n/, “”).replace(/\s*$/, “”); }  function add(h) { b.appendChild(h); }  function makeTag(t) { return d.createElement(t); }  function makeText(tag, text) { t = makeTag(tag); t.appendChild(d.createTextNode(text)); return t; } add(makeText(“style”, “iframe{width:100%;height:18em;border:1px solid;”)); add(makeText(“h3”, (d.title = “Scripts in ” + location.href))); for (i = 0; i < s.length; ++i) { if (s[i].src) { add(makeText("h4", 'script src="' + s[i].src + '"')); iframe = makeTag("iframe"); iframe.src = s[i].src; add(iframe); } else { add(makeText("h4", "Inline script")); add(makeText("pre", trim(s[i].innerHTML))); } } }, }; // export function viewScriptsUsed() { // let scripts = document.getElementsByTagName("SCRIPT"), // tx = "", // sr = []; // for (i = 0; i < scripts.length; i++) { // let script = scripts.item(i); // if (script.text) tx += script.text; // else sr.push(script.src); // } // newTab = window.open(); // newTab.document.write( // `  // // ` // ); // newTab.document.close(); // }```
