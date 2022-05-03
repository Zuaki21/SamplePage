"use strict";

//受け取るonMessage
chrome.runtime.onMessage.addListener((message, sender, callback) => {
  chrome.browserAction.setBadgeText({ text: message.count + ""});//文字列に直すために空文字を入れてる
});
