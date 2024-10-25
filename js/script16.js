//////// DOM
//////Модалка плохая!
//////

const btnRef = document.querySelector('#myModalBtn');
const modalRef = document.querySelector('#myModal');
const closeModalBtnRef = document.querySelector('.close');

console.log(btnRef);
console.log(modalRef);
console.log(closeModalBtnRef);
////// Открываем модалку кнопкой #myModalBtn
btnRef.addEventListener('click', () => {
    modalRef.style.display = 'block';
});
////// Закрываем модалку крестиком
closeModalBtnRef.addEventListener('click', () => {
    modalRef.style.display = 'none';
///// Cнимаем обработчики с windows
    window.removeEventListener('keydown', onEscape);
    window.removeEventListener('click', onBackDrop);
});
////// Меняем курсор при наведение на крестик
closeModalBtnRef.addEventListener('mouseover', (event) => {
    event.target.style.cursor = 'pointer';
});
///// Закрываем модалку кликом по серому фону
window.addEventListener('click', onBackDrop);

function onBackDrop(event) {
      if (event.target === modalRef) {
          modalRef.style.display = 'none';

    }
    
};

///// Закрываем модалку нажатием "Escape"
window.addEventListener('keydown', onEscape);
function onEscape(event) {
    if (event.code === "Escape") {
        modalRef.style.display = 'none';
///// Cнимаем обработчики с windows
window.removeEventListener('keydown', onEscape);
window.removeEventListener('click', onBackDrop);
     }
};


////// Нажатие кнопки открываем и закрываем меню. На кнопке меняется
////// надпись open/close
// <ul>
 //     <li><a href ="/vodka">Vodka</a></li>
 //     <li><a href ="/beer">Beer</a></li>
 //     <li><a href ="/rum">Rum</a></li>
 //     <li><a href ="/whiskey">Whiskey</a></li>
// </ul>
const drinks = ['Vodka', 'Beer', 'Rum', 'Whiskey'];
const rootRef = document.querySelector('#root');
const btnRef02 = document.querySelector('#openMenu');
btnRef02.textContent = 'Close Menu ';
// console.log(rootRef);
// console.log(btnRef02);
function createLi(text) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    li.classList.add('list_item');
    a.classList.add('list_item--link');
    a.href = '/' + text.toLowerCase();
    a.target = '_blank';
    a.textContent = text;
    li.append(a);
    return li;
 };
const ul = document.createElement('ul');
ul.classList.add('list');
// ul.classList.add('hide');
const menu = drinks.map((li) => {
    return createLi(li);
});
console.log(menu);
ul.append(...menu);
rootRef.append(ul);
btnRef02.addEventListener('click', onBtn);
console.log('s');
console.log(rootRef);
 function onBtn(event) {
    ul.classList.toggle('hide');
    if (ul.classList.contains('hide')) {
        event.target.textContent = 'Open';
        return;
    }
    event.target.textContent = 'Close';
}








////// list
const ulRef = document.querySelectorAll('.list-item_03');
const ulRef_01 = document.querySelectorAll('.list-item_03')[1];
console.log(ulRef); ///// This is NodeList Это псевдомассив
console.log(ulRef_01); 
///// берём элемент по id
const h3Ref = document.getElementById('title03');
console.log(h3Ref); 
//// to Array
const newArr03 = Array.from(ulRef);
const newArr04 = [...ulRef];

console.log(Array.isArray(newArr03));  
console.log(Array.isArray(newArr04)); 
//// This is very important!
console.log(ulRef_01.nodeType);  
console.log(ulRef_01.nodeName);  
///// смотрим есть ли у тэга такой класс
console.log(h3Ref.classList.contains('title_h3')); //////true
///// заменяем класс
h3Ref.classList.replace('red', 'green')
///// устанавливаем атрибут
h3Ref.setAttribute('alt', '_black');

//////Работает только для картинок и ссылок

//// берём по атрибуту
//// добавляем атрибут к ссылке
const aRef = document.querySelector('[href="google.com"]');
aRef.target = 'blank';
//// если нужно взять атрибут
console.log(aRef.getAttribute('href'));
console.log(aRef);

const imgCatRef = document.querySelector('[src="img/cat02.jpg"]');
console.log(imgCatRef);
imgCatRef.width = 150;
imgCatRef.alt = 'cat walks';

////// заменяем или добавляем текст текст
const h4Ref = document.querySelector('.title_h4');
h4Ref.innerHTML='Peace';
h4Ref.innerHTML = '<span style="color: magenta">Kebab menu</span>';
const h4RefOther = document.querySelector('.title_h4_other');
h4RefOther.innerHTML = ''; 
h4RefOther.insertAdjacentHTML('beforeend',
    '<span style="color: gold">Other text for not everyone</span>'
);
console.log(h4RefOther);

////// создаём элемент <а>
const aRef04 = document.createElement('a');
aRef04.setAttribute('href', 'http://translate.google.com');
aRef04.target = '_black';
aRef04.classList.add('super_link');
aRef04.innerText = 'Translate';
console.log(aRef04);
////// добавляем <а> в <div>
const divRef = document.querySelector('.div_for_a');
divRef.append(aRef04);
console.log(divRef);

////// создаём элемент <img>
const imgNewRef = document.createElement('img');
imgNewRef.src = "img/cat02.jpg";
imgNewRef.alt = 'family';
imgNewRef.width = '250';
////// добавляем <а> в <div>
divRef.append(imgNewRef);
console.log(imgNewRef.src);

//////Выбираем все картинки
const aLotOfImgRef = document.querySelectorAll('img'); //////NodeList
console.log(aLotOfImgRef);
////// Выбираем все картинки и устанавливае один размер
aLotOfImgRef.forEach((el) => {
    // el.width = '100';
});
////// hover
const sqaRef = document.querySelector('.square');
console.log(sqaRef);
/////// добавляем класс
sqaRef.addEventListener('mouseenter', (event) => {
    event.target.classList.add('square02');
});
////// снимаем класс
sqaRef.addEventListener('mouseleave',(event) => {
    event.target.classList.remove('square02');
})

////// Focus, Blur
const blurRef = document.querySelector('.input_for_blur');
blurRef.addEventListener('focus', (event) => {
    event.target.style.background = 'gold';
});

blurRef.addEventListener('blur', (event) => {
    event.target.style.background = 'red';
    event.target.style.border = '3px solid gold';
});





    







