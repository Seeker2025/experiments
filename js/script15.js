//////// DOM
//////Примеры из урока Саши Репеты
//////Події клавіатури


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

console.log('a');

////// Події клавіатури
/////В отличие от других событий, события клавиатуры обрабатываются на документе,
/////а не на конкретном элементе.Объекты клавиатуры происходят из
///// базового класса KeyboardEvent.
// document.addEventListener("keydown", event => {
//   console.log("key: ", event.key);
//   console.log("code: ", event.code);
//   console.log(event.type);
// });


//////Пример из конспекта. Модуль 6. Події клавіатури
// const clearLogBtn03 = document.querySelector(".js-clear03");
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// // console.log(clearLogBtn03)

// document.addEventListener("keydown", logMessage);
// // document.addEventListener("keyup", logMessage);
// clearLogBtn03.addEventListener("click", reset);

//      function logMessage(event) {
//         const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>:${event.type}</li>
//       <li><b>Key</b>:${event.key}</li>
//       <li><b>Code</b>:${event.code}</li>
//     </ul>
//   </div>`;
         
//   if (event.type === "keydown") {
//     incrementKeypressCounter();
//   }
//     return logList.insertAdjacentHTML("afterbegin", markup);
// }
 
//  function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }


 




const thisIsBtnForClear = document.querySelector(".btn_clear_big");
console.log(thisIsBtnForClear);
const block = document.querySelector(".this_is_box");

// const numPlus = document.querySelector(".numPlus");

console.log(block);

let newNum = 0;


document.addEventListener('keydown', thisFunForKey);
function thisFunForKey() {
    funClear();
    numPlusOne();
    const thisTexxt = `
        <p style="color: red; background: black;">text</p>

        ${newNum}
        `;
    // console.log(keyEvent.key);
    return block.insertAdjacentHTML('afterbegin', thisTexxt)
}

thisIsBtnForClear.addEventListener('click', funClear);
function funClear() {
    block.innerHTML = '';
}





// const btnPlus = document.querySelector(".btn_plus");
// console.log(btnPlus);
// btnPlus.addEventListener('click',funNumPlus);

function numPlusOne() {
    newNum += 1;
    return newNum;
}

// function funNumPlus() {
//     numPlusOne()
//     const numPlusTwo = `
//     text 022 ${new000}
//         `
// return numPlus.insertAdjacentHTML('afterbegin', numPlusTwo)
// },



////// Клавіші-модифікатори
    document.addEventListener('keydown', (event) => {   
//event.preventDefault();//////предотвращает сочетание клавиш по умолчанию
// console.log(event.ctrlKey);//// при нажатии Ctrl возвращает false или true
// console.log(event.altKey);//// при нажатии Alt возвращает false или true
//onsole.log(event.code);//// код клавиши
console.log(event.metaKey);//// код клавиши
    })

/////Формы
const formRef = document.querySelector('.js-register-form');
console.log(formRef);
formRef.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);

    const nameRef = document.querySelector('input[name="name"]');
    const emailRef = document.querySelector('input[name="email"]');
    // console.log(nameRef.value); //////  Vova
    // console.log(emailRef.value);//////  myprojectonclouddrive@gmail.com

 /////event.target Это сама форма. Элемент на котором произошло событие.
 ///// Полная замена this

    // console.log(event.target);
    // console.log(Array.isArray(event.target.elements)); ////false

    
    // console.log(event.target.elements.name.value);
 ////радиокнопка
    // console.log(event.target.elements.subscription.value);

//// Нормальный способ. 
    const { subscription } = event.target.elements;
    const { name } = event.target.elements;
////    console.log(subscription.value);
////    console.log(name.value);
///// Создаём объект. Это нормальная отправка формы
    const data = {
        name,
        subscription,
       
    };
    ////    console.log(data);
    
    const form = event.target;
    const formData = new FormData(form);
    console.log(4);
    // console.log(form);
    console.log(formData);
    const isObg = {};
    formData.forEach((value, key) => {
        
        isObg[key] = value;

    });
    console.log(isObg);

})

// const arr = [1, 2];
// console.log(Array.isArray(arr));

const inputRef = document.querySelector('.js-input');
const licenseRef = document.querySelector('.js-license');
const btnRef = document.querySelector('.js-button');
const spanRef = document.querySelector('.js-button > span');
// console.log(inputRef);
// console.log(licenseRef);
// console.log(btnRef);
// console.log(spanRef);

////// Input event
// inputRef.addEventListener('input', (event) => {
//     console.log(event.target.value);
// });
// ///// Check box
// licenseRef.addEventListener('change', (event) => {
//     console.log(event.target.checked);
// });

//  inputRef.addEventListener('input', (event) => {
//      const inputValue = event.target.value;
//      licenseRef.addEventListener('change', (event) => {
//          btnRef.disabled = !event.target.checked;
//          btnRef.textContent = "Register as" + " " + inputValue;

//  });
// });

///// Focus
inputRef.addEventListener('focus', (event) => {
   event.target.style.border = '5px solid red';
   event.target.style.background = 'gold';
  
});

///// Blur Событие обратное Focus
inputRef.addEventListener('blur', (event) => {
   event.target.style.border = '5px solid green';
});
































