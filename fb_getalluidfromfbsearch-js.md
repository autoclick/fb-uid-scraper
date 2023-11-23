---
title: "Fb_getAllUidFromFbSearch.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { name: { en: "Get all fb User ID from search page", vi: "Get all fb user IDs from search page", }, description: {  en: "Get id of all user from facebook search page", en: "Get all user ids from facebook user search page",  }, whiteList: ["https://www.facebook.com/*"],  onClick: function() { const getUid = async (url) => { var response = await fetch(url); if (response.status == 200) {  var text = await response.text();  let uid = /(?<=\"userID\"\:\")(.\d+?) (?=\")/.exec(text); if (uid?. length) { return uid[0]; } } return null; }; const main = async () => { alert("Getting uid information, open console to see progress..."); let list_a = Array.from( document.querySelectorAll("a[role='presentation']") ); let uids = []; for (let a of list_a) { let l = a.href; let uid = l.split("profile.php?id=")[1]; if (uid) { uids.push(uid); console.log( uid);  continue;  } let name = l.split("facebook.com/")[1]; uid = await getUid(l); uids.push(uid); console.log(name, uid); } console.log(uids); prompt("All UID: ", uids.join("\n")); }; main(); }, };`
