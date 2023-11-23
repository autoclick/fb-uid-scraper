---
title: "ShowHiddenFields.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: ``, name: { en: “Show hidden fields”, vi: “Hiện các thành phần web bị ẩn”, }, description: { en: “Reveals hidden fields on a webpage. Find things like tokens, etc”, vi: “Web thường ẩn mốt số thành phần như token, id, form, …”, },  onClick: function () { // source code from: https://bookmarklet.vercel.app/  var i, f, j, e, div, label, ne, found = false; for (i = 0; (f = document.forms[i]); ++i) for (j = 0; (e = f[j]); ++j) if (e.type == “hidden”) { D = document; function C(t) { return D.createElement(t); } function A(a, b) { a.appendChild(b); } div = C(“div”); label = C(“label”); A(div, label); A(label, D.createTextNode(e.name + “: “)); e.parentNode.insertBefore(div, e); e.parentNode.removeChild(e); ne = C(“input”); /*for ie*/ ne.type = “text”; ne.value = e.value; A(label, ne); label.style.MozOpacity = “.6”; –j; /*for moz*/  found = true; }  if (!found) alert(“Nothing is hidden! / Không có thành phần nào bị ẩn!”); }, };`
