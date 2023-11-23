---
title: "Fb_getTokenBusinessStudio.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`import { showLoading } from “./helpers/utils.js”;  export default { icon: ``, name: { en: “Get fb token EAAc (studio)”, vi: “Lấy fb token EAAc (studio)”, }, description: { en: “Get facebook access token from business.facebook.com”, vi: “Lấy facebook access token từ trang business.facebook.com”, },  onClickExtension: function () { // old – FAILED // try { // const accessToken = // “EAA” + /(?<=EAA)(.*?)(?=\")/.exec(document.body.textContent)[0]; // prompt("Access Token của bạn:", accessToken); // } catch (e) { // alert("LỖI: " + e.message); // } const { closeLoading, setLoadingText } = showLoading( "Đang tìm access token..." ); fetch("https://business.facebook.com/creatorstudio/home", { method: "GET", credentials: "include", }) .then((res) => res.text()) .then(function (htmlText) { let regex = htmlText.match( /MediaManagerStatics”,\[\],{“accessToken”:”(.+?)”/ ); if (null !== regex) { let accesstoken = regex[1]; prompt(“Access Token: “, accesstoken); } else { alert(“Token not found”); } }) .catch(function (e) { alert(“ERROR:” + JSON.stringify(e)); }) .finally(() => { closeLoading(); }); }, };`
