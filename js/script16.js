//////// DOM
//////Модалка

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


// <ul>
 //     <li><a href ="/vodka">Vodka</a></li>
 //     <li><a href ="/beer">Beer</a></li>
 //     <li><a href ="/rum">Rum</a></li>
 //     <li><a href ="/whiskey">Whiskey</a></li>
// </ul>

const drinks = ['Vodka', 'Beer', 'Rum', 'Whiskey'];
const rootRef = document.querySelector('#root');
const btnRef02 = document.querySelector('#openMenu');

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
ul.classList.add('hide');

const menu = drinks.map((li) => {
    return createLi(li);
});

console.log(menu);

ul.append(...menu);
rootRef.append(ul);

btnRef02.addEventListener('click', onBtn);
    
    
    
function onBtn(event){
    if (ul.classList.contains('show')) {
        event.target.textContent = 'Close menu';
        return;
    }
    event.target.textContent = 'Open menu';
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
    







