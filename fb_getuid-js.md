---
title: "Fb_getUid.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)```export default { icon: ``, name: { en: “Get fb User ID”, vi: “Lấy fb User ID”, }, description: { en: “Get id of user in facebook website”, vi: “Lấy id của user trong trang facebook hiện tại”, }, whiteList: [“https://www.facebook.com/*”],  onClick: async function () { // Lấy user id (uid) – khi đang trong tường của người dùng muốn lấy user id. Ví dụ: https://www.facebook.com/callchoulnhe  let uid = await UsefulScriptGlobalPageContext.Facebook.getUidFromUrl( location.href ); if (uid) return prompt(`USER ID của ${document.title}:`, uid);  const find = (r) => (r ? r[0] : 0); uid = find( /(?<=\"userID\"\:\")(.\d+?)(?=\")/.exec( document.querySelector("html").textContent ) ) || find(/(?<=\/profile\.php\?id=)(.\d+?)($|(?=&))/.exec(location.href)) || (() => { for (let a of Array.from(document.querySelectorAll(“a”))) { let _ = find( /(?<=set\=(pb|picfp|ecnf|pob)\.)(.\d+?)($|(?=\.))/.exec(a.href) ); if (_) return _; } return 0; })() || find( /(?<=\"user\"\:\{\"id\"\:\")(.\d+?)(?=\")/.exec(document.body.innerHTML) ); if (uid) prompt(`USER ID của ${document.title}:`, uid); else prompt( "Không tìm thấy USER ID nào trong trang web!\nBạn có đang ở đúng trang profile chưa?\nTrang web Ví dụ: ", "https://www.facebook.com/callchoulnhe" ); }, };```
