import product from '../data/products.js';
//////импорт, есть type="module"
/////'DOM'
/////'BOM'

//////выбираем по классу. Так можно выбрать любой селектор. Если выбираем по тегу li,
//////то найдёт первый тег li. Если ничего не нашо то null
const h1Ref = document.querySelector('.main_title');
console.log(h1Ref);
//////выбираем по Id
const h2Ref = document.querySelector('#title');
console.log(h2Ref);
//////выбираем по Id
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

//////проверяем есть ли класс у селектора
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

const imgRef = document.querySelectorAll('img')[1];
console.log(imgRef);
////Добавляем атрибут alt= 'kebab' к img 
imgRef.setAttribute('alt', 'kebab');

////Только для ссылок и картинок
///Добавляем атрибут ко второму а
const yahooRef = document.querySelectorAll('a')[1];
yahooRef.target = '_blank';

///Добавляем атрибуты ко второму img
const imgRef02 = document.querySelectorAll('img')[1];
imgRef02.alt = 'kebar-kazan';
imgRef02.width = 150;

////Получаем значение атрибута src у первого тега 'script'
const scriptRef = document.querySelectorAll('script')[0];
const href05 = scriptRef.getAttribute('src');
console.log(href05);                                        //////js/script14.js

////Меняем текст заголовка
const h2TitleTree = document.querySelector('#titleTree');
console.log(h2TitleTree);  

//////екстовое содержимое между открывающим и закрывающим тегом
h2TitleTree.textContent = 'Hello';
h2TitleTree.innerText = 'Alex';

/////Добавили тег. Очень крутой метод!
const h2TitleTwo = document.querySelector('#titleTwo');
h2TitleTwo.innerHTML = '<span style="color:magenta">Kebab Menu</span>';

/////Добавляем в бокс список имён созданный из массива
let friends = [
    { id: 1, name: 'Vova', age: 20, budget: 2400, isComlete: true},
    { id: 2, name: 'Sara', age: 25, budget: 3500, isComlete: false},
    { id: 3, name: 'Mike', age: 30, budget: 300, isComlete: true},
    { id: 4, name: 'Bob', age: 18, budget: 200, isComlete: false},
];
let html = '';
friends.forEach(({ name }) => {
    html += `<li class="">${name}</li>`;
});
console.table(html);

const boxRef = document.querySelector('.box');
console.log(boxRef);
boxRef.innerHTML = html;

const h4 = document.querySelector('#titleFour'); 
h4.innerHTML = "";
h4.insertAdjacentHTML(
    "beforeend",
    '<span style="color: maroon">Kebab menu</span>'
)
console.log(h4);

//////добавляем стили
const h5 = document.querySelector('#titleFive'); 
console.log(h5);
h5.style.color = 'gold';
h5.style.textDecoration = 'underline';
h5.style.fontSize = '55px';
//////создаём элемент
const aNewRef = document.createElement('a');
aNewRef.setAttribute('href', 'https://translate.google.com');
aNewRef.target = '_blank';
aNewRef.innerText = 'Translate';
console.log(aNewRef);

//////Добавляем картинку в бокс
const imgNewRed = document.createElement('img');
imgNewRed.src = 'img/max.png'
console.log(imgNewRed);
imgNewRed.alt = 'Maksakova';
imgNewRed.width = '450'; ////// Ширина. Не ставить 'px'!!!;

/////Это бокс
const sectionImgRef = document.querySelector('.images_examples');
console.log(sectionImgRef);
////Добавляем картинку в бокс
document.body.append(imgNewRed);
console.log(imgNewRed);

console.log('a');
console.log(product);

const productEl = document.createElement('article');
productEl.classList.add('product');

const nameEl = document.createElement('h2');
nameEl.textContent = 'product';
nameEl.classList.add('product_name');

const descrEl = document.createElement('p');
descrEl.textContent = 'Product description';
descrEl.classList.add('product_descr');

const priceEl = document.createElement('p');
priceEl.textContent = 'price: $12.99';
priceEl.classList.add('product_price');

console.log(productEl);

productEl.append(nameEl, descrEl, priceEl );

console.log(productEl);

const boxEll = document.createElement('box');
boxEll.classList.add('peaxe');
boxEll.textContent='Many Text';
console.log(boxEll);

const productOne = {
    name: "Сервоприводы",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa etus deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.",
    price: 2000,
    available: true,
    onSale: true,
};

console.log(productOne.name);


const aLotOfElem = (product) => {
    
    const arrEll = document.createElement('article');
    arrEll.classList.add('article_class');
    arrEll.textContent = 'This is text content';

    const ellNBox = document.createElement('box');
    ellNBox.classList.add('classBox');
    ellNBox.textContent = 'textContent';
    
    const refEll = document.createElement('a');
    refEll.classList.add('href_a');
    refEll.textContent = product.name;

    const refAa = document.createElement('a');
    refAa.classList.add('href_new_class');
    refAa.textContent = product.price;
    arrEll.append(ellNBox, refEll, refAa);
    return arrEll;
};
console.log(aLotOfElem(productOne));
const arr = product.map(aLotOfElem);

const mainBoxEll = document.querySelector('.main_box');
mainBoxEll.append(...arr)
console.log(mainBoxEll);

const toMArkUp = bbb =>{
    return `
    <tr>
        <td>${bbb.name}</td>
        <td>${bbb.price}</td>
        <td>${bbb.available}</td>
    </tr>
    `;
};

console.log(toMArkUp(product));
const expEl = document.querySelector('.box_two');
console.log(expEl);

const arrMarkupNew = product.map(toMArkUp).join(' ');

expEl.insertAdjacentHTML('beforeend', arrMarkupNew);
console.log(arrMarkupNew);








