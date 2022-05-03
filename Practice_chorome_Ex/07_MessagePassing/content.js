(function () {
  "use strict";

  var links = document.getElementsByTagName("a");
  // alert(links.length);
  chrome.runtime.sendMessage({ count: links.length }, () => {
    console.log("message sent");
  });
})();
