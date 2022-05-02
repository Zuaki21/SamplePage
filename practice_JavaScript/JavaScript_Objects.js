"use strict";

// {
//   const scores = [80, 90, 40, 70];
//   scores.push(60, 50);
//   scores.shift();
//   // 90, 40, 70, 60, 50

//   scores.splice(1, 2);
//   scores.splice(1,0,30,80)
//   for (let i = 0; i < scores.length; i++) {
//     console.log(`Score ${i}: ${scores[i]}`);
//   }
// }
// {
//   const otherScores = [10, 20];
//   const scores = [80, 90, 40, 70, ...otherScores];

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(...otherScores);
// //sum(10,20);

// const [a, b, c, d] = scores;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// const [e, f, ...others] = scores;
// console.log(e);
// console.log(f);
// console.log(others);

// let x;
// let y;
// [x, y] = [y, x];
// 値の交換
//   scores.forEach((score, index) => {
//     console.log(`Score: ${score} Index ${index}`);
//   });
//   const prices = [180, 190, 200];
//   const updatedPrices = prices.map(price => price + 20);
//   console.log(updatedPrices);
// }
// {
//   const numbers = [1, 4, 7, 8, 10];
//   const evenNumbers = numbers.filter(numbers => {
//     if (numbers % 2 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   const evenNumbers = numbers.filter((number) => number % 2 === 0);
//   console.log(evenNumbers);
//   const point = {
//     x: 100,
//     y: 180,
//   };
//   console.log(point['y']);
//   point.x = 120;
//   console.log(point.x);
//   point.z = 30;
//   delete point.y;
//   console.log(point);
// }

// {
//   const otherProps = {
//     r: 4,
//     color: "red",
//   };

//   const point = {
//     x: 100,
//     y: 180,
//     ...otherProps,//構文
//   };
//   // console.log(point);

//   const { x, r, ...others } = point;
//   console.log(x);
//   console.log(r);
//   console.log(others);
// }

// {
//   const point = {
//     x: 100,
//     y: 180,
//   };
//   const keys = Object.keys(point); //pointの全てのキーを取得できる
//   keys.forEach((key) => {
//     console.log(`Key ${key} Value:${point[key]}`);
//   });
//   const points = [
//     { x: 30, y: 20 },
//     { x: 10, y: 50 },
//     { x: 40, y: 40 },
//   ];
//   console.log(points[1].y)
// }

// {//配列のコピー方法
//   let x = [1,2];
//   let y = [...x];
//   x[0] = 5;
//   console(x);//5
//   console(y);//1
// }

// console.log(Math.floor(Math.random()*10));
// const d = new Date(2019,10);
// d.setHours(10, 20, 30)
// d.setDate(32);
// console.log(d);

// alert("hello");
// const answer = confirm("hello");
// console.log(answer);

// let i = 0;
// function showTime() {
//   console.log(new Date());
//   i++
//   if (i > 2) {
//     clearInterval(intervalID);
//   }
// }
// const intervalID=setInterval(showTime, 1000);
//setTimeoutでも似たようにできる

// 例外処理
// const name = 4;
// try {
// console.log(name.toUpperCase());
// } catch (e) {
//   console.log(e);
// }

// {
//   const posts = [
//     {
//       text: "JavaScriptの勉強中",
//       likeCount: 0,
//       show() {
//         console.log(`${this.text} - ${this.likeCount}いいね`);
//       },
//     },
//     {
//       text: "プログラミン楽しい",
//       likeCount: 0,
//     },
//   ];

//   // show(posts[0]);
//   posts[0].show();
// }

class post {
  constructor(text) {
    this.text = text;
    this.likeCount = 0;
  }
  show() {
    console.log(`${this.text} - ${this.likeCount}いいね`);
  }
  like() {
    this.likeCount++;
  }
  // 静的メソッド
  static showInfo() {
    console.log(`"postclass version 1.0`)
  }
}
const postA = new post("Hello");
postA.like();
postA.show();