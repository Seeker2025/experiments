'use strict'
// Массивы

let isManyPeople = ["Mark", "Pete", "Sarah", "Bill", "Jeff"];
let isNumArr = [1, 2, 3, 4,]
let isString = "Get rid of sPaM emails. Our book in on sale!";

// console.log(isManyPeople.length);
// console.log(Array.isArray(isManyPeople));
// console.log(isString.split(" "));   //Cтроку преобразуем в массив
// console.log(isString.split(" ").length);   //Cтроку преобразуем в массив

// console.log(isManyPeople.slice());   //Создаём копию массива
// console.log(isManyPeople.slice(2));  //Удаляем два элемента из массива

// console.log(isString.split(" ").reverse().join(" "));  //строка - массив - развернули массив - строка
// console.log(isString.slice(1));  //slice работает для строки

// let isName = "Sarah";
// console.log(isName.length);
// console.log(isName[4]);
// console.log(isName.length-1);
// console.log(isName[isName.length - 1]);

// let isNew = isManyPeople.splice(1, 1, "Sergey");//С позиции один удаляем один элемент и добавляем "Sergey"
// console.log(isManyPeople);
// console.log(isNew);

// let newCreate = isManyPeople + isNumArr;
// console.log(newCreate);
// console.log(typeof newCreate);//сложили два массива и получили строку

// перебираем массив. Находим "Pete" и выводим в консоль "It's found!"
// for (let item of isManyPeople) {
//     console.log(isManyPeople.indexOf(item));
//     if (item === "Pete") console.log("It's found!");
//     else console.log("Go on");
    
// }

// console.log(isManyPeople.indexOf("Sar"));//Если в массиве это нету, то вернётся -1

let isArrEmpty = [];
let isDearFriends = ["mark", "pete", "sarah", "bill", "jeff"];
let isStrName = "Bill";

// for (const itm of isDearFriends) {
//     // console.log(isDearFriends.indexOf(itm));
//     console.log(itm[0].toUpperCase()+itm.slice(1, itm.length));
// }

// console.log(isStrName[0].toUpperCase()+isStrName.slice(1, isStrName.length));
// console.log(isStrName.length);
// console.log(isStrName.slice(0, isStrName.length));
// console.log(Array.isArray(isDearFriends));
// console.log(isDearFriends.length);
// console.log(isStrName.slice(0, 1));


// console.log(Boolean(isArrEmpty.length));//Преобразование к логическому типу

    // if(!isArrEmpty.length) console.log("Array is empty!");//Проверяем пустой массив или нет

console.log(Boolean("")); //false
console.log(Boolean(" ")); //true
   
