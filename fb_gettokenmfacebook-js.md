---
title: "Fb_getTokenMFacebook.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`import { showLoading } from "./helpers/utils.js";  export default { icon: '', name: { en: "Get fb Token (m.facebook.com)", vi: "Get fb token (m.facebook.com)", }, description: { en: "Get facebook access token from m.facebook.com",  en: "Get facebook access token from m.facebook.com",  },  onClickExtension: function() { const { closeLoading, setLoadingText } = showLoading("Taking tokens..."); fetch("https://m.facebook.com/composer/ocelot/async_loader/?publisher=feed") .then((response) => response.text()) .then((text) => { if ("<" == text[0]) { alert("Not logged in. You need to log in fb to get tokens."); } else { const data = { token: /(?<=accessToken\\":\\")(.*?) (?=\\")/.exec(text)?. [0], fb_dtsg: /(?<=fb_dtsg\\" value=\\")(.*?) (?=\\")/.exec(text)?. [0], id: /(?<=USER_ID\\":\\").*? (?=\\",\\")/gm.exec(text)?. [0], }; console.log(data); if (data.token) { prompt("Your Access Token:", data.token); } else { alert("Access token not found"); } } }) .catch((e) => { alert("ERROR: " + e.message); }) .finally(closeLoading); }, };`
