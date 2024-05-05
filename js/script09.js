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
  { name: "Манго", courses: ["математика", "фізика",] },
  { name: "Полі", courses: ["інформатика", "математика",] },
  { name: "Ківі", courses: ["фізика", "біологія",] },
];

////Вопрос. Массив после пуша. Длина 1
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
// const newStudentArr = students.flatMap((itm, idx, arr) => {
//   return itm.courses;
// });
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

//// Spread распыление
// const newArrMath = ["математика", "фізика", "інформатика",];
// const newArrPh = ["математика", "фізика", "біологія"];
// // console.log(newArrMath);
// const newArrBio = [...newArrMath, ...newArrPh];
// console.log(newArrBio);

// //push
// const alphaB = ['a', 'b', 'c'];
// let alpfTwo = [];
// let s = alpfTwo.push('s', 'q', ...alphaB);
// console.log(s);               //// 5
// console.log(alpfTwo.length);  //// 5
// console.log(alpfTwo);         ////['s', 'q', 'a', 'b', 'c']

//// newObj.hasOwnProperty(key)
// const newObj = {
//   name: 'Masha',
//   girl: 'Sarah',
//   boy: 'Jeff',
// };
// for (let key in newObj) {
//   let a=newObj.hasOwnProperty(key);
//   console.log(a);
// }
// console.log('b');
// console.log(newObj.hasOwnProperty('boy'));

////  МОДУЛЬ 4. Задача 34/48
// const playtimes = [1270, 468, 710, 244];
// const totalPlayTime = playtimes.reduce((acc, itm)=>{
//   return acc + itm;
// }, 0);
// console.log(totalPlayTime);

const tweet = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react',] },
  { id: '004', likes: 0, tags: ['css', 'nodejs', 'react',] },
];
// console.log(tweet[0]);
// console.log(tweet[0].tags);

//// REDUCE
//// массивы из всех объектов складываем в один массив
const newRedArr = tweet.reduce((acc, itm) => {
  acc.push(...itm.tags);
  return acc
}, []);
// console.log(newRedArr);
//// общая сумма
const arrTotalSum = tweet.reduce((acc, itm) => {
  return itm.likes + acc;
}, 0);
// console.log(arrTotalSum);

const playersTeam = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = playersTeam.reduce((acc, itm) =>
(acc + itm.playtime / itm.gamesPlayed), 0);
// console.log(totalAveragePlaytimePerGame);

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
];

////  МОДУЛЬ 4. Задача 37/48
const calculateTotalBalance = users.reduce((acc, itm) => {
  // acc.push(...itm.friends);
  // acc=[ ...acc, ...itm.friends];
  // console.log(itm.friends.length);
// let a = acc.length;
  return acc+itm.friends.length;
}, 0);
// console.log(calculateTotalBalance);


const users02=[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]

const sortByName = users02 => {
  return [...users02].sort((a, b) => a.name.localeCompare(b.name))
};
//  console.log(sortByName(users02));

////  МОДУЛЬ 4. Задача 46/48
const getNamesSortedByFriendCount = users02 => {
  return [...users02].sort((a, b) => a.friends.length - b.friends.length)
    .map((itm) => itm.name);
};
//  console.log(getNamesSortedByFriendCount(users02));


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
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
////  МОДУЛЬ 4. Задача 37/48
////Дополни код так, чтобы в переменной names получился массив имён авторов в
//// алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.
const names = [...books].filter((itm) => itm.rating > MIN_BOOK_RATING)
  .map((itm) => itm.author)
  .sort((a, b)=>a.localeCompare(b));
// console.log(names);

const users03 =[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]

////  МОДУЛЬ 4. Задача 47/48
////Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив
//// уникальных имён друзей(свойство friends) отсортированный по алфавиту.
const getSortedFriends = users03 => {
  return [...users03].flatMap((itm)=>itm.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index)
    .sort((a, b)=>a.localeCompare(b))
 };
// console.log(getSortedFriends(users03));

////  МОДУЛЬ 4. Задача 48/48
////Находим общее значение balance для переменной gender ('male', 'female');
let arrr03 = [1, 2, 3];
const getTotalBalanceByGender = (users, gender) => {
 return users.filter((itm, index, array) => itm.gender === gender)
             .reduce((acc, it) => acc + it.balance, 0);
 };
// console.log(getTotalBalanceByGender(users03, "male"));
 

//  let s = arrr03.reduce((acc, it) => {
//    return acc + it;
//  }, 0);
// console.log(s);

let isArrNum = ['a', 'b', 'c'];
let isTwo = ['s', 'w', 'q'];

const newArrCreate = isArrNum.reduce((accum, itm) => {

   return [...accum, ...itm];
   
}, []);

console.log(Array.isArray(newArrCreate));
console.log(newArrCreate);
  

