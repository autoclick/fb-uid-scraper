---
title: "Fb_downloadCommentVideo.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`import fb_storySaver from “./fb_storySaver.js”;  export default { icon: ‘‘, name: { en: “Download facebook comment video”, vi: “Tải video trong comment facebook”, }, description: { en: “Download video in facebook comment that you are watching”, vi: “Tải video trong bình luận facebook bạn đang xem”, },  onClick: fb_storySaver.onClick, };  async function backup() { // DYL extension: Get video from comment id (quality: SD) let commendId = “2009814422684001”; let access_token = “…”; let res = await fetch( “https://graph.facebook.com/v8.0/” + commendId + “?fields=attachment&access_token=” + access_token ); let json = await res.json(); return json.attachment.media.source; }`
