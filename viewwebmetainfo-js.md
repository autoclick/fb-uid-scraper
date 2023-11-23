---
title: "ViewWebMetaInfo.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: "https://s2.googleusercontent.com/s2/favicons?domain_url=https://www.ouiseo.com/", name: { en: "See web meta info (SEO)", vi: "View web meta info (SEO)", }, description: {  en: "Instantly shows meta information about the current site in an on-page iFrame.", vi: "View meta information of the website directly within the website",  },  onClick: function() { / / source code from: https://bookmarklet.vercel.app/  if (window.ouiseo === undefined) { var jsCode = document.createElement("script"); jsCode.setAttribute( "src", "//carlsednaoui.s3.amazonaws.com/ouiseo/ouiseo.min.js " ); document.body.appendChild(jsCode);  } else if (!! window.ouiseo &&; !document.getElementById("ouiseo")) { ouiseo(); } else { console.log(" ouiseo is already open"); }  }, };`
