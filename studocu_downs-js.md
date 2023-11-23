---
title: "Studocu_downs.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`import { getCurrentTab } from "./helpers/utils.js";  export default { icon: "https://d20ohkaloyme4g.cloudfront.net/img/favicon.ico", name: { en: "Studocu – Download documents (Downstudocu)", vi: "Studocu – Download documents (Downstudocu)", }, description: {  en: "Download document pdf on Studocu.com for free", en: "Download PDF document on Studocu.com for free",  },  onClickExtension: async function() { let tab = await getCurrentTab(); let url = prompt("Enter link studocu document:", tab.url);  if (url == null) return; url = new URL(url); url.hostname = "www.downstudocu.com"; window.open(url); }, };`
