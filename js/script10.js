// 'use strict'
//// Methods

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs']},
  { id: '001', likes: 2, tags: ['html', 'css']},
  { id: '002', likes: 17, tags: ['html', 'css', 'nodejs']},
  { id: '003', likes: 8, tags: ['css', 'react']},
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react']},
];

const newMetArr = tweets.flatMap(t => t.tags);
// console.log(newMetArr);
//// ['js', 'nodejs', 'html', 'css', 'html', 'css',
//// 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']

const arrJS = ['js', 'js', 'html', 'css', 'nodejs',];
const stats = arrJS.reduce((acc, tag) =>{
  // console.log(acc);
  return {
     ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  }
   
},
    {},
);
// console.log(stats); ////{js: 2, html: 1, css: 1, nodejs: 1}

// const isObj01 = {};
// const tag = 'js';

// isObj01[tag] = 1;
// isObj01[tag] = isObj01[tag] + 1;

// console.log(isObj01);


// ////вычисляемые свойства
// const newObj = {
//   name: 'Masha',
//   girl: 'Sarah',
//   boy:  'Jeff',
// };

// let a = 'name';

// console.log(newObj);
// console.log(newObj.name);         //Masha
// console.log(newObj[a]);           //Masha
// console.log(Boolean(newObj[a]));  // true
// ////Если такого ключа в объекте нет, то возвращается undefined
// console.log(Boolean(newObj[b]));  // underfined

const user = {
  name: 'Mango',
  location: {
    city: 'Lviv',
  },
};
if (user && user.location && user.location.city) {
  // console.log(user.location.city);
}
////Проверка необязательного свойства. Если такого свойства нет,
////то вернёт undefined. Обращение к свойству которого нет выбьет
////красную ошибку
if (user?.location?.city) {
  // console.log(user.location.city);
}
// console.log(user?.location?.city);

////Вызываем функцию и смотрим this в глобальном контексте.
//// Получаем undefined
function toFun() {
  console.log(this);
}
// toFun(); ////undefined.

 const newObjOneMore = {
  name: 'Masha',
  girl: 'Sarah',
  boy:  'Jeff',
};
//////Добавляем функцию в объект и вызываем в контексте этого объекта. 
newObjOneMore.funNew = toFun;
// newObjOneMore.funNew();
// const toArrowFun = () => {
//   console.log(this);
// }
// toArrowFun();
//////Добавляем функцию в объект и вызываем в контексте этого объекта.
// newObjOneMore.toArrow = toArrowFun;
// newObjOneMore.toArrow();

const isArrTml = ['Sarah', 'Pete', 'Rebecca', 'Pete', 'Sarah'];
const newRedArr = isArrTml.reduce((accum, itm) => {
  // console.log(itm);
  // console.log(accum);
  return {
    ...accum,
    [itm]: accum[itm] ? accum[itm] += 1 : 1,
  }
 }, {})
// console.log(newRedArr);
 
const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Mango';
// console.log(dog);
//////Является ли объект animal прототипом для dog
// console.log(animal.isPrototypeOf(dog));  ///// true
/////Если в dog собственное свойство name
// console.log(dog.hasOwnProperty('name')); ///// true
// console.log(dog.name); //// Mango
/////Если в dog собственное свойство legs
// console.log(dog.hasOwnProperty('legs')); ///// false
// console.log(dog.legs); //// 4


////// Методы функций
const changeColor = function (color) {
  console.log('changeColor -> this', this);
  this.color = color;
};
const hat = {
  color: 'back',
};
const sweater = {
  color: 'green',
};
//////Вызываем функцию changeColor  в контексте объекта hat
// changeColor.call(hat, 'orange');
// console.log(hat);
//////Вызываем функцию changeColor  в контексте объекта sweater
// changeColor.call(sweater, 'blue');
// console.log(sweater);

const changeColor02 = function (color) {
  console.log('changeColor -> this', this);
  this.color = color;
};
//////bind делает копию функции с привязанным контекстом объекта
const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);
// changeHatColor('yellow');
// console.log(hat);
// changeSweaterColor('red');
// console.log(sweater);

const user02 = {
  tag: 'Mango',
  showTag() {
    console.log('showTag -> this', this);
    console.log('showTag -> this.tag', this.tag);
  },
};
//////Здесь вызов метода в контексте объекта user02. Видим объект в this
// user02.showTag();
const outerShowTag = user02.showTag;
////// Здесь потеря контекста. Видим красную ошибку
// outerShowTag();

class forStudy {
  constructor(myName, people, price) {
    this.myName = myName;
    this.people = people;
    this.price = price;
   }
}

const oneRef = new forStudy('Pete', 'manager', '2K');
// console.log(oneRef);
const twoRef = new forStudy('Sarah', 'director', '5K');
// console.log(twoRef);
const threeRef = new forStudy('Jeff', 'owner', '10K');
// console.log(threeRef);

///// MОДУЛЬ 5. Задача 10/20

//Напиши класс Storage, который будет создавать объекты для управления складом товаров. Класс ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.
//Объяви следующие методы класса:
//getItems() - возвращает массив текущих товаров в свойстве items объекта который
//вызывает этот метод.
//addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в
//свойстве items объекта который вызывает этот метод.
//removeItem(itemToRemove) - принимает товар itemToRemove и удаляет его из массива
//товаров в свойстве items объекта который вызывает этот метод.
//Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той
//последовательности, в которой твой код будут проверять тесты.Пожалуйста ничего
//там не меняй.
class Storage{
  constructor([...items]){
    this.items = [...items];
  }
  getItems() {
    return this.items;
  }
  addItem(newItem) {
    this.items.push(newItem);
  }
  removeItem(itemToRemove) {
    if (this.items.findIndex!==-1) {
      this.items.splice((this.items.findIndex((itm, idx) => itm === itemToRemove)), 1);
    }
  }
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); //// ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
// console.log(storage.getItems()); //// ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
// console.log(storage.getItems()); //// ["Nanitoids", "Antigravitator", "Droid"]

///// MОДУЛЬ 5. Задача 11/20
////Напиши класс StringBuilder, который принимает один параметр
////initialValue - произвольную строку, которая записывается на создаваемый объект
////в свойство value.
////Объяви следующие методы класса:
////getValue() - возвращает текущее значение свойства value.
////padEnd(str) - получает параметр str (строку) и добавляет её в конец значения
////свойства value объекта который вызывает этот метод.
////padStart(str) - получает параметр str (строку) и добавляет её в начало значения
////свойства value объекта который вызывает этот метод.
////padBoth(str) - получает параметр str (строку) и добавляет её в начало и в конец
////значения свойства value объекта который вызывает этот метод.
class StringBuilder {
  constructor(value) {
    this.value = value;
  }
  getValue() {
    return this.value;
  }
  padEnd(str) {
    this.value += str;
  }
  padStart(str) {
   this.value = str + this.value;
  }
  padBoth(str) {
    this.value = str + this.value + str;
  }
}
const builder = new StringBuilder(".");
// console.log(builder.getValue()); ////// "."
builder.padStart("^");
// console.log(builder.getValue()); ////// "^."
builder.padEnd("^");
// console.log(builder.getValue()); ////// "^.^"
builder.padBoth("=");
// console.log(builder.getValue()); ////// "=^.^="

//////exp
// const arrNum = [2, 3, 4];
// let num = 0;
// for (let i = 0; i < 3; i += 1){
//   // console.log(arrNum[i]);
//   // console.log(i);
//   num += arrNum[i];
// }
// console.log(num);
// const na = NaN+2;
// console.log(na);

///// MОДУЛЬ 5. Задача 13/20
class Storage02 {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.items = this.items.filter(item => item !== itemToRemove);
  }
}


const storage02 = new Storage02(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage02.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage02.addItem("Droid");
// console.log(storage02.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage02.removeItem("Prolonger");
// console.log(storage02.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

//////Используем filter для удаления элемента из массива
// const arr = ["Nanitoids", "Prolonger", "Antigravitator", "Droid"];
// console.log(arr);
// const value = "Prolonger";
// const myMood = arr.filter(item => value !== item);
// console.log(myMood);


















 






















