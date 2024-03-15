'use strict'
//Задача! Из ряда чисел находим наименьшее число
// let isArrNumber = [1, 3, 10, 26, 50, -2, 125, 301, -100,];
// let minNumberHere = isArrNumber[6];

// function toMinorNumber(isArray) {
  
//     for (let int of isArrNumber) {
//         console.log(int);
//         if (int < minNumberHere) {
//             minNumberHere = int;
//             // console.log(minNumberHere);
//        }
//     }
//     return minNumberHere;

// }

// console.log(toMinorNumber(isArrNumber));

// Паттерн Guard Clause досрочный возврат
// function toWordsHere(words) {
//     if (!words) {
//         return "There's no here";
//     }
//     if (words === "Pease") {
//         return "Words are found!";
//     }
//         return "Nothing!";
//     }
// console.log(toWordsHere("Pease"));

// Задача.Есть строка.Строку преобразуем в массив.
// Заглавные буквы делаем строчными, а строчные заглавными. 
// Без пробела! С пробелом была проблема
let isLineJavaScript = "JavaScript";
// console.log(isLineJavaScript);
let isInvertedString = "";

// function toManyLatter(str) {
//     let isArr = str.split("");
//     // return isArr
//     for (const itm of isArr) {
//         if (itm === itm.toLowerCase()) {
//             console.log(`Эта буква в нижнем регистре ${itm}`);
//             isInvertedString += itm.toUpperCase();
         
//         }
//         if (itm === itm.toUpperCase()) {
//             console.log(`Эта буква в верхнем регистре ${itm}`);
//             isInvertedString += itm.toLowerCase();
         
//         }
              
//     }
//     return isInvertedString;
// }

// //  toManyLatter(isLineJavaScript);
// console.log(toManyLatter(isLineJavaScript));


// Та Же задача выше. С тернарным оператором "?". Короче запись
// function toManyLatter(str) {
//     let isArr = str.split('');
//     console.log(isArr);
//     for (const itm of isArr) {
// isInvertedString = itm === itm.toLowerCase() ? isInvertedString += itm.toUpperCase() : isInvertedString += itm.toLowerCase();
//    }
//     return isInvertedString;
// }
// console.log(toManyLatter(isLineJavaScript));

// Модуль 2. Задача 11/32. Гравировка украшений. Стоимость одного слова умножить на колво слов
// function calculateEngravingPrice(message, pricePerWord) {
//     return (message.split(" ")).length * pricePerWord;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));

// Модуль 2. Задача 11/32. Из строки создаём slug
// function slugify(title) {
//     return title.toLowerCase().split(' ').join('-');
// }
// console.log(slugify("Arrays for begginers"));

// Модуль 2. Задача 11/32.
// function makeArray(firstArray, secondArray, maxLength) {
//     let arr = firstArray.concat(secondArray);
//     // console.log(arr.slice(0, maxLength))
//     // console.log(arr);
//   if(arr.length >= maxLength){
//     return arr.slice(0, maxLength);//Индекс последнего элемента не включая его
//   }
// }
  
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// Модуль 2. Задача 11/32. Лучшее решение!
// function makeArray(firstArray, secondArray, maxLength) {
//    const array = firstArray.concat(secondArray);
//    return array.slice(0, maxLength);
// }
  
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// const start = 3;
// const end = 7;
// let number = 5;
// let sum = 0;
// function calculateTotal(number) {
// for (let i = 1; i <= number; i += 1){
//   sum += i;
// }
//   return sum;
// }
// console.log(calculateTotal(3));
// // calculateTotal(3);

// const planets = ["Earth", "Mars", "Venus"];
// console.log(planets);
// console.log(planets.length);

// for (let i = 0; i < 3; i += 1){
//   console.log(i);
// }
// let sum = 0;
// for (let i = 1; i <= 3; i += 1){
//   sum += i;
//   console.log(sum);
// }
// console.log(sum);

// Модуль 2. Задача 20/32. ЗАДАЧА: ПОДСЧЁТ СУММЫ ПОКУПКИ
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let itm of order) {
//     total += itm;
//     // console.log(itm);
//  }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// Модуль 2. Задача 21/32. ЗАДАЧА: ПОИСК САМОГО ДЛИННОГО СЛОВА
// function findLongestWord(string) {
//  let arr = string.split(' ');
// let isThisWord = '';
// let maxLength = arr[1].length;
// for (let i = 0; i < arr.length; i += 1) {
 
//   if (arr[i].length > maxLength) {
//     maxLength = arr[i].length;
//     isThisWord = arr[i];
//    }
// }
//   return isThisWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

// Модуль 2. Задача 21/32. Функция возвращает массив целых чисел от min до max
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1){
//     // console.log(i);
//     numbers.push(i);
//   }
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));

// Модуль 2. Задача 21/32. Функция возвращает новый массив,
//  в котором будут только те элементы массива numbers,
// которые больше чем значение параметра value(число).
// function filterArray(numbers, value) {
//   const arr = [];
//   for (let i = 0; i <= numbers.length; i += 1){
//     // console.log(numbers[i]);
//     if (value < numbers[i]) arr.push(numbers[i]);
//   }
//   return arr;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// console.log(filterArray([12, 24, 8, 41, 76], 38));

// Модуль 2. Задача 25/32. Моё решение. Общими элементами массивов называют те элементы,
//  которые присутствуют во всех массивах.
// function getCommonElements(array1, array2) {
//   let newArr = [];
//   for (let itm of array1) {
//     // console.log(itm);
//     for (let itm2 of array2) {
//       // console.log('cycle2 ', itm);
//       if () {
//         // console.log(itm2);
//         newArr.push(itm2);
//       }
//     }
//   }
//   return newArr;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// Модуль 2. Задача 25 / 32. Лучшее решение!
// function getCommonElements(array1, array2) {
//   let newArr = [];
//   for (let itm of array1) {
//     // console.log(itm);
//          if (array2.includes(itm)){
//          // console.log('cycle', itm02);
//          newArr.push(itm);
//   }
//  }
//   return newArr;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// console.log([24, 12, 27, 3].includes(27));

// Модуль 2. Задача 29 / 32. Массив чётных чисел
// function getEvenNumbers(start, end) {
//   let arrOfEven = [];
//   for (let i = start; i <= end; i += 1){
//     if (i % 2 == 0) arrOfEven.push(i);
//   }
//   return arrOfEven;
//   }

// console.log(getEvenNumbers(2, 6));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

// Модуль 2. Задача 32 / 32. Функция проверяет, есть ли в массиве array значение value,
//  возвращая true если есть и false в противном случае.
function includes(array, value) {
  for (let itm of array) {
    // console.log(itm);
    if (itm === value) {
      return true;
    } 
      //
  }
   return false;
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));








