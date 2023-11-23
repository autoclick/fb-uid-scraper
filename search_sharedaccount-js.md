---
title: "Search_sharedAccount.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`import { getCurrentTab } from "./helpers/utils.js";  export default { icon: 'http://bugmenot.com/favicon.ico', name: { en: "Find shared login", vi: "Find free shared account", }, description: {  en: "Get free shared account on internet", vi: "Find shared account on network for current website",  },  onClickExtension: async function() { const providers = [ {  name: "bugmenot.com", getLink: (hostname) => "http://www.bugmenot.com/view/" + hostname, }, { name: "login2.me", getLink: (hostname) => 'https://login2.me/#${hostname}', },  {  name: "password-login.com",  getLink: (hostname) => 'https://password-login.com/passwords/${hostname}/', },  ];  let providersText = providers.map((_, i) => '${i}: ${_.name}').join("\n"); let choice = prompt('Choose provider:\n\n${providersText} ', 0);  if (choice >= 0 && choice < providers.length) { let tab = await getCurrentTab(); if (!tab.url) { alert("Error: Website url not found."); return; } let { hostname } = new URL(tab.url); var url = providers[choice].getLink(hostname); w = open( url, "w", "location=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=700,height=400,modal=yes,dependent=yes" ); } }, };`
