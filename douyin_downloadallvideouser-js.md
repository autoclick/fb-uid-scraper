---
title: "Douyin_downloadAllVideoUser.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: "https://www.douyin.com/favicon.ico", name: { en: "Douyin – Download all user videos", vi: "Douyin – Download all user videos",  }, description: {  en: "Download all videos in douyin user profile.", en: "Download all videos in douyin user profile.",  },  whiteList: ["https://www.douyin.com/user/*"],  https://github.com/diepvantien/douyin-dowload-all-video onClick: () => { alert("Open console (F12) to see the progress of the video download."); var getid = async function(sec_user_id, max_cursor) { var res = await fetch( "https://www.douyin.com/aweme/v1/web/aweme/post/?device_platform=webapp&aid=6383&channel=channel_pc_web&sec_user_id=" + sec_user_id + "&max_cursor=" + max_cursor, { headers: { accept: "application/json, text/plain, */*", " accept-language": "en",  "sec-ch-ua  ": '"No? A_Brand"; v="8", "Chromium"; v="108", "Microsoft Edge"; v="108"', "sec-ch-ua-mobile": "?0", "sec-ch-ua-platform": '"Windows"', "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-origin", }, referrer: "https://www.douyin.com/user/MS4wLjABAAAA5A-hCBCTdv102baOvaoZqg7nCIW_Bn_YBA0Aiz9uYPY", referrerPolicy: "strict-origin-when-cross-origin",  body: null,  method: "GET", mode: "cors", credentials: "include",  } ); try { res = await res.json(); } catch (e) {  res = await getid(sec_user_id, max_cursor);  } return res; };  var saveToFile = function (text) { var blob = new Blob([text], { type: "text/plain" }); var a = document.createElement("a");  a.href = window. URL.createObjectURL(blob); a.download = "douyin-video-links.txt"; a.click(); };  var run = async function() { var result = []; var hasMore = 1;  var sec_user_id = location.pathname.replace("/user/", ""); var max_cursor = 0;  console.log('Preparing to download video'' + sec_user_id + '" ...'); while (hasMore == 1) { var moredata = await getid(sec_user_id, max_cursor); hasMore = moredata["has_more"]; max_cursor = moredata["max_cursor"];  for ( var i in moredata["aweme_list"]) { if ( moredata["aweme_list"][i]["video"]["play_addr"][ "url_list" ][0].startsWith("https") result.push (  moredata["aweme_list"][i]["video"]["play_addr"][ " url_ list"][0] ); else result.push( moredata["aweme_list"][i]["video"]["play_addr"][ "url_list" ][0].replace("http", " https") ); console.clear(); console.log("Number of videos: " + result.length); } } saveToFile(result.join("\n")); alert( "Link videos will be saved to .txt file, add this file to idm for batch downloading." ); }; run(); }, };`