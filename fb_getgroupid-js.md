---
title: "Fb_getGroupId.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: '', name: { en: "Get fb Group ID", vi: "Get fb Group ID", }, description: {  en: "Get id of group in facebook website", vi: "Get id of group in current facebook page",  }, whiteList: ["https://www.facebook.com/*"],  onClick: async function() { / / Get group id – where the url of the group displays the name rather than the id. For example, https://www.facebook.com/groups/j2team.community.girls  const group_name = document.title; const found = (check) => { if (check &&&; check[0]) { prompt('GROUP ID of ${group_name}:', check[0]); return true; } return false; }; if (found(/(?<=\/groups\/)(.\d+?) ($|(?=\/)|(?=&)) /.exec(location.href))) return; const list_a = document.querySelectorAll("a"); for (let a of Array.from(list_a)) { if (found(/(?<=\/groups\/)(.\d+?) (?=\/user\/)/.exec(a.href))) return; } prompt( "No GROUP ID found in website!\nAre you on the correct group page?\nWebsite Example:", "https://www.facebook.com/groups/j2team.community.girls" ); }, };`
