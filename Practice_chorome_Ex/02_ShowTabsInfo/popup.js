"use strict"

chrome.tabs.query({active:true, lastFocusedWindow:true}, function (tabs) {
  var i;
  var results = document.getElementById("results");
  var titles = [];
  for (i = 0; i < tabs.length; i++){
    titles.push(tabs[i].title)
    // console.log(tabs[i].title);
  }
  results.value = titles.join("\n");
  results.onselect();
});