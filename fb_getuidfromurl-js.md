---
title: "Fb_getUidFromUrl.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`import { showLoading } from "./helpers/utils.js";  export default { name: { en: "Get fb User ID from url", vi: "Get fb User ID from URL", }, description: {  en: "Get id of facebook user from entered url", vi: "Get facebook user id from incoming URL",  },  onClick: function() { / / Get UID from user fb's url. For example, https://www.facebook.com/99.hoangtran const url = prompt("Enter user url fb:", ""); if (url) { UsefulScriptGlobalPageContext.Facebook.getUidFromUrl(url) .then((uid) => { if (uid) prompt('UID of user ${ url}:', uid); else alert("User uid not found!");  }) .catch((err) => alert("Error: " + err.message) ); } }, };`
