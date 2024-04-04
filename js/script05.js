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

//// Модуль 3. Задача 12 / 41.
// Напиши функцию countProps(object), которая считает и возвращает количество
// собственных свойств объекта в параметре object
// function countProps(isObj) {
//   let propCount = 0;
//     for (let prp in isObj) if(isObj.hasOwnProperty(prp)) propCount += 1;
//   return propCount;
// }
// console.log(countProps(isObj));

//// Модуль 3. Задача 13 / 41.
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

// let arrCar = ['BMW', 'Audi', 'Lanos',];
// let arrPrice = ['1000', '500', '100',];

// let isObjWithCar = {};
////// из двух массивов делаем объект при помощи for
// for (let i = 0; i < 3; i += 1) {
//   //    console.log(arrCar[0]=arrPrice[0]);
//     //  console.log(arrCar[i]);
//   isObjWithCar[arrCar[i]]=arrPrice[i];
// }
///// смотрим объект
// console.log(isObjWithCar);////{BMW: '1000', Audi: '500', Lanos: '100'}

////// из двух массивов делаем объект при помощи for of
// for (let itm of arrCar) {
//    isObjWithCar[arrCar[arrCar.indexOf(itm)]]=arrPrice[arrCar.indexOf(itm)];
// }
///// смотрим объект
// console.log(isObjWithCar); ////{BMW: '1000', Audi: '500', Lanos: '100'}

// Модуль 3. Задача 14 / 41.
// function countProps(object) {
//   //   let propCount = 0;
//   // console.log(object.Object.keys(obj));
//  propCount = Object.keys(object).length;

//   return propCount;

//   // return arr.length;
// }
// console.log(countProps({ name: "Mango", age: 2 }));

// Модуль 3. Задача 16 / 41. Сумма зарплат сотрудников
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   let arr = Object.values(salaries)
//   for (let col of arr) {
//     totalSalary += col;
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));//330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));//400

//// Модуль 3. Задача 17 / 41.
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// let hexColors = [];
// const rgbColors = [];
// for(let mas of colors){
//   hexColors.push(mas.hex);
//   rgbColors.push(mas.rgb);
//   }
// console.log(hexColors);
// console.log(rgbColors);

//// Модуль 3. Задача 18 / 41. функция ищет объект продукта с таким именем
// //(свойство name) в массиве products и возвращает его цену(свойство price).
// //Если продукт с таким названием не найден, функция должна возвращать null.
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
//   for (let itm of products) {
//     if (productName === itm.name)
//       return itm.price;
//   }
//       return null;
// }
// console.log(getProductPrice("Radar"));     //1300
// console.log(getProductPrice("Engine"));    //null

//// Модуль 3. Задача 19 / 41. *Difficult!
// Функция getAllPropValues(propName) принимает один параметр
// propName - имя(ключ) свойства.Функция должна вернуть массив всех значений
// свойства с таким именем из каждого объекта в массиве products.Если в объектах нет
// свойства с таким именем, функция должна вернуть пустой массив.
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
// let newArr = [];
// let new022 = [];
//   for (let itm of products) {
//     newArr = Object.keys(itm);
//       for (let itm02 of newArr) {
//         if (itm02 === propName) {
//         new022.push(itm[propName]);
//       }
//     }
//   }
//   return new022;
// }
// console.log(getAllPropValues("name"));     // ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")); // [4, 3, 7, 9]
// console.log(getAllPropValues("price"));    // [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")); // []

//// Модуль 3. Задача 20 / 41.
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   for (let itm of products) {
//     // console.log(itm);
//     if (productName === itm.name) {
//       return itm.price*itm.quantity;
//     }
//   }
//   return 0;
// }
// console.log(calculateTotalPrice("Blaster"));  //0
// console.log(calculateTotalPrice("Radar"));    //5200
// console.log(calculateTotalPrice("Droid"));    //2800
// console.log(calculateTotalPrice("Grip"));     //10800
// console.log(calculateTotalPrice("Scanner"));  //8100

////это объект который мы будем деструктуризировать
// const forecast = {
//   today: {
//     low: todayLow,
//     high: todayHigh,
//   },
//   tomorrow: {
//     low: tomorrowLow,
//     high: tomorrowHigh,
//   }
// };

////деструктуризируем объект в сигнатуре (подписи)
// function calculateMeanTemperature({ today:  {low: todayLow, high: todayHigh},
//   tomorrow: { low: tomorrowLow, high: tomorrowHigh } }) {
  
//// деструктуризируем объект в теле функции
// const{ today:  {low: todayLow, high: todayHigh},
  // tomorrow: {low: tomorrowLow, high: tomorrowHigh} } = forecast ;
  
  // const todayLow = forecast.today.low;
  // const todayHigh = forecast.today.high;
  // const tomorrowLow = forecast.tomorrow.low;
  // const tomorrowHigh = forecast.tomorrow.high;
  // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature(
//   { today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }));

//// Патерн "Объект параметров"
////Это объект
const book = {
  title: 'The Last Kingdom',
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  isPublic: true,
};
// function doStuffWithBook(book) {
//   console.log(book.title);
//   console.log(book.numberOfPages);
// }
//// Во время вызова функции передаём объект с нужными свойствами
// doStuffWithBook({
//   title: 'The Last Kingdom',
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

////деструктуризация в теле функции
// function doStuffWithBook(book) {
//   const { title, numberOfPages, downloads, rating, isPublic } = book;
//   console.log(book.title);
//   console.log(book.numberOfPages);
// }
// doStuffWithBook(book);

// //Деструктуризируем в сигнатуре(в подписи) функции
// function doStuffWithBook({
//   title,
//   numberOfPages,
//   downloads,
//   rating,
//   isPublic
// }) {
//   console.log(book.title);
//   console.log(book.numberOfPages);
// }
// doStuffWithBook(book);

// ////Модуль 3. Задача 30 / 41.
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";

// return({completed, category, priority, ...data})
// }
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// // { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// // { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

// ////Модуль 3. Задача 31 / 41.
////Функции addition() так, чтобы она принимала любое количество аргументов,
////считала и возвращала их сумму.

// function addition(...args) {
//   let num = 0;
  
//   for (let ar of args) {
//     num += ar;
//   }
//   console.log(Array.isArray(args)); //true
//   return num;
// }
// console.log(addition(1, 2, 3)); //6
// console.log(addition(2, 3, 4)); //9

// ////Модуль 3. Задача 32 / 41.
//// Операция rest. Сбор
// ///Функция addOverNum() считает сумму всех аргументов.
// /// считает сумму только тех аргументов, которые больше чем заданное число.
/// //Это число должно быть первым параметром функции.
// function addOverNum(num, ...args) {
//   let total = 0;
//   console.log(typeof (num));          ///number
//   console.log(Array.isArray(args));   ///true
//   for (const arg of args) {
//     if (arg >  num) {
//       total += arg;
//     }
//   }
//   return total;
// }
// console.log(addOverNum(50, 15, 27)); //0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); //71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); //51

// ////Модуль 3. Задача 33 / 41.
// //Функция findMatches() принимает произвольное количество аргументов.
// //Первым аргументом всегда будет массив чисел, а остальные аргументы будут
// //просто числами.
// //функция возвращает новый массив matches, в котором будут только те аргументы,
// //начиная со второго, которые есть в массиве первого аргумента.
// function findMatches([...arrOne], ...arg) {
//   const matches = []; // Don't change this line
//   // Change code above this line
//    for (let itm of arrOne) {
//     for (let num02 of arg) {
     
//       if (itm === num02) matches.push(itm);
//   }
//       }
//    return matches;
// //  console.log(Array.isArray(arg));
// //  console.log(Array.isArray(arrOne));
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));                  ////[1, 2]
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));         ////[17, 89, 2]
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));    ////[24, 9, 41]
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));                    ////[]

// ////Модуль 3. Задача 35 / 41. (Difficcult!)
// Метод updateBook(oldName, newName) изменяет название книги
// с oldName на newName в свойстве books.Используй indexOf() для того,
// чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     let arrBoo = [...this.books];         ////делаем комию массива
//     // let arrBoo = this.books.slice();
//     // arrBoo = this.books;
//     arrBoo.splice((arrBoo.indexOf(oldName)), 1, newName);
//     return arrBoo;
//  },
// };
// console.log(bookShelf.books.indexOf( "The guardian of dreams"));
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
//////["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// console.log(bookShelf.books);
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));
//////["Dune", "Haze", "The guardian of dreams"]

////// ////Модуль 3. Задача 39 / 41. Находим и удалем элемент из массива по индексу.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     let idx = this.potions.indexOf(potionName);
//     this.potions.splice(idx, 1);
//     // return idx;
//   },
// };
// console.log(atTheOldToad.potions.indexOf("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.potions);

////// ////Модуль 3. Задача 40 / 41. Находим и заменяем зелье в массиве
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//      let idx = this.potions.indexOf(oldName);
//      this.potions.splice(idx, 1, newName);
//   },
// };
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.potions);

////// ////Модуль 3. Задача 41 / 41.

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion({ name, price }) {
    // if (this.potions.includes({ name, price })) {
    //   // return `Error! Potion ${newPotion} is already in your inventory!`;
    //   // console.log('Hooray!');
    // }
    for (let poy of this.potions) {
    
      if (poy.name === name && poy.price === price) {
        return `Error! Potion ${ name, price } is already in your inventory!`;
      }
    }

    this.potions.push({ name, price });
    // console.log({ name, price });
    // console.log(this.potions.includes({ name, price }));
  },
  removePotion(potionName) {
    let idx;
    for (let poi of this.potions) {
      // const potionIndex = this.potions.indexOf(potionName);
      // return console.log(potionIndex);
      // if (potionIndex === -1) {
      //   return `Potion02 ${potionName} is not in inventory!`;
      // }
      // console.log(poi.name);
      // console.log(this.potions.indexOf(potionName));
      // console.log(this.potions.indexOf(poi));
      // if (potionName===poi.name) {
      //     console.log('Peace')
      //   idx = this.potions.indexOf(poi);
      //   console.log(idx);
      //   break;
      // }
  
    }
    // console.log(Boolean(idx));
    // if (idx||!0) console.log('Hooray!');
    // else console.log('fail!');
    
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// console.log(atTheOldToad.addPotion({ name: "Speed potion", price: 460 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.getPotions());
// atTheOldToad.removePotion("Stone skin");

// console.log(atTheOldToad.addPotion({ name: "Potion", price: 555 }));
// console.log(atTheOldToad.addPotion({ name: "Speed potion", price: 460 }));
// console.log(atTheOldToad.getPotions());

const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
const b = [...a];

console.log(a === b);           //false
console.log(a[0] === b[0]);     //true






