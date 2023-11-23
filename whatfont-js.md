---
title: "WhatFont.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: 'https://www.typewolf.com/favicon.ico', name: { en: "What font", vi: "Check font", }, description: {  en: "Check font used in webpage", vi: "Check what font each element in the web uses",  },  onClick: function() { / / https://www.typewolf.com/type-sample  let src = "https://www.typesample.com/assets/typesample.js"; let d = document; var e = d.createElement("script"); e.setAttribute("type", "text/javascript"); e.setAttribute("charset", "UTF-8"); e.setAttribute("src", src + "?r=" + Math.random() * 99999999); e.onload = () => { alert("Script loaded, now use can use WhatFont."); }; e.onerror = (event) => { alert( 'Looks like the Content Security Policy directive is blocking the use of script\n\nYou can copy and paste the content of:\n\n"' +  src + '"\n\ninto your console instead\n\n(link is in console already) ' ); console.log(src); }; d.body.appendChild(e); }, };`
