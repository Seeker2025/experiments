'use script'
// паттерн «ранний возврат».

/**
 * 
 */

// function checkStorage( ordered, available) {
//   let message;
//     if (ordered === 0) {
//         return "Your order is empty!";
//   }
//     else if(ordered > available){
//        return "Your order is too large, not enough goods in stock!";
//   }
//     else {
//        return "The order is accepted, our manager will contact you";
//   }
// }
// console.log(checkStorage(10, 15));

// function sumNumber(num) {
//   let d = 0;
//   for (let i = 0; i < num; i += 1){
//     d += i;
//     console.log(i);
//    }
//  return num;
// }
// console.log(sumNumber(3));








const playList = {
    name: 'Мой супер лист',
    rating: 5,
    track: ['trak-1', 'trak-2', 'trak-3'],
    trackCount: 0,
};

const {
    rating,
    track,
    name,
    //Переназываем свойство и присваиваем значение по умолчанию
    trackCount: numberOfTrack = 2, 
    author = 'user',
    online = true,
} = playList;
// console.log(numberOfTrack); // 0
// console.log(playList);



// console.log('name' in playList); //true

// const nameOne = 'Pete';
// const nameTwo = 'Abraham';
// const nameTree = 'Sarah';

const isObj = {
    nameOne: 'Pete',
    nameTwo: 'Abraham',
    nameTree: 'Sarah',
};

const { nameOne, nameTwo, nameTree } = isObj;

// console.log(`${nameOne} ${nameTwo}  ${nameTree}`);
// console.log('a');

const fruit = 'Apple';

const isObjReg = {
    ...isObj,
    fruit,
};
// console.log(isObjReg);




// function foo({ a, b, c, ...props }) {
    
//     console.log(props); // здесь будет объект  {d: 4, e: 5}
// }
// foo({ a: 1, b: 2, c: 3, d: 4, e: 5 });


const newArr = [1, 2, 3, 4, 5, 6, 7, 8,];
//// Здесь отличия arguments от rest
function fooTwo(first, second, ...rest) {
    console.log(arguments);     //[1, 2, 3, 4, 5, 6, 7, 8,]
    console.log(first);         //1
    console.log(second);        //2
    console.log(rest);          //[3, 4, 5, 6, 7, 8,]
}

// console.log(newArr);
fooTwo(...newArr);              //распыляем массив