'use strict'
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


const arrPeace = [ 'CSS', 'html', 'CSS', 'React', 'html', 'CSS'];
console.log(arrPeace);

const arrNewVenus = arrPeace.reduce((accum, itm) => {
  console.log(accum);
  return {
    ...accum,
    [itm]: accum[itm] ? accum[itm]+= 1 : 1,
  }
  
}, {})

console.log(arrNewVenus);


