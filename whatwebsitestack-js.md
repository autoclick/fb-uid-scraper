---
title: "WhatWebsiteStack.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)``export default { icon: `https://www.wappalyzer.com/favicon.ico`, name: { en: “View website stack”, vi: “Web dùng công nghệ gì?”, }, description: { en: “Technology that current website is using”, vi: “Xem những công nghệ/thư viện trang web đang dùng”, },  onClick: function () { var d = document, e = d.getElementById(“wappalyzer-container”); if (e !== null) { d.body.removeChild(e); } var u = “https://www.wappalyzer.com/”, t = new Date().getTime(), c = d.createElement(“div”), p = d.createElement(“div”), l = d.createElement(“link”), s = d.createElement(“script”); c.setAttribute(“id”, “wappalyzer-container”); l.setAttribute(“rel”, “stylesheet”); l.setAttribute(“href”, u + “css/bookmarklet.css”); d.head.appendChild(l); p.setAttribute(“id”, “wappalyzer-pending”); p.setAttribute( “style”, “background-image: url(” + u + “images/spinner.gif) !important” ); c.appendChild(p); s.setAttribute(“src”, u + “bookmarklet/wappalyzer.js”); s.onload = function () { window.wappalyzer = new Wappalyzer(); s = d.createElement(“script”); s.setAttribute(“src”, u + “bookmarklet/apps.js”); s.onload = function () { s = d.createElement(“script”); s.setAttribute(“src”, u + “bookmarklet/driver.js”); c.appendChild(s); }; c.appendChild(s); }; c.appendChild(s); d.body.appendChild(c); }, };``
