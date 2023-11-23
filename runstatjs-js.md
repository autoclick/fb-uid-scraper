---
title: "RunStatJs.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { name: { en: “Run Stat.js”, vi: “Chạy stats.js”, }, description: { en: “Run stat.js in current website”, vi: “Tính toán FPS website”, },  onClick: function () { let src = “//mrdoob.github.io/stats.js/build/stats.min.js”; var script = document.createElement(“script”); script.onload = function () { var stats = new Stats(); document.body.appendChild(stats.dom); requestAnimationFrame(function loop() { stats.update(); requestAnimationFrame(loop); }); }; script.onerror = (event) => { alert( ‘Looks like the Content Security Policy directive is blocking the use of script\n\nYou can copy and paste the content of:\n\n”‘ + src + ‘”\n\ninto your console instead\n\n(link is in console already)’ ); console.log(src); }; script.src = src; document.head.appendChild(script); }, };`
