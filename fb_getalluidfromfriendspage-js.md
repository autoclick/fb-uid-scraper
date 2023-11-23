---
title: "Fb_getAllUidFromFriendsPage.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { name: { en: "Get all fb User ID from Friends page", en: "Get all fb user ids from friends page", }, description: {  en: "Get all user IDs from friends facebook page", en: "Get all user IDs from facebook friends list page",  }, whiteList: ["https://www.facebook.com/*"],  onClick: async function() { // Get all uid from facebook page Search friends // Example: https://www.facebook.com/search/people/?q=*a&epa=FILTERS&filters=eyJmcmllbmRzIjoie1wibmFtZVwiOlwidXNlcnNZnJpZW5kc19vZl9wZW9wbGVcIixcImFyZ3NcIjpcIjEwMDA2NDI2NzYzMjI0MlwifSJ9 /  / The above link was generated from the web: https://sowsearch.info/  let list_a = Array.from( document.querySelectorAll(".sjgh65i0 a[role='presentation']") );  if (!list_a.length) { return prompt( "Info not found, are you on the correct fb friends search page?" + "\nExample site:", "https://www.facebook.com/search/people/?q=*a  " ); }  alert("Retrieving uid information, open console to see progress..."); let uids = []; for (let a of list_a) {  try { let l = a.href;  let uid = l.split("profile.php?id=")[1]; if (uid) { uids.push(uid); console.log( uid);  continue; }  let name = l.split("facebook.com/")[1]; uid = await UsefulScriptGlobalPageContext.Facebook.getUidFromUrl(l); uids.push(uid); console.log(name, uid); } catch (e) { console.log("Error retrieving information of " + a, e); } } console.log(uids); prompt("All UID: ", uids.join("\n")); }, };`
