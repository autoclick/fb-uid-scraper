---
title: "ViewStylesUsed.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: '', name: { en: "View stylesheet used", vi: "View all stylesheet", }, description: {  en: "View all stylesheet used in current website", vi: "Open css list used by website in new tab",  },  onClick: function() { s = document.getElementsByTagName("STYLE"); ex = document.getElementsByTagName("LINK"); d = window.open().document; /*set base href*/ d.open(); d.close();  b = d.body;  function trim(s) { return s.replace(/^\s*\n/, "").replace(/\s*$/, ""); }  function IFF(a, b, c) { return b ? a + b + c : ""; }  function add(h) { b.appendChild(h); }  function makeTag(t) { return d.createElement(t); }  function makeText(tag, text) { t = makeTag(tag); t.appendChild(d.createTextNode(text));  return t; } add(makeText("style", "iframe{width:100%; height:18em; border:1px solid;")); add(makeText("h3", (d.title = "Style sheets in " + location.href))); for (i = 0; i < s.length; ++i) { add( makeText("h4", "Inline style sheet" + iff(' title="', s[i].title, '"')) ); add(makeText("pre", trim(s[i].innerHTML))); } for (i = 0; i < ex.length; ++i) { rs = ex[i].rel.split(" "); for (J=0; J < rs.length; ++j) if (rs[j].toLowerCase() == "stylesheet") { add( makeText( "H4", 'link rel="' + ex[i].rel + '" href="' + ex[i].href + '"' + iff(' title="', ex[i].title, '"') ) ); iframe = makeTag("iframe"); iframe.src = ex[i].href; add(iframe); Break; } } }, };`
