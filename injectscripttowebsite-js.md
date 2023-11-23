---
title: "InjectScriptToWebsite.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: '', name: { en: "Inject script to website", vi: "Embed script on web page", }, description: {  en: "", vi: "",  },  onClick: function () { / / https://stackoverflow.com/a/26573284 function injectScriptAndUse(src) { var script = document.createElement("script"); script.src = src; script.onload = function() { alert("Inject SUCCESS: " + url); }; script.onerror = function (e) { alert("Inject FAILED. " + e); }; document.querySelector("head")?. appendChild?. (script); }  https://stackoverflow.com/a/43467144 function isValidHttpUrl(string) { let url; try { url = new URL(string); } catch (_) { return false;  } return url.protocol === "http:" || url.protocol === "https:"; }  let url = prompt( "Enter script url / Enter link script: ", "//code.jquery.com/jquery-3.6.1.min.js " );  if (url) { // if (!isValidHttpUrl(url)) alert("URL not valid / Link is invalid"); // else { injectScriptAndUse(url);  / / } }  }, };  function backup() { // https://stackoverflow.com/a/38840724/11898496 /  / Script loader: https://plnkr.co/edit/b9O19f?p=preview&preview }`
