---
title: "GoogleCache.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`import { getCurrentTab } from "./helpers/utils.js";  export default { / / icon get from https://chrome.google.com/webstore/detail/google-cache-viewer/fgfklknfijhflahngajfoagmoilakebp icon: "https://lh3.googleusercontent.com/OoZ3sM4u01hfT9201pmeBasLOsaRlZe2CbXzcXQLBYOcgpKVDPEakpr_ZHxiXQ1IkQ5dYTvEYndU0m8RH7TOhb1H=w128-h128-e365-rj-sc0x00ffffff", name: { en: "View Google cache of website", vi: "View Google cache of website",  }, description: { en: "View blocked website", en: "Good for viewing blocked websites",  },  onClickExtension: async function() { / / https://cachedviews.com/  let { url } = await getCurrentTab(); let url_to_check = prompt( "Enter URL want to see cache: ", url.replace(/^http\:\/\/(.*)$/, "$1") ); if (url_to_check != null) { window.open( "http://www.google.com/search?q=cache: " + encodeURIComponent(url_to_check) ); } }, };`
