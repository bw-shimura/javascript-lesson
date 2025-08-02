//基礎問題
//Q1変数
let nickname ="しむはる";
let age ="22歳";

console.log ("私のニックネームは"+nickname+"です。"+"年齢は"+age+"です。");

//Q2配列
let languages =["JavaScript","PHP","Ruby","Python","Go"];
let message =`私の好きな言語は ${languages[0]} です。次は ${languages[3]} を勉強してみたいです。`;
console.log(message);

//Q3オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

//Q4配列×オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]); 

//Q5四則演算 割り算/ 
console.log((playerList[0].age + playerList[1].age + playerList[2].age)/3);

//Q6関数
//Helloとコンソールに出力する関数sayHelloを定義
function sayHello(){
 console.log ('Hello');
}

sayHello();

//無名関数 function()
let sayWorld = function(){
  console.log('World');
}

sayWorld();

//Q7メソッド
user.birthday = '2000-09-27';

user.sayHello = function(){
  console.log ('Hello!');
}

user.sayHello();

//Q8引数

//和
let calc = {};
calc.add = function(x,y){
  console.log(x + y);
}
calc.add(3,4);

//差
calc.subtract = function(x,y){
  console.log(x - y);
}
calc.subtract(15,5);

//積
calc.multiply = function(x,y){
  console.log(x * y);
}
calc.multiply(7,7);

//商
calc.divide = function(x,y){
  console.log(x / y);
}
calc.divide(10,2);

//Q9返り値
function remainder(x,y){
  return x % y;
}
let result = remainder(5,3);

console.log('5 を 3 で割った余りは ' + result + ' です。');

//Q10スコープ

//変数Xは関数fooの中で定義されているため、スコープ外からは参照できないため。

//※スコープ：変数が使える（参照できる）有効な範囲のこと

//応用問題

//Q1標準組み込みオブジェクト
let random = Math.floor(Math.random() * 10);
console.log('random => ', random);


//Q2-1 コールバック関数
setTimeout (function(){
  console.log('Hello World!');
},3000);

//Q2-2 コールバック関数
function printName(firstName, formatter) {
  console.log(formatter(firstName));
}

const addIntro = (name) => '私の名前は' + name + 'です。';

printName('志村',addIntro);

//Q3 if
let num =3
if (num > 0){
  console.log('num is greater than 0');
} else if (num < 0){
  console.log('num is less than 0');
}else if (num === 0){
  console.log('num is 0');
}

//Q4 for
let numbers = [];

for (let number =0; number < 100; number++)
  numbers.push(number);

console.log(numbers);

//Q5 for×if
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let item of mixed) {
  if (typeof item === 'number') {
    if (item % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not number');
  }
}