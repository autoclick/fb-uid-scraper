---
title: "InternalOrExternalLink.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: '', name: { en: "Highlight internal/external link", vi: "Color link", }, description: { en: "+Red = Internal_link\n+Orange = Currently_opened_link\n+Blue = External_link",  en: "+Red: same domain\n+Orange: current\n+Green: different domain",  },  onClick: function() { var i, x; for (i = 0; (x = document.links[i]); ++i) x.style.color = ["blue", "red", "orange"][sim(x, location) ];  function sim(a, b) { if (a.hostname != b.hostname) return 0; if (fixPath(a.pathname) != fixPath(b.pathname) || a.search != b.search) return 1; return 2;  }  function fixPath(p) { p = ( p.charAt(0) == "/" ? "" : "/") + p; /*many browsers*/ p = p.split("?") [0]; /*opera*/ return p; } }, };`
