---
title: "WhatApp_storySaver.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: "https://lh3.googleusercontent.com/e8gqesNOLhN-0xivFcaAlwGaoftfxEJcZXcXJ1F2bhoqrozs3mCYgLhPC0qJ9izdGYRnHwfXegimH9fjj3IBwlby9ZA=w128-h128-e365-rj-sc0x00ffffff", name: { en: "Download Whatapp Story", vi: "Download Whatapp Story", }, description: {  en: "Download whatapp story that you are watching",  vi: "Download whatapp story you are viewing",  },  onClickExtension: function() { / / Source code extracted from: https://chrome.google.com/webstore/detail/story-saver/mafcolokinicfdmlidhaebadidhdehpk  var imgs = document.querySelectorAll( 'div[data-animate-status-v3-viewer="true"] img ' ); if (imgs.length >= 3) { let storyUrl = imgs[imgs.length – 1].src; let username = imgs[0].parentElement.parentElement.nextSibling.children[0].innerText; let imgUrl = storyUrl + "#.jpg";  window.open( imgUrl); } else { alert("No story found in the site.");  } }, };`
