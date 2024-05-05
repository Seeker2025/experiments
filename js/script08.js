'use strict'
//// Function, Methods

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
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const newPlanets = planets.map(planet =>planet.length);
// const planetsLengths = newPlanets;
// console.log(planetsLengths);


////пример из урока. МОДУЛЬ 4. Урок 1
// function each(arr, fn) {
//     const newArr = [];
//     for (const item of arr) {
//         newArr.push(fn(item));
//     }
//     return newArr;
// }
// const res = each([10, 20, 30, 40], (value) => {
//     return value * 3;
// });
// console.log(res);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

////МОДУЛЬ 4. Задача 20/48 FlatMap, Filter
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];

// const allGenres = books.flatMap(book => book.genres);
// console.log(allGenres);
// const uniqueGenres = allGenres.filter((element, index, array)=>array.indexOf(element)===index);
// console.log(uniqueGenres);

////МОДУЛЬ 4. Задача 21/48 Filter
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
// Change code below this line


const topRatedBooks = books.filter(books => books.rating >= MIN_RATING);
//Деструктуризируем
// const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);

// const booksByAuthor = books.filter(({author})=>author===AUTHOR);;
// console.log(topRatedBooks);
// console.log(booksByAuthor);

const bigArr = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39,
  }
];

////МОДУЛЬ 4. Задача 22/48 Filter
// const getUsersWithEyeColor = (users, color) =>
//   users.filter(({ eyeColor }) => eyeColor === color).map(({ name }) => name);
// const tinyArr = getUsersWithEyeColor(bigArr, "brown");
// console.log(tinyArr);

////МОДУЛЬ 4. Задача 23/48 Filter
// const getUsersWithAge = (users, minAge, maxAge) =>
//   users.filter(({ age }) => age > minAge && maxAge > age);
// console.log(getUsersWithAge(bigArr, 20, 30));

//каррирование
// function sumNewOne(numOne) {
//   return i=> {
//     return console.log(numOne + i);
//   }
// }
// sumNewOne(1)(2)

//пример из урока
// const item = {
//   title: 'apple',
//   qtv: 5,
//   price: 2,
// };
// function createProduct(obj, callback) {
//   const productItem = { ...item, id: Date.now()};
//   // console.log(productItem);
//   callback(productItem);
//  }
// function logTotalPrice(product) {
//   console.log(item.price*item.qtv);
// }
// function logProduct(product) {
//   console.log(product);
// }
// createProduct(item, logTotalPrice);
// createProduct(item, logProduct);

const newArrWithFriends = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]

////МОДУЛЬ 4. Задача 24/48 Filter. Includes. Map. Difficult!
// const getUsersWithFriend = (users, friendName) => {
// return users.filter(({ friends }) => friends.includes(friendName)).map(({name})=>name);
//  };

// console.log(getUsersWithFriend(newArrWithFriends, "Sharron Pace"));
// //// ['Moore Hensley', 'Sharlene Bush']
// console.log(getUsersWithFriend(newArrWithFriends, "Briana Decker"));
// //// ['Sharlene Bush', 'Sheree Anthony']
// console.log(getUsersWithFriend(newArrWithFriends, "Goldie Gentry"));
// //// ['Elma Head', 'Sheree Anthony']
// console.log(getUsersWithFriend(newArrWithFriends, "Adrian Cross"));
// //// []

// const planets = ["Земля", "Марс", "Венера", "Юпітер"];
// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase);

// let num022 = [1, 2, 3, 4];
// let num044 = num022.filter(num => num < 3);
// console.log(num044);   //[1, 3]

////filter
// const planets = ["Земля", "Марс", "Венера", "Юпітер"];
// let num045 = planets.filter(num => num==="Венера");
// console.log(num045);   //["Венера"]

////filter
// const planets = ["Briana Decker", "Sharron Pace"];
// let num045 = planets.filter(num => num==="Sharron Pace");
// console.log(num045);   //["Sharron Pace"]

////includes
// const planets = ["Земля", "Марс", "Венера", "Юпітер"];
// let num55 = planets.includes("Марс");
// console.log(num55);   //true

////МОДУЛЬ 4. Задача 25/48 Filter. indexOf
// const getFriends = (users) => {
// return users.flatMap( user => user.friends).filter((el, idx, arr)=>idx===arr.indexOf(el))
// };
// console.log(getFriends(newArrWithFriends));

////МОДУЛЬ 4. Задача 26/48 Filter.
// const getActiveUsers = (users) => {
//   return users.filter(({isActive})=>isActive).map(({name})=>name)};
// console.log(getActiveUsers(newArrWithFriends));

// const firstArray = [26, 94, 36, 18];
// const eachElementInFirstIsEven = firstArray.every((value) => value%2===0);
// console.log(eachElementInFirstIsEven);

// const isEveryUserActive = (users) => {
// return users.filter(value=>value.isActive===!false)
// };
// console.log(isEveryUserActive(newArrWithFriends));

// const newArrPov = [];
// console.log(newArrPov.length);
// if (newArrPov.length === 0) newArrPov.push(1);
// console.log(newArrPov);

//// создаём Callback
// const isArrNums = [1, 2, 3 ];
// function toMult(arr, toFoo) {
//   let total = 1;
//   for (let itm of arr) {
//     // console.log(itm);
//     total = toFoo(itm, total);
//   }
//   return total;
// }
// console.log(toMult(isArrNums, toFoo));
// console.log(toMult(isArrNums, toBoo));

// function toFoo(a, b) {
//   return a + b;
// }

// function toBoo(a, b) {
//   return a * b;
// }

//// Function Arrow
// const Bo = () => console.log('Hi!');
// Bo();

//// создаём Callback 02
// const isArrThird = [2, 3, 4, ];
// const toNewFoo = function (isArr, callback) {
//   let total = 1;
//   let newArrOfMap = isArr.map((itm, idx, arr) => {
//   // console.log(itm);
//   // console.log(idx);
//     // console.log(arr);
//     return total = callback(total, itm);
//   })
//   return newArrOfMap;
// }
// const newCallback = (a, b) => a + b;
// const newMultback = (a, b) => a * b;

// console.log(toNewFoo(isArrThird, newCallback));
// console.log(toNewFoo(isArrThird, newMultback));



