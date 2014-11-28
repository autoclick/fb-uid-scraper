
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request._method == "getHTML")
        sendResponse({
            _data: document.getElementById('browse_result_area').outerHTML,
            _fullHtml: document.body.outerHTML
        });
  });