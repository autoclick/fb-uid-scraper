---
title: "Fb_messengerCount_main.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)``const inputSearch = document.querySelector(“#search-inp”); const tableDiv = document.querySelector(“table”);  function main() { try { let data = JSON.parse(localStorage.ufs_fb_msg_kount);  tableDiv.innerHTML = `  Rank Group Name Count  ${data .map((c, i) => { let link = `https://www.facebook.com/messages/t/${c.id}`; let isGroup = c.type === “GROUP”; let group = isGroup ? “![](https://s.w.org/images/core/emoji/14.0.0/svg/2705.svg)” : “”; let participants_name = c.participants .map((_) => _.name) .filter((_) => _) .join(“, “); let name = isGroup ? `${c.name} (${participants_name})` : c.name; let avatar = isGroup ? `  ${c.participants .map((p) => `![](https://naturelovers.15w.xyz/blog/fb_messengercount_main-js/$%7Bp?.avatar})`) .join(“”)}  ` : `![](https://naturelovers.15w.xyz/blog/fb_messengercount_main-js/$%7Bc.participants[0]?.avatar})`;  return `  ${i + 1} ${group} ${avatar} ${name} ${c.count}  `; }) .join(“”)} `;  inputSearch.oninput = (e) => { search(inputSearch.value); }; } catch (e) { alert(“ERROR: ” + e); } }  function search(text) { […tableDiv.querySelectorAll(“tr”)].forEach((tr, index) => { if (index == 0) return; // ignore table header  let html = tr.innerHTML; if (!html.toLowerCase().includes(text.toLowerCase())) { tr.classList.add(“hidden”); } else { tr.classList.remove(“hidden”); } }); }  main();``
