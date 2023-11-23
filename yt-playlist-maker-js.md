---
title: "Yt-Playlist-Maker.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`// https://gist.github.com/J2TEAM/d8380866bb28dfb8a7f1ab72059658b0  /* Developed by Juno_okyo */ (function (e, b) { function f(a, b) { var d = fetch, e = “sej=” + encodeURIComponent( JSON.stringify({ playlistEditEndpoint: { playlistId: a, actions: [ { addedVideoId: b, action: “ACTION_ADD_VIDEO”, }, ], }, clickTrackingParams: “juno_okyo_j2team_community”, commandMetadata: { webCommandMetadata: { url: “/service_ajax”, sendPost: !0, }, }, }) ) + “&session_token=”, f = encodeURIComponent; var c = /”XSRF_TOKEN”:”([^”]+)”/.exec(document.head.innerHTML); c = null !== c ? c[1] : !1; return d(“https://www.youtube.com/service_ajax?name=playlistEditEndpoint”, { method: “POST”, credentials: “same-origin”, headers: { “content-type”: “application/x-www-form-urlencoded”, }, body: e + f(c), }); }  function d() { var a = b.pop(); a = new URL(a).searchParams.get(“v”); f(e, a).then(function (a) { 0 < b.length && setTimeout(d, 500); }); } d(); })("YOUR_PLAYLIST_ID", "YOUR_VIDEO_URLS_IN_ARRAY");`
