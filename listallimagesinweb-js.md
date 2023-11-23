---
title: "ListAllImagesInWeb.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: '', name: { en: "View all images in web", vi: "View all images in website", }, description: {  en: "View all images in web", vi: "View all images in a new tab",  },  onClick: function() { var A = {}, B = [], D = document, i, e, a, k, y, s, m, u, t, r, j, v, h, q, c,  G; G = open().document; G.open(); G.close();  function C(t) { return G.createElement(t); }  function P(p, c) { p.appendChild(c); }  function T(t) { return G.createTextNode(t); } for (i = 0; (e = D.images[i]); ++i) { a = e.getAttribute("alt"); k = escape(e.src) + "%" + (a != null) + a; if (! A[k]) { y = !! a + (a != null); s = C("span"); s.style.color = ["red", "gray", "green"][y]; s.style.fontStyle = ["italic", "italic", ""][y]; P(s, T(["missing", "empty", a][y])); m = e.cloneNode(true); if(G.importNode) m = G.importNode(m, true); if(m.width> 350) m.width=350; B.push([0, 7, T(e.src.split("/").reverse()[0]), m, s]); A[k] = B.length; } u = B[A[k] – 1]; u[1] = T(++u[0]); } t = C("table"); t.border = 1; r = t.createTHead().insertRow(-1); for (j = 0; (v = ["#", "Filename", "Image", "Alternate text"][j]); ++j) { h = C("th"); P(h, T(v)); P(r, h); } for (i = 0; (q = B[i]); ++i) { r = t.insertRow(-1); for (j = 1; (v = q[j]); ++j) { c = r.insertCell(-1); P(c, v); } } P(G.body, t); }, };`
