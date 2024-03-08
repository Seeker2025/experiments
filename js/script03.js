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

// console.log(Boolean("")); //false
// console.log(Boolean(" ")); //true

//Задача. Находим в Массиве Sarah и перезаписваем на Rebecca
// for (let item of isDearFriends) {
//     console.log("Hi!");
//     if (item === "sarah") {
//         console.log("Sarah is here");
//         console.log(isDearFriends.indexOf(item));
//         let newGirl = isDearFriends.indexOf(item);
//         isDearFriends[newGirl] = "Rebecca";

//     }
// }
// console.log(isDearFriends);
//Таже задача. Решение лучше. Находим и заменяем через splice "sarah" на "Mary"
// for (let item of isDearFriends) {
//     if (item === "sarah") {
//         console.log("Hi!");
//         isDearFriends.splice(2, 1, "Mary");
//     }
// }
// console.log(isDearFriends);

//Задача. Принимаем два числа как строку. Преобразуем в массив. Преобразуем в числа и
//перемножаем.Получаем площадь
// let isStrTwoNum = "2 5";
// console.log(isStrTwoNum);
// console.log(typeof isStrTwoNum);
// let isNewNum = isStrTwoNum.split(" ");
// console.log(typeof isNewNum);
// console.log(Array.isArray(isNewNum));
// console.log(isNewNum);

// let newArrWithNumber = [];
// for (let itm of isNewNum) {
//     newArrWithNumber.push(Number(itm));
//     // console.log(newNumber);
//     // console.log(typeof newNumber);
// }
// let isSquare = newArrWithNumber[0] * newArrWithNumber[1]
// console.log(isSquare);

//Задача. Вывести в консоль фрукты и их номера
// let isManyFruit = ["Apple", "Orange", "Pear"];
// for (let itm of isManyFruit) {
// console.log(itm);
// console.log(isManyFruit.indexOf(itm));
// console.log(`Это номер элемента: ${isManyFruit.indexOf(itm)} А вот и сам фрукт: ${itm}`);
// }



let newArrFryit = ["Orange", "Cherry", "Apple", "Pear", "Cranberries", "strawberry"];

// console.log(0 % 2);//0
// console.log(1 % 2);//1 // !!!
// console.log(2 % 2);//0
// console.log(3 % 2);//1
// console.log(4 % 2);//0
// console.log(5 % 2);//1

//Находим фрукты с нечетным индексом и создаём из них новый массив
let arrFruitOdd = [];
let newLengthFruit;
for(let itm of newArrFryit){
    // console.log(newArrFryit.indexOf(itm));
    if (newArrFryit.indexOf(itm) % 2 == 1) {
        console.log(`${newArrFryit.indexOf(itm)} ${itm}`);
        newLengthFruit = arrFruitOdd.push(itm);
    };
  
}
console.log(arrFruitOdd);
console.log(newLengthFruit);//push метод возвращает длину нового массива


