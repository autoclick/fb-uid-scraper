---
title: "Fb_fetchAllAddedFriends.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`import { showLoading } from "./helpers/utils.js";  export default { icon: '', name: { en: "Facebook – Fetch all added friends", vi: "Facebook – View all friends added", }, description: {  en: "View all friends added to your Facebook account.", en: "See a list of all facebook friends who have friended you.",  },  onClickExtension: async() => { let { setLoadingText, closeLoading } = showLoading("Preparing..."); try { let { getYourUserId, getFbdtsg, fetchAddedFriends, fetchAllAddedFriendsSince,  } = UsefulScriptGlobalPageContext.Facebook;  setLoadingText("Taking uid, token..."); let uid = await getYourUserId(); let dtsg = await getFbdtsg();  setLoadingText("Loading information..."); // let twoMonthAgo = parseInt(new Date() / 1e3 – 5184e3).toString(); const allFriends = await fetchAllAddedFriendsSince( uid, dtsg, null, // twoMonthAgo (data,  total) => { let lastest = data[data.length – 1]; setLoadingText( 'Getting information... ' + 'Load ${total.length} you. ' + 'Time: ' + new Date(lastest?. addedTime).toLocaleDateString() ); } ); console.log(allFriends); } catch (e) { alert("ERROR: " + e); } finally { closeLoading(); } }, };`
