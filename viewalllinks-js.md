---
title: "ViewAllLinks.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: ``, name: { en: “View all links”, vi: “Xem tất cả link”, }, description: { en: “Show all links and anchor text of current page.”, vi: “Liệt kê tất cả đường link có trong website”, },  onClick: function () { function getParameterByName(e, t) { e = e.replace(/[\[]/, “\\[“).replace(/[\]]/, “\\]”); var n = new RegExp(“[\\?&]” + e + “=([^&#]*)”), r = n.exec( t == true ? location.hash.replace(“#”, “?”) : location.search ); if (r == null && t == false) { return getParameterByName(e, true); } else { return r == null ? “” : decodeURIComponent(r[1].replace(/\+/g, ” “)); } } str = “  \n”; anchors = document.getElementsByTagName(“a”); var all = []; var keyword = getParameterByName(“q”, false); str += ““; str += “  “; str += “  Google SERP Scraper Bookmarklet  “; str += “  Keyword – ” + keyword + “  “; str += “  “; str += “  \n”; var tweetText = ‘  If you use and like this, please   <iframe height="600" width="800" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" src="https://platform.twitter.com/widgets/tweet_button.d37472b4a6622d0b1fff46ad904f6896.en.html#dnt=false&amp;id=twitter-widget-0&amp;lang=en&amp;original_referer=https%3A%2F%2Fnaturelovers.15w.xyz%2Fblog%2Fviewalllinks-js%2F&amp;size=m&amp;text=%2F*Google%20SERP%20Scraper*%2F%20Bookmarklet%20%2B%2068%20Other%20Uber%20Amazing%20Bookmarklets&amp;time=1700739302728&amp;type=share&amp;url=http%3A%2F%2Fcognitiveseo.com%2Fblog%2F5714%2F69-amazing-seo-bookmarklets-to-supercharge-your-internet-marketing%2F"></iframe>   about it and help us spread the word. Happy SCRAPing and thanks for sharing! Coded by cognitiveSEO.  ‘; var tweetScript = ‘‘; var k = 0; var listing = “”; var links = “”; var anchorTexts = “”; var linksAnchors = “”; for (i = 0; i < anchors.length; i++) { var anchorText = anchors[i].textContent; var anchorLink = anchors[i].href; var linkAnchor = ""; if ( anchorLink.match( /^((?!google\.|cache|\.yahoo\.|youtube\.com\/results|javascript:{}|javascript:void|javascript:\;|api\.technorati\.com|botw\.org\/search|del\.icio\.us\/url\/check|digg\.com\/search|search\.twitter\.com\/search|search\.yahoo\.com\/search|siteanalytics\.compete\.com|tools\.seobook\.com\/general\/keyword\/suggestions|web\.archive\.org\/web\/|whois\.domaintools\.com|www\.alexa\.com\/data\/details\/main|www\.bloglines\.com\/search|www\.majesticseo\.com\/search\.php|www\.semrush\.com\/info\/|www\.semrush\.com\/search\.php|www\.stumbleupon\.com\/url|wikipedia.org\/wiki\/Special:Search).)*$/i ) && anchorLink != "" && all.indexOf(anchorLink) == -1 && anchorText != "" && anchors[i].className != "gb_b" ) { all.push(anchorLink); listing += anchorLink + "\n"; anchorTexts += anchorText + "\n"; linkAnchor = anchorLink.replace(",", "%2C") + ", " + anchorText.replace(",", ""); linksAnchors += linkAnchor + "\n"; k = k + 1; if (anchorText === undefined) anchorText = anchors[i].innerText; str += "  “; str += “  “; str += “  “; str += “  “; str += “  \n”; } } str += “  Result Link Anchor Text ” + k + “ ” + anchors[i].href + “ ” + anchorText + “ Links  Anchors  All Data – CSV  “; str += tweetText; str += tweetScript; str += “  “;  let win = window.open(); win.document.write(str); win.document.close(); }, };`