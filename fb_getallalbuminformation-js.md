---
title: "Fb_getAllAlbumInformation.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: '', name: { en: "Get all albums information", vi: "Get all albums information", }, description: {  en: "Get all albums information from user, group, page (id, count, link, ...)", vi: "Get all albums information from user, group, page (id, number, link, ...)",  },  onClickExtension: async() => { let ACCESS_TOKEN = prompt("Enter your access token here"); if (! ACCESS_TOKEN) return;  let id = prompt("Enter the ID of the user, group, page to get the group id", ""); if (!id) return;  fetch( 'https://graph.facebook.com/v13.0/${id}/albums?fields=type,name,count,link,created_time&limit=100&access_token=${ACCESS_TOKEN}' ) .then(res) => res.json()) .then((json)  => { console.log(json.data); alert( ' Found ${json.data?. length} algum.\nView results in the extension's console ); }) .catch((err) => { console.log(err); alert("An error occurred: " + err); });  }, };`
