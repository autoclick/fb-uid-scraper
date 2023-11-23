---
title: "Studocu_dl.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`import { getCurrentTab, openPopupWithHtml, showLoading,  } from "./helpers/utils.js";  export default { icon: "https://dlstudocu.com/themes/assets/images/logo/icon-96×96.png", name: { en: "Studocu – Download documents (Dlstudocu)", vi: "Studocu – Download documents (Dlstudocu)", }, description: { en: "",  vi: "",  },  // onClickExtension: () => window.open("https://dlstudocu.com/"),  onClickExtension: async function() { let { setLoadingText, closeLoading } = showLoading("Pending link input..."); try { let tab = await getCurrentTab(); let url = prompt( "Enter link studocu document:\nFormat: https://www.studocu.com/vn/document/...", tab.url );  if (url == null) return;  setLoadingText("Looking for a loading link..."); let formData = new FormData(); formData.append("st_url", url);  let res = await fetch("https://dlstudocu.com/start", { method: "POST", body: formData, }); window.open(res.url); } catch (e) { alert("ERROR: " + e); } finally { closeLoading(); } }, };  export const shared = {};`
