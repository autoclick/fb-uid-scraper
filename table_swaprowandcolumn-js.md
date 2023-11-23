---
title: "Table_swapRowAndColumn.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: '', name: { en: "Swap rows and columns", vi: "Replace rows and columns", }, description: {  en: "Swap rows and columns (transpose)", vi: "Rows to columns and columns to rows",  },  onClick: function() { var d = document, q = "table", i, j, k, y, r, c,  t; for (i = 0; (t = d.getElementsByTagName(q)[i]); ++i) { var w = 0, N = t.cloneNode(0); N.width=""; N.height = ""; N.border = 1; for (j = 0; (r = t.rows[j]); ++j) for (y = k = 0; (c = r.cells[k]); ++k) { var z, a = c.rowSpan, b = c.colSpan,  v = c.cloneNode(1); v.rowSpan = b; v.colSpan = a; v.width = "";  v.height = ""; if (!v.bgColor) v.bgColor = r.bgColor; while (w < y + b) N.insertRow(w++).p = 0; while (N.rows[y].p > j) ++y; N.rows[y].appendChild(v); for (z = 0; z < b; ++z) N.rows[y + z].p += a; y += b; } t.parentNode.replaceChild(N, t); } }, };`
