---
title: "Tailieu_vn.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: "https://s2.googleusercontent.com/s2/favicons?domain_url=https://tailieu.vn/tim-kiem/lu%E1%BA%ADt.html", name: { en: "Download free from tailieu.vn", vi: "Download any document on tailieu.vn tailieu.vn  without login", vi: "Download any document on tailieu.vn without login",  },  whiteList: ["https://tailieu.vn/*"],  onClick: () => { / / change location from tailieu.vn to tailieu.download let url = new URL(window.location.href); url.hostname = "tailieu.download "; window.open(url.href, "_blank");  }, };`
