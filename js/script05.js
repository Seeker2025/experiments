'use strict'
// Объекты

// const plane = "F15";

// let isObj = {
//     auto: "BMW",
//     // вычисляемые свойства
//     [plane]: "jet",
// };

// isObj.title = 'many';
// isObj.title = 'rename';
// isObj.model = 'X5';
// // синтаксис квадратных скобок
// isObj['newAuto'] = 'Audi';
// // вычисляемые свойства
// const nameTrain = 'trainNew';
// isObj[nameTrain] = 'diesel';
// console.log(isObj);

//Из двух массиво делаем объект
// let arrCar = ['Augi', 'Porsche', 'Subaru'];
// let arrPrice = ['300', '200', '100',];
// console.log(arrCar);
// let isObjNewCar = {};
// for(let i = 0; i < arrCar.length; i += 1){
//     console.log(i);
//     isObjNewCar[arrCar[i]] = arrPrice[i];
// }
// console.log(isObjNewCar);//{Augi: '300', Porsche: '200', Subaru: '100'}

// // вычисляемые свойства
// let twoGirl = 'goodGirl';
// let isObjName = {
//     nameOne: 'Sarah',
//     [twoGirl]: 'Rebecca',
// };
// const nameNewManName = 'Pete';
// isObjName[nameNewManName] = 'GoodMan';
// console.log(isObjName);

// const third = 'thirdFriut';

// let isBigFruit = {
//     firstFriut: 'Apple',
//     [third]: 'Plum',
// }
// const second = 'secondFruit';
// isBigFruit[second] = 'Orange';

// console.log(isBigFruit);

// for (let fruit in isBigFruit) {
//  //перебираем поля
//     console.log(isBigFruit[fruit]);
// //проверям собственные свойства объекта
//     console.log(isBigFruit.hasOwnProperty(fruit));
// }
               
// let arrObKey = Object.keys(isBigFruit);
// console.log(arrObKey);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// //получаем массив ключей
// const keys = Object.keys(book);
// //получаем массив значений
// const values = Object.values(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']
// console.log(values); // ['title', 'author', 'genres', 'rating']

// //вычисляем свойство
// const fruit03 = 'newNameOfapple';

// const isBigFruitKit = {
//     fruitOne: 'Apple',
//     fruirTwo: 'Pear',
//     fruitThree: 'Orange',
//     Plum: 'Plum',
//     [fruit03]: 'many',
// };
// //вычисляем свойство
// const fruit02 = 'nameNew';
// isBigFruitKit[fruit02] = 'raspberry';

// // //получаем массив ключей
// let arrKeys = Object.keys(isBigFruitKit);
// // //получаем массив значений
// let arrValues = Object.values(isBigFruitKit);
// console.log(arrKeys);
// console.log(arrValues);
// console.log(isBigFruitKit);

// const guess = 'newFruit';
// let isObj = {
//     fruitOne: 'Apple',
//     fruitTwo: 'Orange',
//     [guess]: 'Raspberry',
// };
// // //Добавили свойство с помощью квадратных скобок
// isObj['guess02'] = 'strawberry';
// console.log(isObj);
// // // //получаем массив ключей
// console.log(Object.keys(isObj));////['fruitOne', 'fruitTwo', 'newFruit', 'guess02']
// // // //получаем массив значений
// console.log(Object.values(isObj)); ////['Apple', 'Orange', 'Raspberry', 'strawberry']
// // // //массивы пары свойство-значение
// console.log(Object.entries(isObj));//// [Array(2), Array(2), Array(2), Array(2)]
// //////проверка на собственное свойство объекта
// // for (let key in isObj) {
// //     if (isObj.hasOwnProperty(key)) console.log(key);
// // }

// //проверяем свойство в объекте
// console.log('fruitOne' in isObj);  //true
// console.log('fruitTwo' in isObj);  //true
// console.log(isObj);

//// Модуль 3. Задача 12 / 32.
// Напиши функцию countProps(object), которая считает и возвращает количество
// собственных свойств объекта в параметре object
// function countProps(isObj) {
//   let propCount = 0;
//     for (let prp in isObj) if(isObj.hasOwnProperty(prp)) propCount += 1;
//   return propCount;
// }
// console.log(countProps(isObj));

//// Модуль 3. Задача 12 / 32.
//// Перебери объект apartment используя метод Object.keys() и цикл for...of. 
//// Запиши в переменную keys массив ключей собственных свойств объекта apartment,
//// и добавь в массив values все значения его свойств.
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// const values = [];
// let newArrLength;
// const keys = Object.keys(apartment);

// for (let value of keys) {
//     console.log(values);
//     console.log(apartment[value]);
//     newArrLength = values.push(apartment[value]);// push возвращает длину массива
// }
// console.log(values);
// console.log(newArrLength);

let arrCar = ['BMW', 'Audi', 'Lanos',];
let arrPrice = ['1000', '500', '100',];

let isObjWithCar = {};
////// из двух массивов делаем объект при помощи for
for (let i = 0; i < 3; i += 1) {
  //    console.log(arrCar[0]=arrPrice[0]);
    //  console.log(arrCar[i]);
  isObjWithCar[arrCar[i]]=arrPrice[i];
}
///// смотрим объект
console.log(isObjWithCar);////{BMW: '1000', Audi: '500', Lanos: '100'}

////// из двух массивов делаем объект при помощи for of
// for (let itm of arrCar) {
//    isObjWithCar[arrCar[arrCar.indexOf(itm)]]=arrPrice[arrCar.indexOf(itm)];
// }
///// смотрим объект
// console.log(isObjWithCar); ////{BMW: '1000', Audi: '500', Lanos: '100'}



