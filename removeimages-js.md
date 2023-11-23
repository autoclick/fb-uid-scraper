---
title: "RemoveImages.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { name: { en: "Remove images", vi: "Remove all images", }, description: {  en: "Remove all images from website", vi: "Leave only text, help focus more",  },  onClick: function() { function toArray(c) { var a, k; a = new Array(); for (k = 0; k < c.length; ++k) a[k] = c[k]; return a; } var images, img, altText; images = toArray(document.images); for (var i = 0; i < images.length; ++i) { img = images[i]; altText = document.createTextNode(img.alt); img.parentNode.replaceChild(altText, img); } }, };`
