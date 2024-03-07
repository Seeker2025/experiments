'use strict'

let a = 6.5666;
let num = 7.8;
let str = '12px';
let que = '15.66px'
let peace = 'peacer';

//Методы для работы с числами

// console.log(Math.round(a));
//метод для работы с деньгами
console.log(Number(a.toFixed(3)));
// console.log(typeof a);

console.log(Math.round(a));

console.log(num);
console.log(Math.round(num));

if (false) {
    console.log('Mark');
}
else{
    console.log('Sergey');
}
let num02 = Number(Number.parseInt(str));
// num02 = Number(num02);
console.log(typeof num02);
console.log(num02);

let num03 = Number(Number.parseFloat(que));
// num02 = Number(num02);
console.log(typeof num03);
console.log(num03);

console.log(peace.toUpperCase());

let samsung = 'sAmSung';
console.log(samsung);
let newSum = samsung.toLowerCase();
console.log(newSum[0].toUpperCase()+newSum.slice(1));


