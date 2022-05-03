"use strict";

/*
{
  function update() {
    // document.querySelector('h1').textContent = 'Changed!';
    // document.querySelector('#target').textContent = 'Changed!';
    const targetNode = document.getElementById("target");
    targetNode.textContent = "Changed!"; //特殊なメソッド
    targetNode.title = "書き換えたぜ！"; 
    targetNode.style.color = "red";
    targetNode.style.backgroundColor = "skyblue";
    // document.querySelectorAll('p')[2].textContent = 'こんばんわ。こんばんわ。こんばんわ。';
    document.querySelectorAll("p").forEach((p, index) => {
      p.textContent = `${index}番目のpです`;
    });
  }
  //setTimeout(update, 1000);
  document.querySelector("button").addEventListener("click", update);
}
*/
{
  document.getElementById("FirstButton").addEventListener("click", () => {
    const targetNode = document.getElementById("target");
    // targetNode.className = "my-border my-color";//class属性は.classnameと書く

    // if (targetNode.classList.contains('my-color')) {
    //   targetNode.classList.remove("my-color");
    // } else {
    //   targetNode.classList.add("my-color") ;
    // }

    //targetNode.classList.toggle("my-color")
    // targetNode.textContent ="Dotinstall"
    targetNode.textContent = targetNode.dataset.translation;
  });
  document.querySelectorAll("button")[1].addEventListener("click", () => {
    const item2 = document.createElement("li");
    item2.textContent = "item 2";
    const ulNode = document.querySelector("ul");
    ulNode.appendChild(item2);
  });

  document.querySelectorAll("button")[2].addEventListener("click", () => {
    const item0 = document.querySelectorAll("li")[0];
    const copy = item0.cloneNode(true); //中身の要素もコピーするのtrue
    const ul = document.querySelectorAll("ul")[1];
    const item2 = document.querySelectorAll("ul")[1].querySelectorAll("li")[2];
    ul.insertBefore(copy, item2);
  });
  document.getElementById("DeleteButton").addEventListener("click", () => {
    const item1 = document.querySelectorAll("ul")[1].querySelectorAll("li")[1];
    // item1.remove();//これはブラウザによって使えない
    document.querySelectorAll("ul")[1].removeChild(item1);
  });
}

document.getElementById("WriteButton").addEventListener("click", () => {
  const li = document.createElement("li");
  const text = document.querySelector("input");
  li.textContent = text.value;
  document.getElementById("written").appendChild(li);
  text.value = "";
  text.focus();
});

document.getElementById("decideButton").addEventListener("click", () => {
  const li = document.createElement("li");
  const color = document.querySelector("select");
  if (color.selectedIndex > 0) {
    li.textContent = `${color.value} -${color.selectedIndex}番目`;
    document.getElementById("decideul").appendChild(li);
    color.selectedIndex = 0;
  }
});
document.getElementById("radioDecideButton").addEventListener("click", () => {
  const phones = document.querySelectorAll("label > input");
  let selectedPhone;
  phones.forEach((phone) => {
    if (phone.checked === true) {
      selectedPhone = phone.value;
    }
  });
  const li = document.createElement("li");
  li.textContent = selectedPhone;
  document.getElementById("radioUl").appendChild(li);
});

document.getElementById("checkDecideButton").addEventListener("click", () => {
  const boxes = document.querySelectorAll("[type='checkbox']");
  const selectedColors = [];
  boxes.forEach((box) => {
    if (box.checked === true) {
      selectedColors.push(box.value);
    }
  });
  const li = document.createElement("li");
  li.textContent = selectedColors.join(",");
  document.getElementById("checkUl").appendChild(li);
});
{
  const cMessage = document.getElementById("stateMessage");
  let movetime;
  document.getElementById("variableButton").addEventListener("dblclick", () => {
    cMessage.textContent = "DoubleClick!";
    clearTimeout(movetime);
    movetime = setTimeout(() => {
      cMessage.textContent = "押す前";
    }, 1000);
  });
  document.addEventListener("mousemove", (e) => {
    cMessage.textContent = `MoveCursor!(X:${e.clientX},Y:${e.clientY})`;
    clearTimeout(movetime);
    movetime = setTimeout(() => {
      cMessage.textContent = "押す前";
    }, 1000);
  });
  document.addEventListener("keydown", (e) => {
    cMessage.textContent = `KeyDown:${e.key}`;
    clearTimeout(movetime);
    movetime = setTimeout(() => {
      cMessage.textContent = "押す前";
    }, 1000);
  });
}

{
  let movetime;
  const fMessage = document.getElementById("formMessage");
  const fMessage2 = document.getElementById("formMessage2");
  const text = document.querySelector("textarea");

  text.addEventListener("focus", () => {
    fMessage.textContent = "focus";
  });
  text.addEventListener("blur", () => {
    fMessage.textContent = "blur";
  });
  text.addEventListener("input", (e) => {
    fMessage2.textContent = `input: ${text.value}`;
  });
  text.addEventListener("change", () => {
    fMessage2.textContent = "change";
  });
}
{
  const S_Message = document.getElementById("sMessage");
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    S_Message.textContent = "submit";
  });
}
{
  document.getElementById("spread").addEventListener("click", (e) => {
    if ((e.target.nodeName === "LI")) {
      e.target.classList.toggle("done");
    }
  });
}
