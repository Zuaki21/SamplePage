"use strict";

chrome.runtime.onInstalled.addListener(() => {
  var parent = chrome.contextMenus.create({
    id: "parent",
    title: "Choose Background Color",
  });
  chrome.contextMenus.create({
    id: "red",
    parentId: parent,
    title: "Red",
  });
  chrome.contextMenus.create({
    id: "blue",
    parentId: parent,
    title: "Blue",
  });
  chrome.contextMenus.create({
    id: "yellow",
    parentId: parent,
    title: "Yellow",
  });
});

chrome.contextMenus.onClicked.addListener((item) => {
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor = "' + item.menuItemId + '"', //ただの文字列
  });
});
