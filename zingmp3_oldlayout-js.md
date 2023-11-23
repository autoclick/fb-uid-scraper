---
title: "Zingmp3_oldLayout.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: "https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.64/static/media/icon_zing_mp3_60.f6b51045.svg", name: { en: "Zingmp3 old/new layout", vi: "Zingmp3 old/new interface", }, description: { en: "Toggle UI zingmp3 old/new",  en: "Enable/disable new zingmp3 interface", }, whiteList: ["https://zingmp3.vn/*",  "https://mp3.zing.vn/*"],  onDocumentStart : () => { / / prevent auto redirect from https://mp3.zing.vn/ to https://zingmp3.vn/ window.MP3_MEDIA_USER_UPLOAD = 1;  mp3 VIP (test) window.onload = () => { if (window.MP3) { window.MP3. ACCOUNT_ID = new Date().getTime(); window.MP3. ACCOUNT_NAME = "VIP – Useful scripts"; window.MP3.VIP = 1; window.MP3.IS_IP_VN = true; }  window.checkLogin = () => true;  if (window. ZVip) { window. ZVip.isVip = 1; window.ZVip.vip = 1; } }; },  onClick: function() { if (location.hostname === "mp3.zing.vn") location.hostname = "zingmp3.vn"; else location.hostname = "mp3.zing.vn";  }, };`
