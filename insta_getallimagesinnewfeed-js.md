---
title: "Insta_getAllImagesInNewFeed.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { name: { en: “Get all images in insta newfeed”, vi: “Tải về tất cả ảnh insta newfeed”, }, description: { en: “Get all images in newfeed instagram”, vi: “Tải về tất cả ảnh đang có trên newfeed instagram”, }, blackList: [], whiteList: [“https://*.instagram.com/*”],  onClick: async function () { const getAllImgTag = () => Array.from(document.querySelectorAll(“img[sizes*=px]”)) || []; const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));  // https://greasyfork.org/en/scripts/14755-instagram-reloaded function getBestImage(imgEl) { try { return imgEl.srcset.split(“w,”)[0].split(” “)[0]; } catch (e) { return imgEl.src; } }  const img_srcs = []; const done = []; const img_queue = getAllImgTag(); while (img_queue.length > 0) { const first = img_queue.shift(); first.scrollIntoView(); const src = getBestImage(first); img_srcs.push(src); console.log(src); done.push(first); const new_img = getAllImgTag().filter( (_) => done.indexOf(_) == -1 && img_queue.indexOf(_) == -1 ); img_queue.push(…new_img); await sleep(300); }  console.log(img_srcs); }, };`
