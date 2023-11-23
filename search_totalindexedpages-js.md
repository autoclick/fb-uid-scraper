---
title: "Search_totalIndexedPages.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: '', name: { en: "Check total indexed pages", vi: "View pages scanned by google", }, description: {  en: "Know how many pages of current website is indexed in Google", en: "Know how many subpages of current website have been scanned by Google",  },  onClick: function() { window.open( "http://www.google.com/search?num=100&q=site: " + escape(location.hostname) ); }, };`
