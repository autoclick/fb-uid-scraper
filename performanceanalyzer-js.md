---
title: "PerformanceAnalyzer.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)``export default { icon: `https://ssl.gstatic.com/pagespeed/insights/ui/logo/favicon_48.png`, name: { en: “Performance Analyzer”, vi: “Phân tích hiệu suất”, }, description: { en: “Check performance metrics of website”, vi: “Phân tích hiệu suất website không cần biết code”, },  onClick: function () { let options = [ { name: “Sử dụng PageSpeed Insights”, func: () => { window.open( “https://developers.google.com/speed/pagespeed/insights/?url=” + encodeURIComponent(location.href) ); }, }, { name: “Sử dụng gtmetrix”, func: () => { window.open(“https://gtmetrix.com/?url=” + document.domain); }, }, { name: “Sử dụng performanceBookmarklet.min.js (beta)”, func: () => { let src = “https://micmro.github.io/performance-bookmarklet/dist/performanceBookmarklet.min.js”;  let el = document.createElement(“script”); el.type = “text/javascript”; el.src = src; el.onerror = function () { alert( ‘Looks like the Content Security Policy directive is blocking the use of bookmarklets\n\nYou can copy and paste the content of:\n\n”https://micmro.github.io/performance-bookmarklet/dist/performanceBookmarklet.min.js”\n\ninto your console instead\n\n(link is in console already)’ ); console.log(src); }; document.getElementsByTagName(“head”)[0].appendChild(el); }, }, ];  let choice = prompt( options.map((_, i) => `${i}: ${_.name}`).join(“\n”) + “\n\n – Your choice:”, 0 );  if (choice != null && choice >= 0 && choice < options.length) { options[choice]?.func?.(); } }, };``