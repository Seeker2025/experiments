'use strict'
// //Оператор нулевого слияния (??)
// let test = null;
// const value = 0 ?? 'some value';
// // let a = 'some value';
// console.log(value);             //0
// console.log(Boolean(value));    //false

////Object destructuturing
// const bmw = {
//     title: 'X5',
//     manufacturer: 'BMW',
//     color: ['black', 'red', 'white'],
//     dealership: {
//         city: 'Berlin',
//         zip: 12345,
//         options: {
//             discount: 3,
//             wipers: 'Brembo',
//             tires: 'Michelin',
//         },
//     },
// };
// console.log(bmw);
// const { title, dealership:{city, zip, options:{discount, wipers} },} = bmw;
// console.log(title);
// // console.log(manufacturer);
// console.log(city);
// console.log(zip);
// console.log(discount);
// console.log(wipers);

// let num = null;
// if (num||!0) console.log('text'); //text
// else console.log('fail');

//Функция. Распыление - современный способ.
// Здесь массив аргумент и добавляем ещё аргументы
// function myPush(arr, ...rest) {
//     let newArr = [...arr, ...rest];
//     console.log(arr);
//     return newArr;
// }
// let nums = [1, 2, 3, 5, 6, 7];
// // console.log(nums);
// console.log(myPush(nums, 10, 20, 'a'));

////Тоже самое с push
// function myPush02(arr, ...rest) {
//     let newArr = arr.push(...rest);
//     console.log(arr);
//     return arr;
// }
// let nums = [1, 2, 3, 5, 6, 7];
// // // console.log(nums);
// console.log(myPush02(nums, 'a', 'b', 10));

// let nums = ['app', 'Spy', 'boo'];
// let nums02 = ['app', 'Spy', 'boo02'];
// let newArr03 = [...nums, ...nums02];
// console.log(newArr03);

////Две строки в два массива и складываем в объект. Модуль 3. Урок 2.
// function showContactInfo({ names, phones }) {
//     let isNewObj = {};
//     const namesList = names.split(',');
//     const phoneList = phones.split(', ');
//     // console.log(namesList);
//     // console.log(phoneList);
//     for (let i = 0; i <= 3; i += 1){
//         // console.log(`${namesList[i]}:${phoneList[i]}`);
//         // console.log(namesList[i]);
//         isNewObj[namesList[i]]=phoneList[i];
//     }
//     // return { names, phones }
//     // return namesList;
//     return isNewObj;
//  }
// let objWithPhone = showContactInfo({
//     names: 'Vova, Sarah, Bob, Naike',
//     phones: '5555, 2222, 8810, 7779',
// });
// console.log(objWithPhone);

//Здесь забыл как добавлять поля в объект из двух массивов
// let obj02 = {
//     num: 'Pete',
// };
// let arrVova = ['Vova', 'Sarah', 'Bob', 'Naike'];
// let arrNum = [5555, 2222, 8810, 7779];
// obj02[arrVova[0]]=arrNum[0]
// obj02[arrVova[1]]=arrNum[1]
// console.log(obj02);

// //Пример из урока. Модуль 3
let items = [
    { id: '1', name: 'bananes', price: 25, qtv: 150, category: 'fruits' },
    { id: '2', name: 'apples', price: 18, qtv: 450, category: 'fruits' },
    { id: '3', name: 'potato', price: 10, qtv: 850, category: 'vegetable' },
    { id: '4', name: 'tomatoes', price: 35, qtv: 379, category: 'vegetable' },
];
let shopName = 'ATB';
const shop = {
    shopName,
    items,
    showItem() {
        console.log(this.items);
        for (let { id, name, price, qtv, category } of this.items) {
            // console.log(id, name, price);
            // console.log({ id, name, price, qtv, category });
    }
    },
    addItems({ id, name, price, qtv, category }) {
        // this.items.push({ id, name, price, qtv, category });
        let newItem = { id, name, price, qtv, category  };
        this.items = [...this.items, {...newItem, id: this.generatedID()}];
        // return this.items;
    },
    generatedID() {
        return Math.random().toString().slice(2);
    }
};
// shop.addItems(
//     // { id: '5', name: 'pear', price: 35, qtv: 378, category: 'fruits' }
// );
let pear = { id: '5', name: 'pear', price: 35, qtv: 378, category: 'fruits' };
// console.log(shop.addItems(pear));
shop.addItems(pear);

shop.showItem();
// console.log(shop.generatedID());





 
