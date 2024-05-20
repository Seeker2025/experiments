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

class Storage{
  constructor([...item]){
    this.item = [...item];
  }
  getItems() {
    return this.item;
  }
  addItem(newItem) {
    this.item.push(newItem);
  }
  removeItem(itemToRemove) {

    if (!(this.item.findIndex===-1)) {
      this.item.splice((this.item.findIndex((itm, idx) => itm === itemToRemove)), 1);
    }
  }
}
const newSomeArr = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(newSomeArr);
// console.log(newSomeArr.getItems());
newSomeArr.addItem('wwwww');
console.log(newSomeArr.item);
newSomeArr.removeItem("Nanitoids");
console.log(newSomeArr.item);

// const newArr = ["Nanitoids", "Prolonger", "Antigravitator"];
// const oneLine = newArr.findIndex((itm, idx) =>itm === "Prolonger");
// console.log(oneLine);



// Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
 






















