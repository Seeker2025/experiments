'use strict'
/////'DOM'
/////'BOM'

const h1Ref = document.querySelector('.main_title');
console.log(h1Ref);
const h2Ref = document.querySelector('#title');
console.log(h2Ref);

const h3Ref = document.getElementById('titleTwo');
console.log(h3Ref);

///////первый блок ul, второй будет [1], если их несколько  
const ulRef02 = document.querySelectorAll('.list')[0];
console.log(ulRef02);
//////в блоке выбираем второй li
const liRef = ulRef02.querySelectorAll('li')[1];
console.log(liRef);

///////смотрим сколько классов у селектора
console.log(h1Ref.classList);
console.log(h1Ref.classList.length);

//////проверяем есть ли у селектора
console.log(h1Ref.classList.contains('kebab'));     ////false
console.log(h1Ref.classList.contains('heading'));   ////true

//////добавляем класс
h1Ref.classList.add('red'); 
console.log(h1Ref.classList);
/////удаляем класс
h1Ref.classList.remove('red'); 
console.log(h1Ref.classList);

/////если класс есть то удаляется, если нет то класс добавляется
h1Ref.classList.toggle('red');
////заменяем класс
h1Ref.classList.replace('red', 'green'); 



