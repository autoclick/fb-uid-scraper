---
title: "WebToPDF.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`import { attachDebugger, detachDebugger, getCurrentTab, sendDevtoolCommand, showLoading,  } from "./helpers/utils.js";  export default { icon: 'https://lh3.googleusercontent.com/qz7_-nogEpLsoxevV_IQbz0UesDFWsbmKyv_vOGUhMRSu6pEYAJCUM50QkTBvw8saVNSmwB0DBpLSBZgfpmAYL3bgh4=w128-h128-e365-rj-sc0x00ffffff', name: { en: "Web to PDF", vi: "Print web to PDF", }, description: {  en: "Convert current website to PDF",  vi: "Convert current website to PDF",  },  onClickExtension: async function() { const { downloadURL } = UsefulScriptGlobalPageContext.Utils;  const { setLoadingText, closeLoading } = showLoading("PDF creating..."); let tab = await getCurrentTab(); try { // https://chromedevtools.github.io/devtools-protocol/tot/Page/#method-printToPDF await attachDebugger(tab); let res = await sendDevtoolCommand(tab, "Page.printToPDF", { /  / displayHeaderFooter: true, printBackground: true,  }); await detachDebugger(tab);  https://stackoverflow.com/a/59352848/11898496 downloadURL("data:application/pdf; base64," +res.data, "web.pdf"); } catch (e) { if ( confirm( "Error: " + e +  "\n\nDo you want to use option 2? Use web2pdfconvert?" ) ) { window.open("https://www.web2pdfconvert.com#" + tab.url); } } closeLoading(); }, };`
