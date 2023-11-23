---
title: "Ggdrive_generateDirectLink.Js"
date: "2023-11-23"
categories: 
  - "useful-script-en"
---

how to add bookmarklet in chrome  
![](https://camo.githubusercontent.com/5f21e427a7d3ee887313a4f9b1ab033e6462db47ca299bf3f7e2d81a0ce854bd/68747470733a2f2f696d672e7765626e6f74732e636f6d2f323031392f30342f447261672d616e642d44726f702d4c696e6b732d696e2d4368726f6d652e706e67)`import { getCurrentTab } from “./helpers/utils.js”; import { shared as ggdrive_downloadVideo } from “./ggdrive_downloadVideo.js”;  export default { icon: “https://drive.google.com/favicon.ico”, name: { en: “Google drive – generate direct link”, vi: “Google drive – tạo link tải ngay”, }, description: { en: “Generate a direct download link to files stored in Google Drive. A direct link will immediately start downloading the file.”, vi: “Tạo đường link direct cho file trên google drive. Bấm vào đường link sẽ tải file trực tiếp thay vì mở trang xem trước file.”, },  onClickExtension: async function () { try { let tab = await getCurrentTab(); let url = prompt(“Nhập link google drive: “, tab.url); if (url == null) return;  let directLink = shared.generateDirectLinkFromUrl(url); prompt(“Thành công! Link tải ngay của bạn: “, directLink); } catch (e) { alert(“ERROR: ” + e); } }, };  export const shared = { generateDirectLinkFromUrl: function (url) { let docId = ggdrive_downloadVideo.getDocIdFromUrl(url); if (!docId) throw Error(“Link không hợp lệ. Không tìm được docId trong link.”); return shared.generateDirectLink(docId); }, generateDirectLink: function (docId) { return “https://drive.google.com/uc?export=download&id=” + docId; }, };`
