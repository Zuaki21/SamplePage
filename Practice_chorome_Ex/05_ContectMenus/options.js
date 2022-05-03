"use strict";

document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get(
    {
      color: "red"//デフォルト値
    },
    (item) => {
      document.getElementById("colors").value = item.color;
    }
  );
});

document.querySelector("button").addEventListener("click", () => {
  var color = document.getElementById("colors").value;
  chrome.storage.sync.set(
    {
      color: color,
    },
    () => {
      console.log("saved: " + color);
    }
  );
});

// document.getElementById("colors").addEventListener("change", function () {
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor = "' + this.value + '"', //ただの文字列
//   });
// });
