---
title: "Fb_searchGroupForOther.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`import { showLoading } from "./helpers/utils.js";  export default { icon: '', name: { en: "Facebook – View your friends's joined groups", vi: "Facebook – View your friends' joined groups", }, description: {  en: "Know about your friends' joined groups on facebook",  },  onClickExtension: async () => { let url = prompt("Enter your friend (or your) facebook link): "); if (url == null) return;  let { setLoadingText, closeLoading } = showLoading("Preparing..."); try { let { getUidFromUrl, getYourUserId, getFbdtsg, searchAllGroupForOther } = UsefulScriptGlobalPageContext.Facebook;  setLoadingText("Taking uid, token..."); let other_uid = await getUidFromUrl(url); let uid = await getYourUserId(); let dtsg = await getFbdtsg();  setLoadingText("Loading group list..."); let allGroups = await searchAllGroupForOther( other_uid, uid, dtsg, (groups,  all) => { setLoadingText( "Loading group list... Download " + all.length + " group." ); } ); console.log(allGroups); } catch (e) { alert("ERROR: " + e); } finally { closeLoading(); } }, };`
