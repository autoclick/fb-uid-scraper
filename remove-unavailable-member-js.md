---
title: "Remove-Unavailable-Member.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`// https://www.facebook.com/groups/j2team.community/permalink/706024463063010 // https://gist.github.com/J2TEAM/7cc8554b74ff8af3af522b42b95e73d8?fbclid=IwAR1zfXWCWjgffNNp21IA5NaPmc3mzVJDFnPhN4QPgupRk1cT566kYxPTMCg  /* Developed by Juno_okyo */ (function (e) { function f() { var a = c.shift(); g(a).then(function () { 0 < c.length ? setTimeout(f, 100) : console.info("Done!"); }); } function g(a) { var b = new FormData(); b.append("fb_dtsg", h); b.append("__user", k); b.append("confirmed", !0); b.append("__a", 1); return fetch( "https://www.facebook.com/ajax/groups/remove_member/?group_id=" + e + "&member_id=" + a + "&is_undo=0&source=profile_browser&dpr=1", { credentials: "include", body: b, method: "POST" } ); } var c = [], h = (function () { try { return require("DTSGInitialData").token; } catch (b) { var a = document.querySelector('[name="fb_dtsg"]'); return null !== a ? a.value : null; } })(), k = (function () { if ("function" !== typeof require) return null; try { return ( require("CurrentUserInitialData").USER_ID || document.cookie.match(/c_user=([0-9]+)/)[1] ); } catch (a) { return null; } })(); fetch( "https://www.facebook.com/ajax/browser/list/group_confirmed_members/?gid=" + encodeURIComponent(e) + "&order=default&filter=unavailable_accounts&view=list&limit=500§iontype=unavailable&start=0&__a=1&fb_dtsg_ag=" + encodeURIComponent(require("DTSGInitData").async_get_token), { credentials: "include" } ) .then(function (a) { return a.text(); }) .then(function (a) { for (var b = /id=\\"unavailable_([0-9]+)\\"/g, d = b.exec(a); null != d; ) c.push(d[1]), (d = b.exec(a)); f(); }); })(YOUR_GROUP_ID);`