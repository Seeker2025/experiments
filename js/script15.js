//////// DOM
//////Примеры из урока Саши Репеты
import dataList from '../data/products.js';

const productOne = {
    name: "Engine",
    description: "Lorem, ipsum dolor sit amet.",
    price: 2300,
};

function newBoxEll(vary01){
    const sectionEll = document.createElement('section');
    sectionEll.classList.add('bakground');
    // sectionEll.textContent = 'text a lot of text';
    

    const hrefA = document.createElement('a');
    hrefA.classList.add('href_class');
    hrefA.textContent = 'text href href'

    const divEll = document.createElement('div');
    divEll.classList.add('color');
    divEll.textContent = vary01.name;
    
    sectionEll.append(hrefA, divEll);

    return sectionEll;
    
}
// newBoxEll(productOne);

// console.log(dataList);
const newBlockType = dataList.map(newBoxEll);
// console.log(newBlockType);
const boxEllnail = document.querySelector('.box_treee');
boxEllnail.append(...newBlockType)
// console.log(boxEllnail);



function toFunMarkup(value03){
    return `
        <p class='bakground_green'>Параграф текст ${value03.name}</p>
    `;
};

const mapMarkUpList = dataList.map(toFunMarkup).join('');

console.log(mapMarkUpList);

const toFou = document.querySelector('.box_four');
toFou.insertAdjacentHTML('beforeend', mapMarkUpList);
console.log(toFou);

//////селектор атрибутов
const imgEl = document.querySelector('[src="img/car02.png"]');
console.log(imgEl);
/////свойство из объекта
console.log(imgEl.src);

////переключаем картинку
////кот
const imgCatElem = document.querySelector('.hero__image');
///кнопка
const magicBtn = document.querySelector('.js-magic-btn');

magicBtn.addEventListener('click', () => {
        imgCatElem.src = 'img/cat02.jpg';
});
const colors = [
    { label: 'pink', color: '#E91E63' },
    { label: 'blue', color: '#2196F3' },
    { label: 'indigo', color: '#3F515B' },
    { label: 'green', color: '#4CAF50' },
];

function mainField(colors) {
    return colors.map(itm => {
        const sque = document.createElement('div');
        sque.classList.add('class__sq');
        sque.style.backgroundColor = itm.color;
        sque.textContent = itm.label;
        return sque;
    });
}
const squManyColorsEll = document.querySelector('.squ_many_colors');
squManyColorsEll.append(...mainField(colors));
// console.log(mainField(colors));

const ulEll = document.createElement('ul');
console.log(ulEll);
// const liEl = document.createElement('li');

const forAr1234 = function() {
    const newArrTwo = [1, 2, 3, 4].map(itm => {
        const liEl = document.createElement('li');
        liEl.classList.add('class__for_li');
        liEl.textContent = 'This is text content 033';
    
        return liEl;
    });
    return newArrTwo;
}
// console.log(newArrTwo);
ulEll.append(...forAr1234());


const isBoxSixEll = document.querySelector('.box_six');
console.log(isBoxSixEll);
isBoxSixEll.append(ulEll);


const sevenEll = document.querySelector('.box_seven');


const textFunFor = function () {
    return `
        <ul class="ul_class_ul">
            <li class="list_gold">Text gold</li>
            <li class="list_gold">Text gold</li>
            <li class="list_gold">Text gold</li>
            <li class="list_gold">Text gold</li>
        </ul>
       `;
}

console.log(textFunFor());
sevenEll.insertAdjacentHTML('afterbegin', textFunFor());
console.log(sevenEll);

const att05 = [1, 2, 3,];

const boo = function () {
    return `
    <ul class="Ul_for_Lee">
        <li class="cl_Lee">Who is Mr.Lee?</li>
        <li class="cl_Lee">Who is Mr.Lee?</li>
        <li class="cl_Lee">Who is Mr.Lee?</li>
    </ul>
    `;
};

console.log(boo());

sevenEll.insertAdjacentHTML('beforebegin', boo());


console.log('b');

//////innerHTML выводим содержимое <article> вместе с тегами
const article = document.querySelector(".article");
console.log(article.innerHTML);


const title = document.querySelector(".article .title");
console.log(title.innerHTML);

title.innerHTML = 'New and <span class="accent">improved</span> title';
//////очищаем строку
title.innerHTML = '';

const text = document.querySelector(".article .text");
console.log(text.innerHTML);

const link = document.querySelector(".article .link");
console.log(link.innerHTML);

const list03 = document.querySelector(".list03");
console.log(list03);

const newTechnologies = ["React", "TypeScript", "Node.js"];
console.log(newTechnologies);////["React", "TypeScript", "Node.js"]

const markup = newTechnologies.map(item => {
    return `<li class='item_new_adding'>${item}</li>
     `;
}).join('');
console.log(markup);
list03.insertAdjacentHTML('beforeend', markup);
list03.insertAdjacentHTML('beforebegin', `<h2 class='color'>Popular technologies</h2>`);

const singleBtn = document.querySelector('#single');
console.log(singleBtn);
const handleClick = () => {
    console.log("click event listener callback");
} 
singleBtn.addEventListener('click', handleClick);

const multiBtn = document.querySelector("#multiple");
const firstCallback = () => {
  console.log("First callback!");
};
const secondCallback = () => {
  console.log("Second callback!");
};
const thirdCallback = () => {
  console.log("Third callback!");
};
multiBtn.addEventListener("click", firstCallback);
multiBtn.addEventListener("click", secondCallback);
multiBtn.addEventListener("click", thirdCallback);

//////Добавляем слушатель на кнопку и удаляем слушатель 
const addListenerBtn = document.querySelector('.js-add');
const removeListenerBtn = document.querySelector('.js-remove');
const btn = document.querySelector('.target-btn');

const handleClick02 = () => {
    console.log("click event listener callback");
}
addListenerBtn.addEventListener('click', () => {
    btn.addEventListener('click', handleClick02);
    console.log("click event listener was added to btn");
});
removeListenerBtn.addEventListener('click', () => {
    btn.removeEventListener("click", handleClick02);
    console.log("click event listener was removed from btn");
}

)
////// смотрим объект event
const button05 = document.querySelector(".btn05");
const handleClick04 = event => {
  console.log(event);
};
button05.addEventListener("click", handleClick04);

const button03 = document.querySelector(".btn03");
console.log(button03);
const handleClick03 = (event) => {
  console.log("event: ", event);
  console.log("event type: ", event.type);
  console.log("currentTarget: ", event.currentTarget);
  console.log("target: ", event.target);
};
button03.addEventListener('click', handleClick03);

const form = document.querySelector(".register-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
//   const {
//     elements: { username, password }
//   } = event.currentTarget;
    //       console.log(username.value, password.value);
    
    const {
        elements: { username, password }
       
    }= event.currentTarget;
    console.log(username, password);

});

//////  Короткі властивості
const age = '47';
const name = 'Pete';

const objPressure = {
    age,
    name,
};
console.log(objPressure.age, objPressure.name);
////// Класс и экземпляры
class NewClass {
    constructor(name, year) {
        this.name =  name;
        this.year = year;
    }
};
const box02 = new NewClass('Abraham', 'Sarah');
console.log(box02);
const box03 = new NewClass('Isaaс', 'Rebecca');
console.log(box03);








class ThesePeople{
    constructor(name, age) {
        this.name = name;
        this.age = age;
        
    }
};

const peopleOne = new ThesePeople('Mark', 35);
console.log(peopleOne);
const peopleTwo = new ThesePeople('Jeff', 45);
console.log(peopleTwo);




















