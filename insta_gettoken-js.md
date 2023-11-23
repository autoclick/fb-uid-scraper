---
title: "Insta_getToken.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: "https://www.instagram.com/favicon.ico", name: { en: "Get insta token", vi: "Get insta token", }, description: {  en: "Get instagram access token",  vi: "Get instagram access token",  },  onClick: function() {  try { const encoded = document.cookie .split("; ") ?. find((_) => _.startsWith("fbsr")) ?. split(".") [1]; if (encoded) { const decoded = JSON.parse(atob(encoded)); console.log(decoded); prompt("Access token: ", decoded.oauth_token);  } else { alert( "Access token information not found in cookie!\nAre you logged into instagram??" ); } } catch (e) { alert("Error: " + e.toString()); } }, };  function backup() { // https://greasyfork.org/en/scripts/14755-instagram-reloaded function get_csrf_token() { return document.body.innerHTML .match(/\"csrf_token\":(?:"[^"]*"|^[^"]*$)/)[0] .replace(/\" /g, "") .split(":")[1] ; } }`
