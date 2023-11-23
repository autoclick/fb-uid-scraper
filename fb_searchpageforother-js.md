---
title: "Fb_searchPageForOther.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)``import { showLoading } from “./helpers/utils.js”;  export default { icon: ‘‘, name: { en: “Facebook – View your friend’s liked page”, vi: “Facebook – Xem các trang bạn bè thích”, }, description: { en: “Know about your friends’s linked page on facebook”, vi: “Biết bạn bè của bạn đang thích các trang nào trên facebook”, },  onClickExtension: async () => { let url = prompt(“Nhập link facebook bạn bè (hoặc của bạn): “); if (url == null) return;  let { setLoadingText, closeLoading } = showLoading(“Đang chuẩn bị…”); try { let { getUidFromUrl, getYourUserId, getFbdtsg, searchAllPageForOther } = UsefulScriptGlobalPageContext.Facebook;  setLoadingText(“Đang lấy uid, token…”); let other_uid = await getUidFromUrl(url); let uid = await getYourUserId(); let dtsg = await getFbdtsg();  setLoadingText(“Đang tải danh sách page…”); let allPages = await searchAllPageForOther( other_uid, uid, dtsg, (pages, all) => { setLoadingText( `Đang tải danh sách page… Tải được ${all.length} page.` ); } ); console.log(allPages); } catch (e) { alert(“ERROR: ” + e); } finally { closeLoading(); } }, };``
