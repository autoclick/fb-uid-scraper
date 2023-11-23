---
title: "ToggleEditPage.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: ``, name: { en: “Toggle edit page”, vi: “Bật/tắt chế độ chỉnh sửa website”, }, description: { en: “Edit all text in website”, vi: “Cho phép chỉnh sửa mọi văn bản trong website”, },  onClick: function () { let isOn = document.designMode == “on”; let willOn = isOn ? false : true;  if (willOn) { document.body.contentEditable = “true”; document.designMode = “on”;  alert(“Bạn có thể chỉnh sửa ngay bây giờ”); } else { document.body.contentEditable = “false”; document.designMode = “off”;  alert(“Đã tắt chế độ chỉnh sửa”); } }, };`
