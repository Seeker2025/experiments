'use strict'

// console.log('a');

//////Используем filter для удаления элемента из массива
const arrManyNames = ["Marilyn", "Padilla", "Naomi"];
// console.log(arrManyNames);
const newNames = arrManyNames.filter(item => item !== "Marilyn");
// console.log(newNames);

//////В массиве повторяющиеся элементы. Выбираем в новый массив только уникальные
const subj =['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
// console.log(subj);
const uniquSubj = subj.filter((itm, index, arr) => arr.indexOf(itm) === index);
// console.log(uniquSubj);

////// indexOf(), findIndex()
// console.log(subj.indexOf('фізика'));                             //1
// console.log(subj.findIndex((itm, index, arr)=>itm ==='фізика')); //1

//////Способы записи функций в объекте. Смотрим this
const newObj = {
    name: 'Sarah',
    alreadyFun() {
        console.log(this.name, this);
//////  Sarah {name: 'Sarah', alreadyFun: ƒ, toRump: ƒ, info: ƒ, toPeer: ƒ}    
    },
    toRump: function(){
        console.log('Type');
        console.log(this);
    },  
////// Type {name: 'Sarah', alreadyFun: ƒ, toRump: ƒ, info: ƒ, toPeer: ƒ}   
    info(){
            const greet = () => {console.log(this);};
            greet();
    },
////// {name: 'Sarah', alreadyFun: ƒ, toRump: ƒ, info: ƒ}  
    toPeer: () => { console.log(this); },
/////  undefined    
};
// newObj.toRump();
// newObj.alreadyFun();
// newObj.info();
// newObj.toPeer();



//////Напишите метод 'calcTotalPrice', который принимает название камня и рассчитывает
//////и возвращает общую стоимость камней с таким именем и количеством из свойства
////// 'stones'
const shop = {
    // jem: null,
    stones: [
        {name: 'Rubin', price: 100, qtv: 10},
        {name: 'Diamond', price: 150, qtv: 15},
        {name: 'Saphire', price: 150, qtv: 15},
    ],
    calcTotalPrice(stone){
        const jem = this.stones.find(({ name }) => {
             return name === stone;
        });
        const { price, qtv } = jem;
        if (jem) {
            return price * qtv;
        }
    },
};
console.log(shop.calcTotalPrice('Diamond'));

const icon = {
    _color: '#fff',
    _size: '24px',
    _padding: '16px',

    color(newColor) {
        this._color = newColor;
        return this;
    },
    size(newSize) {
        this._size = newSize;
        return this;
    },
    padding(newP) {
        this._padding = newP;
        return this;
    },
};

//////Такая запись работает, если в каждый метод добавить return this
icon.color('blue').size('40px').padding('60px');
console.log(icon);











