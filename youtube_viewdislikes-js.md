---
title: "Youtube_viewDislikes.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: "https://lh3.googleusercontent.com/X0-M21C_VbWyXYuUjN55oyMDvOukjbzAxbs_WrUjwzsebWbyjFCIEchOtczI0DBvbyL9MUpuEWnghm19gF6dp8Vriw=w128-h128-e365-rj-sc0x00ffffff", name: { en: "View youtube video dislikes", en: "View youtube video dislikes", }, description: { en: "Know how many dislikes does youtube videos have",  en: "Know the number of dislikes (dislikes) youtube videos",  }, whiteList: ["*://*.youtube.com/*"],  onClick: async function() { / / Source code extracted from https://chrome.google.com/webstore/detail/return-youtube-dislike/gebbhagfogifgggkldgodflihgfeippi  function getVideoId(url) { const urlObject = new URL(url); const pathname = urlObject.pathname; if (pathname.startsWith("/clip")) { return document.querySelector("meta[itemprop='videoId']").content;  } else { if (pathname.startsWith("/shorts")) {  return pathname.slice(8);  } return urlObject.searchParams.get("v"); } }  const apiUrl = "https://returnyoutubedislikeapi.com"; let videoId = getVideoId(location.href); let response = await fetch( '${apiUrl}/votes?videoId=${videoId}&likeCount= ', { method: "GET", headers: { Accept: "application/json",  },  } ) .then(response) => {  if (!response.ok ) alert("Error: " + response.error); return response; }) .then(response) => response.json()) .catch((e) => alert("ERROR: " + e)  );  console.log(response); alert("Youtube Dislikes:\n" + JSON.stringify(response, null, 4)); }, };`
