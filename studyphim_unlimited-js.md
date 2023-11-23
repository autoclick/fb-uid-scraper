---
title: "Studyphim_unlimited.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: "https://www.studyphim.vn/assets/ico/favicon.ico", name: { en: "Studyphim – Watch free movies", en: "Studyphim – Watch free movies", }, description: {  en: "Watch movies on Studyphim for free without login",  en: "Watch movies on Studyphim without login",  },  infoLink: "https://www.facebook.com/groups/j2team.community/posts/565933393738785/" ,  whiteList: ["https://www.studyphim.vn/*"],  onDocumentStart: () => { / / Source: https://github.com/gys-dev/Unlimited-Stdphim UsefulScriptGlobalPageContext.DOM.deleteElements( ".overlay.playable.hide, .overlay.playable, #topchapter, #wrapper_header", true ); }, };`
