"use strict";
console.log("Hello World!" + "from js!"); //コメントアウト
//定数
const price = 10;
console.log(price);
//変数
let score = 5;
console.log(score);
score = 8;
console.log(score);

console.log(typeof "hello");
console.log(typeof true);

console.log(parseInt("5", 10) + 3);
//テンプレートリテラル

let hp = 100;

function showAD(message = "AD") {
  console.log('------');
  console.log(`-- ${message} --`);
  console.log('------');
}
showAD();
showAD("Hi");

function sum(a, b, c) {
  // console.log(a + b + c);
  return a + b + c;
}

sum(1,2,3);

const total = sum(1, 2, 3) + sum(1, 2, 3);
console.log(`total is ${total}`);

const func1 = function (a, b, c) {
  return a + b + c;
};
console.log(func1(1, 2, 3) + func1(1, 2, 3));

const func2 = (a,b,c) => a + b + c;
console.log(func2(1, 2, 3) + func2(1, 2, 3));

const func3 = a => a + 3;
console.log(func3(4))