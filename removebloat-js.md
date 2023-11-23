---
title: "RemoveBloat.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { name: { en: "Remove bloat (iframe, embed)", vi: "Remove all iframes/embed", }, description: { en: "Remove iframes, embeds, applets from website",  en: "Remove any distractions (ads, embedded web, ..)",  },  onClick: function() { function R(w) {  try { var d = w.document, j, i, t, T, N, b,  r = 1,  C; for (j = 0; (t = ["object", "embed", "applet", "iframe"][j]); ++j) { T = d.getElementsByTagName(t); for (i = T.length – 1; i + 1 &&; (N = T[i]); –i) if ( j != 3 || ! ! R((C = N.contentWindow) ? C : N.contentDocument.defaultView) ) ) { b = d.createElement("div"); b.style.width = N.width; b.style.height = N.height;  b.innerHTML = "" + (j == 3 ? " third-party " + t : t) + ""; N.parentNode.replaceChild(b, N); }  } } catch (E) { r = 0; } return r; } R(self); var i, x; for (i = 0; (x = frames[i]); ++i) R(x); }, };`
