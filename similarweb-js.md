---
title: "SimilarWeb.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: "https://files.startupranking.com/startup/thumb/19950_8743c12283f6a62f069b5b05d518e1ba31465150_similarweb_l.png", name: { en: "Find alternative web", vi: "Find similar websites", }, description: {  en: "SimilarWeb – Access behind-the-scenes analytics for every site online",  vi: "SimilarWeb – Detailed analytics for every website online",  },  onClick: function() { window.open( 'https://www.similarweb.com/website/ ' + location.hostname + "/#competitors " ); }, };`
