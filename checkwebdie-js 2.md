---
title: "CheckWebDie.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`import { getCurrentTab } from "./helpers/utils.js";  export default { icon: 'https://s2.googleusercontent.com/s2/favicons?domain=downforeveryoneorjustme.com', name: { en: "Dowfor – Check web die", vi: "Dowfor – Check web die", }, description: { en: "Check web die using downforeveryoneorjustme",  en: "Use 3rd party to check if the website is really dead",  },  onClickExtension: async function() { let { url } = await getCurrentTab(); if (url) { let url_to_check = prompt("Enter web url to check", url); if (url_to_check) { window.open("https://downforeveryoneorjustme.com/" + url_to_check);  } } else { alert("Current web url not found"); } }, };`
