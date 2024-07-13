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


console.log('a');


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






















