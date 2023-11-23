---
title: "_test.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)``export default { icon: “”, name: { en: “Test”, vi: “Test”, }, description: { en: “”, vi: “”, }, whiteList: [“https://graph.facebook.com/*”],  onClick: async () => { let ACCESS_TOKEN = prompt(“Nhập access token của bạn vào đây”); if (!ACCESS_TOKEN) return;  let id = prompt(“Nhập ID của user, group, page cần lấy group id”, “”); if (!id) return;  alert(“Xem kết quả trong console”); fetch( `https://graph.facebook.com/v13.0/${id}/albums?fields=type,name,count,link,created_time&limit=100&access_token=${ACCESS_TOKEN}` ) .then((res) => res.json()) .then((json) => { console.log(json.data); }) .catch((err) => { console.log(err); }); }, };``
