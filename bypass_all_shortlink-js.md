---
title: "Bypass_all_shortlink.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`// https://greasyfork.org/en/scripts/431691-bypass-all-shortlinks/code function userScriptConfigToObject(config) { let a = config.split(“\n”); let b = { includes: [], exclude: [], match: [], }; a.forEach((_) => { let value = _.split(” “).at(-1); if (_.includes(“@include”)) { b.includes.push(value); } else if (_.includes(“@exclude”)) { b.exclude.push(value); } else if (_.includes(“@match”)) { b.match.push(value); } }); }`
