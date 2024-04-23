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
const newPlayers = players.map((player, index, array) =>
  player.name === 'Poly'
    ? { ...player, name: 'Sarah', }
    : player,
);
console.log(newPlayers);