---
title: "GetAllEmailsInWeb.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)```export default { icon: ``, name: { en: “Extract all Emails from website”, vi: “Trích xuất mọi emails từ trang web”, }, description: { en: “Extracts all emails and displays them in a popup iFrame (enable popups!)”, vi: “Trích xuất tất cả emails trong web và hiện trong popup mới”, },  onClick: function () { // source code from: https://bookmarklet.vercel.app/  let StrObj = document.body.innerHTML; let haystack = StrObj.toString(); let regex = /(?:[a-z0-9!#$%&’*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&’*+/=?^_`{|}~-]+)*|”(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*”)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g; let found = haystack.match(regex); if (found !== null && found !== “”) { let mailz = found.join(“\r\n “); let w = window.open( “”, “mailz”, “scrollbars,resizable,width=400,height=600” ); w.document.write(mailz); } else { alert(“No emails found on page”); } }, };```
