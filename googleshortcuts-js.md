---
title: "GoogleShortcuts.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: '', name: { en: "Google shortcuts", vi: "Google shortcuts", }, description: { en: "Create new google doc/sheet/slide/form/site/keep/calendar",  en: "Create new google doc/sheet/slide/form/site/keep/calendar",  },  onClick: function() { let urls = [ ["Google Doc", "https://doc.new"], ["Google Sheet", "https://sheet.new"], ["Google Slide", "https://slide.new"], ["Google Form", "https://form.new"], ["Google Site", "https://site.new"], ["Google Keep", "https://keep.new"], ["Google Calendar", "https://calendar.new"],  ];  let option = prompt( "Create new:\n\n" + urls.map(([name, url], index) => '- ${index}: ${name}\n').join(""), 0 );  if (option != undefined &&; option >= 0 && option < urls.length) { window.open(urls[option][1]); } }, };`
