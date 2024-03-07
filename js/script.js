'use strict'

// let str = prompt("Tell your phrase here");

// console.log(str);
// console.log(typeof str);
// let num = Number(str)
// console.log(typeof num);
// console.log(num);

// let str = 'sUmSung';

// console.log(str);
// console.log(typeof str);
// console.log(str[1]);
// console.log(str[0].toLocaleUpperCase());
// console.log(str.slice(1).toLocaleLowerCase());

// console.log(str[0].toLocaleUpperCase() + str.slice(1).toLocaleLowerCase());

// let a = 'a';
// let b = 'b';
// console.log(a, b);
// let num = 2.5;
// let numStr = '2.6px';

// console.log(Math.round(num));
// console.log(Number.parseInt(numStr));
// console.log(Number.parseFloat(numStr));

// let dev = 10 % 2;
// console.log(dev);

// for (let i = 0; i <= 6; i += 1){

//     if (i % 2 === 0) continue;
//         console.log(i);

// }

// switch сравнение на строгое равенство. На <, > не использовать!
// let prise = 0;
// let stat = prompt();
// stat = Number(stat);

// switch (stat) {
//     case 1:
//         prise = 20;
//         console.log(prise);
//         break;
//   //если совпадают два условия
//     case 2:
//     case 3:
//         prise = 40;
//         console.log(prise);
//         break;
    
    
//     default:
//         console.log('Nothing');
// }
// let a = 2;
// console.log(a);
// let str = 'Samsung';
// let newStr = str.toLowerCase()
// console.log(newStr);
// let pov = newStr.includes('sam');
// console.log(pov);
// let message = 'SenTencesSpam';

// Модуль 1 14/36 ЗАДАЧА
// function isValidPassword(passwort) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   let isMatch = passwort === SAVED_PASSWORD;
//   return console.log(isMatch);
// }
// isValidPassword('ryismyjam');

// Модуль 1 16/36 ЗАДАЧА
// function checkStorage(available, ordered) {
//   let message;
//   if (ordered > available) message = 'Not enough goods in stock!';
//   else message = 'Order is processed, our manager will contact you.';
//   return console.log(message);
// }
// checkStorage(150, 180);

// Модуль 1 18/36 ЗАДАЧА
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits){
//     let message;
//     const totalPrice = pricePerDroid * orderedQuantity;
//     if (totalPrice > customerCredits) {
//         message = "Insufficient funds!";
//     }else {
//         message = `You ordered ${orderedQuantity} droids, you have
//         ${customerCredits - totalPrice} credits left`;
//     }

//     return message;
// }
// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

// Модуль 1 18/36 ЗАДАЧА
// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;
//     if (password === null) message = "Canceled by user!";
//     else if (password === ADMIN_PASSWORD) message = "Welcome!";
//     else message = "Access denied, wrong password!";
//     return message;
// }
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// Модуль 1 18/36 ЗАДАЧА
//логическое "и"
// function isNumberInRange(start, end, number) {
//   const isInRange = number>=start && number<=end;
//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

// Модуль 1 22/36 ЗАДАЧА
// логическое "или"
// function checkIfCanAccessContent(subType) {
// const canAccessContent = subType==="pro"||subType==="vip";
//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent("starter"));
// console.log(checkIfCanAccessContent("vip"));
// console.log(checkIfCanAccessContent("free"));

// Модуль 1 23/36 ЗАДАЧА

// function isNumberNotInRange(start, end, number) {
// //   const isInRange = number >= start && number <= end;
//   const isNotInRange = !(start <= number && end >= number);

//   return isNotInRange;
// //   return isInRange;
// }
// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
// console.log(isNumberNotInRange(20, 50, 24));
// console.log(isNumberNotInRange(20, 50, 76));

// Модуль 1 23/36 ЗАДАЧА

//!!!!!
// Тугая задача. Напутал с операторами!
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
  
//     if (totalSpent >= 50000) discount = GOLD_DISCOUNT
//     else if(totalSpent >= 20000 && 50000 >= totalSpent) discount = SILVER_DISCOUNT
//     else if (totalSpent >= 5000 && 20000 >= totalSpent) { discount = BRONZE_DISCOUNT }
//     else   discount = BASE_DISCOUNT

//     return discount;
// }

// console. log(getDiscount(137000))
// console. log(getDiscount(46900))
// console. log(getDiscount(8250))
// console. log(getDiscount(1300))
// console. log(getDiscount(5000))
// console. log(getDiscount(20000))
// console. log(getDiscount(50000))

// Модуль 1 28/36 ЗАДАЧА
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
   
//     switch(password){
//         case null:
//             message = "Canceled by user!";
//             break;

//         case ADMIN_PASSWORD:
//             message = "Welcome!";
//             break;
    
//         default:
//             message = "Access denied, wrong password!"

//             // Change code above this line
//             }
//             return message;
    
// }
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// Модуль 1 29/36 ЗАДАЧА: ДОСТАВКА ТОВАРА
// function getShippingCost(country) {
//     let message;
//     switch (country) {
//         case "China":
//             message = `Shipping to ${country} will cost 100 credits`;
//             break;
        
//         case "Chile":
//             message = `Shipping to ${country} will cost 250 credits`;
//             break;
        
//         case "Australia":
//             message = `Shipping to ${country} will cost 170 credits`;
//             break;

//         case "Jamaica":
//             message = `Shipping to ${country} will cost 120 credits`;
//             break;
        
//         default: message ="Sorry, there is no delivery to your country"

//     }
//     return message;
// }
// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));

// Задача 31 / 36 Cвойство length
// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// Задача 32 / 36 Метод Slice
// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }

// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 6));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));
 
// Задача 33 / 36 Обрезаем строку и добавляем три точки
// function formatMessage(message, maxLength) {
//   let result;
//   if(message.length>maxLength){
//     result = message.slice(0, maxLength) + "..."
//   }
//   else result = message;
//   return result;
// }
// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

// Задача 34 / 36 Нормализация строк. Метод toLowerCase()
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase();
//   return normalizedInput;
// }
// console.log(normalizeInput("Hello world"));
// console.log(normalizeInput("This ISN'T SpaM"));
// console.log(normalizeInput("Big SALE"));

// Модуль 1 36/36 ЗАДАЧА: ПРОВЕРКА СПАМА. Методы toLowerCase(), includes('sale')
// function checkForSpam(message) {
//   let result = message.toLowerCase();
//  result =(result.includes('spam')||result.includes('sale'))
//  return result;
// }
// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("Trust me, this is not a spam message"));
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));


// Повторение задачи 36/36. Ищем подстроку в строке и выводим сообщение в консоль
// function checkStr(mess, phraze) {
//   let answer;
//   let strNorm = mess.toLocaleLowerCase().includes(phraze);
   
//   if (strNorm) answer =`Yes! It's truth`;
//   else answer = `No! There's nothing!`;

//   return answer;
// }
// console.log(checkStr("Get rid of sPaM emails. Our book in on sale!", "peace"));

const phraze = "Get rid of sPaM emails. Our book in on sale!";
let lastNum;
console.log(phraze.length);
console.log(phraze[0]);
lastNum = phraze.length - 1;
console.log(lastNum);
