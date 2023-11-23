---
title: "Fb_checkToken.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: '', name: { en: "Check fb access token", vi: "Check fb access token", }, description: {  en: "Check type, permissions, created date, expired date,  ... of faceboook access token", vi: "Check type, permissions, creation date, expiration date, ... of Facebook Access Token", },  onClickExtension: function() { let token = prompt( "Enter accesstoken want to check\nEnter access token you want to check:", " " ); if (token) { window.open( "https://developers.facebook.com/tools/debug/accesstoken/?access_token= " + token ); } }, };`
