---
title: "RemoveCookies.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: ``, name: { en: “Remove cookies”, vi: “Xoá Cookies”, }, description: { en: “Remove cookies from current website”, vi: “Xoá cookies trang hiện tại”, },  onClick: function () { let clearCookies = () => { let C = document.cookie.split(“; “); for (d = “.” + location.host; d; d = (“” + d).substr(1).match(/\..*$/)) for (sl = 0; sl < 2; ++sl) for ( p = "/" + location.pathname; p; p = p.substring(0, p.lastIndexOf("/")) ) for (i in C) if ((c = C[i])) { document.cookie = c + "; domain=" + d.slice(sl) + "; path=" + p.slice(1) + "/" + "; expires=" + new Date(new Date().getTime() - 1e11).toGMTString(); } }; var c = document.cookie.replace(/; /g, "\n"); if (c == "") { alert("There is No cookie here"); } else { if (confirm("Are you sure want to delete all cookies?\n" + c)) { clearCookies(); alert("Remove cookies DONE"); } } }, };`
