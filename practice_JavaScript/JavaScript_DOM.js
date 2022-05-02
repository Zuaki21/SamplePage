"use strict";

{
  function update() {
    // document.querySelector('h1').textContent = 'Changed!';
    // document.querySelector('#target').textContent = 'Changed!';
    document.getElementById("target").textContent = "Changed!";//特殊なメソッド
    // document.querySelectorAll('p')[2].textContent = 'こんばんわ。こんばんわ。こんばんわ。';
    document.querySelectorAll('p').forEach((p,index) => { p.textContent = `${index}番目のpです`;
});
  }

  setTimeout(update, 1000);
}
