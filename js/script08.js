'use strict'
//// Function

////Замыкание
// const makeSheff = function (name) {
//     const makeDish = function (dish) {
//         console.log(`${name} готовит ${dish}`);
//     };
//     return makeDish;
// };

// const mango = makeSheff('Mango');

// mango('Котлеты');
// mango('Пирожки');

// console.dir(mango);

// const poly = makeSheff('Poly');
 
// poly('Чай');
// poly('Омлет');

////явный возврат
// const addArrow = (a, b, c) => {
//     console.log(a, b, c);
//     return console.log(a + b + c);
// }
// addArrow(1, 2, 3);

////не явный возврат
// const addArrowTwo = (a, b, c) => a + b + c;
// console.log(addArrowTwo(2, 3, 4));

////У стрелочной функции нету arguments. Можно использовать rest(сбор)
// const addArrowThree = (...rest) => {
//     console.log(Array.isArray(rest));
//     console.log(rest);
//     // let newArr = rest.join('');
//     // let newArr02 = newArr.split('');
//     // console.log(newArr02);
//     // console.log(typeof(newArr));
// }
// addArrowThree(2, 3, 4);

////Не явный возврат. Возвращаем объект. Литерал объекта важно взять в круглые скобки
// const addArrowFouth = () => ({ a: 5, })
// console.log(addArrowFouth());

// const isRecipientAvailable = Math.random() > 0.5
// console.log(isRecipientAvailable);

////МОДУЛЬ 4. Задача 4/48
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//         for (let piz of this.pizzas) {
//             if (piz === pizzaName)
//                 return onSuccess(piz);
//        }
//         return onError(pizzaName);
//   },
// };
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }
// function onOrderError(pizzaName) {
//   return `Error! There is no pizza with a name ${pizzaName} in the assortment.`;
// }
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

////forEach
// const newArrApple = ['Apple', 'Plum', 'Orange',];
// newArrApple.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

////МОДУЛЬ 4. Задача 4/48
// const bigSalary = ['1k', '2k', '3k',];
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//     orderedItems.forEach(function callback(element, index, array) {
//         ////console.log(`${element} ${index} ${array}`);
//         totalPrice = totalPrice + Number.parseInt(element)
//     });
//   return totalPrice;
// }
// console.log(calculateTotalPrice(bigSalary));

//// Получаем целое число и десятичную дробь
// let a = Number.parseInt('2k');
// let b = Number.parseFloat('3.5k');
// console.log(typeof (a));            //number
// console.log(typeof (b));            //number
// console.log(a);                     //2
// console.log(b);                     //3.5

// //каррирование
// function getSum(n) {
//   return function (i) {
//     return i + n;
//   };
// }
// const one = getSum(10)(2);
// console.log(one);

////МОДУЛЬ 4. Задача 6/48
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   numbers.forEach((number, index) => {
//     // console.log(`${number} index ${index}`);
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4], 1));

////МОДУЛЬ 4. Задача 7/48
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//    firstArray.forEach((elm, inx) =>{
//     if (secondArray.includes(elm)) {
//       commonElements.push(elm);
//     }
//   })
//   return commonElements;
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

////МОДУЛЬ 4. Задача 13/48
////Из массива чисел numbers находим все чётные и добавляем к ним value.
////Исходный массива не мутируем. Создаём и возвращаем новый массив
// function changeEven(numbers, value) {
//   let numbersNew = [...numbers];
//   numbersNew.forEach((itm, index) => {
//     // console.log(`${itm} ${index}`);
//     if (itm % 2 === 0) {
//       itm = itm + value;
//       numbersNew.splice(index, 1, itm)
//       // console.log(index);
//     }
//   });
//   return numbersNew;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));         ////[1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));      ////[12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100));   ////[17, 124, 168, 31, 142]

////МОДУЛЬ 4. Задача 14/48
const planets = ["Earth", "Mars", "Venus", "Jupiter"];
const newPlanets = planets.map(planet =>planet.length);
const planetsLengths = newPlanets;
console.log(planetsLengths);





