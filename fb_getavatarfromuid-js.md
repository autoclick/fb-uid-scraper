---
title: "Fb_getAvatarFromUid.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`import { showLoading } from "./helpers/utils.js"; import { AccessToken } from "./helpers/constants.js";  export default { icon: '', name: { en: "Get avatar from fb user id", en: "Download avatar from fb user id", }, description: {  en: "Get avatar from list facebook user ids", en: "Download avatar from list facebook user id",  },  onClickExtension: async function() { const { downloadData } = UsefulScriptGlobalPageContext.Utils;  let uids = prompt("Enter uid list, 1 line per uid:"); if (!uids) return;  const { closeLoading, setLoadingText } = showLoading(); try { uids = uids.split("\n"); let urls = []; for (let uid of uids) { setLoadingText("Taking avatar of " + uid + "...");  let url = await shared.getAvatarFromUid(uid); if (url) { urls.push( url); } }  if (urls.length === 0) alert("No avatar found!"); else if(urls.length === 1) window.open(urls[0]); else { if ( confirm("Found " + urls.length + " avatars.\nClick OK to download.") ) downloadData( urls.join("\n"), 'uid-${new Date().toLocaleString() }.txt' ); } } catch (e) { alert("ERROR: " + e); } finally { closeLoading(); } }, };  export const shared = { getAvatarFromUid: async (uid) => { let url = 'https://graph.facebook.com/${uid}/picture?height=500&access_token=${AccessToken.FacebookIphone}'; let data = await fetch(url); return data.url;  }, };`
