---
title: "WebToQRCode.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: '', name: { en: "URL to QR Code", vi: "Get QRCode for current web", }, description: {  en: "Convert current website URL to QR Code", vi: "Convert website URL to QR Code",  },  onClick: function() { var url = "http://chart.apis.google.com/chart?cht=qr&chs=300×300&chl=" + encodeURIComponent(location.href); w = open( url, "w", "location=no,status=yes,menubar=no,scrollbars=no,resizable=yes,width=500,height=500,modal=yes,dependent =yes " ); if (w) { setTimeout("w.focus()", 1000);  } else { location = url; }  }, };`
