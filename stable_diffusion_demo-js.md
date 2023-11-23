---
title: "Stable_diffusion_demo.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: “https://stabilityai-stable-diffusion-1.hf.space/favicon.ico”, name: { en: “Stable Diffusion – Gradio”, vi: “Stable Diffusion – Gradio”, }, description: { en: “Stable Diffusion Demo on Gradio”, vi: “Trình tạo ảnh AI sử dụng modal Stable Diffusion”, },  onClickExtension: () => { let choice = prompt( “Enter your choice:\n” + ” 1: stable diffusion 1\n” + ” 2: stable diffusion 2.1\n” + ” 3: stable diffusion – image variations\n”, “2” );  if (choice == null) return;  if (choice == “1”) window.open(“https://stabilityai-stable-diffusion-1.hf.space/”); else if (choice == “2”) window.open(“https://stabilityai-stable-diffusion.hf.space/”); else if (choice == “3”) window.open( “https://lambdalabs-stable-diffusion-image-variation-54db9c0.hf.space/” ); else alert(“Invalid version”); }, };`
