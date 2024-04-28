'use strict'
//// Methods

const players = [
 {id: 'player-1', name:'Mango',timePlayed: 310, points: 59, online: false},
 {id: 'player-2', name:'Poly',timePlayed: 470, points: 92, online: true},
 {id: 'player-3', name:'Kiwi',timePlayed: 230, points: 48, online: true},
 {id: 'player-3', name:'Ajax',timePlayed: 150, points: 71, online: false},
 {id: 'player-3', name:'Chelsy',timePlayed: 80, points: 48, online: true},
];

//// Мар. Находим и заменяем все имена в объектах массива
// const newPeople = ['Pete', 'Sarah', 'Mark', 'Jeff', 'Bill'];
// const thePlayersSecond = players.map((value, index, arr) => {
//   // console.log(value);
//   // console.log(index);
//   // console.log(arr);
//   // console.log(value.name, index);
//   // return value.name = newPeople[index];
//   return {
//     ...value,
//     name: newPeople[index],
//   }
// })
// console.log(thePlayersSecond);


// Мар. Находим имя 'Poly' в объекте и заменяем
// const newPlayers = players.map((player, index, array) => {
//   if (player.name === 'Poly') {
//     return {
//       ...player,
//       name : 'Sarah',
//     }
//   }
//   return player;
//  })
// console.log(newPlayers);

//// переписали тоже самое с тернарным
// const newPlayers = players.map((player, index, array) =>
//   player.name === 'Poly'
//     ? { ...player, name: 'Sarah', }
//     : player,
// );
// console.log(newPlayers);

//// вычисляемое свойство
// const user = {
//   name: 'Mango',
// };
// const key = 'name';
// console.log(user['name']);

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs']},
  { id: '001', likes: 2, tags: ['html', 'css']},
  { id: '002', likes: 17, tags: ['html', 'css', 'nodejs']},
  { id: '003', likes: 8, tags: ['css', 'react']},
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react']},
];
// console.log(tweets);

////Достаем массивы из объектов. Создаём пустой массив аккумулятор и
//// складываем в него массивы. Получаем новый массив
// let allTags = tweets.reduce((acc, tweet) => {
//    // allTags.push(tweet.tags);
//   // return allTags;
//    return [...acc, ...tweet.tags];
//   // console.log(tweet);
//   // console.log(acc);
// }, []);
// console.log(allTags);

////Тоже самое. Быстрый возврат. Короткая запись
// let allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log(allTags);
////Это что в консоль
////["js", "nodejs", "html", "css", "html", "css", "nodejs", "css", "react",
//// "js", "nodejs", "react"];

//  //мутебельный вариант
// let a = 1;
// const allTags = ["js", "nodejs", "html", "css", "html", "css", "nodejs", "css", "react",
//   "js", "nodejs", "react"];
// console.log(allTags);
// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);
//   if (acc[tag]) {
//     // acc[tag] += 1;
// ////иммутабельный вариант. Не изменяет исходный массива
//     return {
//       ...acc,
//       [tag]: acc[tag] + 1
//     };
//   }
//   acc[tag] = 1;
//   return {
//     ...acc,
//     [tag]: 1,
//   }
// }, {});
// console.log(tagsStats);

const students = [
  { name: "Манго", courses: ["математика", "фізика"] },
  { name: "Полі", courses: ["інформатика", "математика"] },
  { name: "Ківі", courses: ["фізика", "біологія"] },
];
// console.log(students);
// students.forEach((itm, idx, arr) => {
//   console.log(itm.courses);
//   // console.log(idx);
// });
// let newCourseArr = [];
// const newObg03 = { name: "Манго", courses: ["математика", "фізика",
//   "біологія"]
// };
// const newArr04 = ["інформатика", "математика", "фізика", "біологія"];
// newCourseArr = [...newArr04, ...newObg03.courses];
// // let a = newCourseArr.push(newArr04);
// console.log(newArr04.length);
// console.log(newCourseArr);
// // console.log(a);
// console.log(newCourseArr.length);


////Метод flatMap разглаживаем массив
const newStudentArr = students.map((itm, idx, arr) => {
  // console.log(`Итерация ${idx+1}`)
  // console.log(itm.courses);

  
});
// console.log(newStudentArr);

// const secondStudentArr = newStudentArr.map((itm, idx, arr) => {
//   console.log(`${itm} ${idx}`);
//   console.log(arr.indexOf(itm));
//   if (arr.indexOf(itm) === idx) {
//     return itm;
//   }
//   return 'a';
// });
// console.log(secondStudentArr);

// const thirdStudentArr = newStudentArr.filter((itm, idx, arr) => {
//  return arr.indexOf(itm) === idx;
// })
// console.log(thirdStudentArr);

///// Метод findIndex() возвращает индекс элемента
// const fouthStudentArr = newStudentArr.findIndex((itm) => itm==="фізика");
// console.log(fouthStudentArr); // 1
// const fifthStudentArr = newStudentArr.findIndex((itm) => itm==="стат");
// console.log(fifthStudentArr); //-1

// const fifthStudentArr = newStudentArr.findIndex((itm) => itm==="інформатика");
// console.log(fifthStudentArr); // 2

////Spread распыление
// const newArrMath = ["математика", "фізика", "інформатика",];
// const newArrPh = ["математика", "фізика", "біологія"];
// // console.log(newArrMath);
// const newArrBio = [...newArrMath, ...newArrPh];
// console.log(newArrBio);


// console.log('a');