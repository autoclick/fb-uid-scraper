---
title: "Detect_zeroWidthCharacters.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`export default { icon: "https://lh3.googleusercontent.com/6i_qAB7dGRV44NxLp_JzemPr0ZoHp1e2JT0QxHbAteVJwsLQ-1HLaxmcUJ19F-wKITawVukn8ZbLri2FZamcxgBB=w128-h128-e365-rj-sc0x00ffffff", name: { en: "Detect Zero-Width Characters", vi: "Detect hidden characters (Zero-Width)", }, description: {  en: "Detects zero-width characters, highlights the characters and containing DOM element.\n\nClick for more detail.",  vi: "Detect hidden characters (zero-width) in text for browsers, e-mail clients, text editor,...\n\nClick for more details.", }, infoLink: "https://viblo.asia/p/ky-tu-zero-width-sat-thu-vo-hinh-nam-giua-doan-van-ban-thuan-vo-hai-L4x5xM7qKBM",  onDocumentIdle: detectZeroWidthCharacters, onClick: detectZeroWidthCharacters,  };  Code extracted from https://chrome.google.com/webstore/detail/detect-zero-width-charact/icibkhaehdofmcbfjfpppogioidkilib function detectZeroWidthCharacters() { let containerClass = "ufs-zero-width-characters-container"; let spanClass = "ufs-zero-width-character";  let intervalKey = "ufs_detect_zero_width_interval"; let existSpans = Array.from(document.querySelectorAll('.${spanClass}')); if (existSpans.length > 0) { if (intervalKey in window) { clearInterval(window[intervalKey]); } existSpans.forEach((el) => { el.remove(); });  Array.from(document.querySelectorAll('.${containerClass}')).forEach( (el) => { el.classList.remove (containerClass); } ); return; }  var unicodeCode; const zeroWidthCharacterCodes = [8203, 8204, 8205, 8288];  let elementsWithZWCC = []; const highlightCharacters = function (element) { const zeroWidthCharacters = String.fromCodePoint( ... zeroWidthCharacterCodes ); const regExp = new RegExp('([${zeroWidthCharacters}])', "g"); let textToAdd = ''; element.classList.add(containerClass); element.innerHTML = element.innerHTML .replace(textToAdd, "") .replace(regExp, "$1" + textToAdd); }; // From: https://jsfiddle.net/tim333/np874wae/13/ const checkElement = function (element) {  const text = textWithoutChildren(element); [... text].forEach(function(character) { unicodeCode = character.codePointAt(0); if ( zeroWidthCharacterCodes.includes( unicodeCode) &&; !elementsWithZWCC.includes(element) ) { elementsWithZWCC.push(element);  }  }); }; // From: https://stackoverflow.com/a/9340862/535363 const textWithoutChildren = function (element) { let child = element.firstChild, texts = []; while (child) { if (child.nodeType == 3) { texts.push(child.data); } child = child.nextSibling; } return texts.join(""); }; const checkPage = function() { const allElements = document.getElementsByTagName("*"); [... allElements].forEach(checkElement); elementsWithZWCC.forEach(function (element) { highlightCharacters(element); }); };  (async() => { // inject css UsefulScriptGlobalPageContext.DOM.injectCssFile( await UsefulScriptGlobalPageContext.Extension.getURL( "scripts  /detect_zeroWidthCharacters.css " ) );  Check Page checkPage (); window[intervalKey] = setInterval(checkPage, 5000);  Check page again when any input field is changed const inputs = document.querySelectorAll("input"); [... inputs].forEach(function(input) { input.addEventListener("change", checkPage); }); })(); }`