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

// function mainField(colors) {
//     return colors.map(itm => {
//         const sque = document.createElement('div');
//         sque.classList.add('class__sq');
//         sque.style.backgroundColor = itm.color;
//         sque.textContent = itm.label;

//         return sque;
//     });
// }
// const squManyColorsEll = document.querySelector('.squ_many_colors');
// squManyColorsEll.append(...mainField(colors));
// // console.log(mainField(colors));

console.log(colors);



// console.log(sixEll);

function nanyColorsTwo(colors) {
    return colors.map(itm => {
        const col = document.createElement('div');
        col.classList.add('class_col');
        col.style.backgroundColor = itm.color;

        return col;
        
    })
}
const sixEll = document.querySelector('.box_six');

sixEll.append(...nanyColorsTwo(colors));


// console.log(sixEll);
  console.log(nanyColorsTwo(colors));











