---
title: "Fb_toggleNewFeed.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: ‘‘, name: { en: “Hide Newfeed facebook”, vi: “Ẩn Newfeed facebook”, }, description: { en: “Hide Newfeed facebook for better focus to work”, vi: “Ẩn Newfeed facebook để tập trung làm việc”, }, infoLink: “https://www.facebook.com/groups/j2team.community/posts/1919935575005220/”, whiteList: [“https://www.facebook.com/*”],  onDocumentStart: () => { UsefulScriptGlobalPageContext.DOM.onElementsVisible( “[role=’feed’], [role=’main’]”, (nodes) => Array.from(nodes).forEach((node) => (node.style.display = “none”)), true ); },  onClick: async function () { [ …Array.from(document.querySelectorAll(“[role=’feed’], [role=’main’]”)), // document.querySelector(“#watch_feed”), // document.querySelector(“#ssrb_stories_start”)?.parentElement, // document.querySelector(“#ssrb_feed_start”)?.parentElement, ].forEach((el) => { if (el) { el.style.display = el.style.display === “none” ? “” : “none”; } else console.log(“ERROR: Cannot find element”); }); }, };`
