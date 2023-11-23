---
title: "Fb_storyInfo.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: "", name: { en: "View Facebook Story information", vi: "View Facebook Story information", }, description: {  en: "Get facebook story info", vi: "View story information",  },  onClick: async function() {  try { let storyId = UsefulScriptGlobalPageContext.Facebook.getStoryId(); let storyBucketId = UsefulScriptGlobalPageContext.Facebook.getStoryBucketIdFromStoryId( storyId ); if (!storyBucketId ) throw new Error("No story found.");  let fb_dtsg = await UsefulScriptGlobalPageContext.Facebook.getFbdtsg(); let storyInfo = await UsefulScriptGlobalPageContext.Facebook.getStoryInfo( storyBucketId, fb_dtsg ); console.log(storyInfo); } catch (e) { alert("ERROR: " + e); } }, };`
