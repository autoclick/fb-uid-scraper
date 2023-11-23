---
title: "Jsonformatter.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: "https://jsonformatter.org/img/favicon.png", name: { en: "JSON formatter", vi: "JSON formatter", }, description: {  en: "Open web tool for beautify JSON in new tab", en: "Open JSON beauty tool in new tab",  },  onClickExtension: () => window.open("https://jsonformatter.org/"), };  async function backup() {  // try { // let url = "https://jsonformatter.org"; // let strObj = prompt("Enter object json want to beautify:", ""); if (strObj != null) { // let [err, obj] = strObjToObject(strObj); // if (err) throw err; // alert(obj); // await setLocalStorage(url, "index", JSON.stringify(obj)); // window.open(url); // } // catch (e) { /  / alert("Error: " + e);  } // ============================= // https://stackoverflow.com/a/32357610/11898496 /  / var win = window.open("https://jsonformatter.org"); // win.focus(); // win.addEventListener("load", () => { // win.localStorage.setItem("index", "{'abc':1}"); / / win.alert("yep");  // }); }`
