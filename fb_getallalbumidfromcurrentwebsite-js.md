---
title: "Fb_getAllAlbumIdFromCurrentWebsite.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { name: { en: "Get all fb Album ID from current page", vi: "Get all fb album id from current page", }, description: {  en: "Get all album id in facebook website",  en: "Get all album id in facebook page",  }, whiteList: ["https://www.facebook.com/*"],  onClick: function() { // Get all album ids present in the website – While viewing 1 album list by user/group /page  const list_a = document.querySelectorAll("a"); let list_id = []; for (let a of [location, ... Array.from(list_a)]) { const page_album_id = /(?<=\/photos\/a\.) (.\d+?) (?=\/)/.exec(a.href); if (page_album_id &&&; page_album_id[0]) { list_id.push(page_album_id[0]); } const group_album_id = /(?<=set\=oa\.) (.\d+?) ($|(?=&)) /.exec(a.href); if (group_album_id &&&; group_album_id[0]) { list_id.push(group_album_id[0]); } const user_album_id = /(?<=set\=a\.) (.\d+?) ($|(?=&)) /.exec(a.href); if (user_album_id &&&; user_album_id[0]) { list_id.push(user_album_id[0]); } } filter duplicate: https://stackoverflow.com/a/14438954 list_id = [... new Set(list_id)]; if (list_id.length) prompt( 'Found ${list_id.length} album id in website and on url.', list_id.join(", ") ); else prompt( "No ALBUM ID found in website!\nAre you on the correct album page?\nWebsite Example:", "https://www.facebook.com/media/set/?vanity=ColourfulSpace&set=a.945632905514659" ); }, };`
