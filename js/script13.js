// 'use strict'
//////Экземпляры и классы

class User {
    constructor(name, salary, overtime) {
        this.name = name;
        this.salary = salary;
        this.overtime = overtime;
    }
    paySalary() {
        console.log('Parent', this.salary * this.overtime * 0.1 + this.salary);
    }
}
const alex = new User('Alex', 1000, 5);

class Customer extends User{
    constructor(name, salary, overtime, membership) {
        super(...arguments);
        this.membership = membership;
    }
    showInfo() {
        super.paySalary();
    }
}
const bob = new User('Bob', 4000, 5, 'Basic');
// bob.paySalary();

//////spread
const str = 'Peace'
const arr = ['a', 'b', 'c'];
const arrTwo = [...arr];
// console.log(...arr);
// console.log(...str);
// console.log(arrTwo);

const obj = {
    one: 'Name',
    two: 'Sarah',
    tree: 'Abraham',
};
// console.log({...obj});//копия объекта

////rest 
function sum(...sum) {
    console.log(sum);
}
// sum(1, 2, 3);

//////Для того, щоб уникнути присвоєння undefined під час деструктуризації
////// неіснуючих властивостей об'єкта, можна задати змінним значення
////// за замовчуванням, які будуть присвоєні лише у тому випадку, якщо об'єкт
////// не містить властивості з таким ім'ям.
const book = {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
};

const bookTwo = book;
const {
    title,
    coverImage = 'https://via.placeholder.com/640/480',
    author,
} = book;
// console.log( title);

//////Замена имени переменной
const {
    title: firstTitle,
    coverImage: firstCoverImage = 'https://via.placeholder.com/640/480',
} = bookTwo;
// console.log(firstTitle);
// console.log(firstCoverImage);


class Car1{
    ////после статического метода не ставим точку с запятой
    static logInfo(carObj) {
        console.log('Car.logInfo->carObj', carObj);
    }
    constructor({brand, model, price}={}) {
        console.log('Выполняется конструктор');
        console.log(this);

        this._brand = brand;
        this._model = model;
        this.price = price;
    }
    get model() {
        return this._model;
    }

    get brand() {
        return this._brand;
    }

    set model(newModel) {
        this._model = newModel;
    }

    set brand(newBrand) {
        this._brand = newBrand;
    }


    changePrice(newPrice) {
        this.price = newPrice;
    }
    updateModel(newModel) {
        this.model = newModel;
    }
}
// console.dir(Car1);
// const carInstance = new Car1({
//     brand :'Audi',
//     model: 'Q3',
//     price: 35000,
// });

// console.log(carInstance);
// console.log(Object.getPrototypeOf(carInstance) === Car1.prototype);

//////Статический метод можно вызвать из класса и не можем из экземпляра.
///// Статический метод не передаётся на экземпляр
// Car1.logInfo(carInstance);
// carInstance.logInfo('car');//////здесь красная ошибка

//////обращение к геттеру
// console.log(carInstance.model); ////// Q3
//////обращение к сеттеру
// carInstance.model = 'Q4';
// console.log(carInstance.model); ////// Q4

class Hero {
    constructor(name, xp) {
        this.name = name;
        this.xp = xp;
    }
}

class Warrior extends Hero {
    constructor(name, xp, weapon) {
        super(name, xp);

        this.weapon = weapon;
    }
}

class Mag extends Warrior {
    constructor(skills, rate, weapon, girl) {
        super(skills, rate, weapon);
        this.girl = girl;
    }
}

class June extends Mag{
    constructor() {
        super(skills, rate, weapon);
    }
}

const mango = new Warrior('mango', 1000, 'alebarda');
// console.log(mango);

// console.log(mango);
//console.dir(Hero);
//console.dir(Warrior);
//console.dir(Mag);
//console.dir(June);

const newMag = new  Mag('flash', 75, 'labris', 'Sarah');
////console.log(newMag);

//console.log(this);

//console.log(Boolean('a'));  //true
//console.log(Boolean(2));    //true
//console.log(!!'a');         //true
//console.log(!!2);           //true

const a = 5; // 00000000000000000000000000000101
const b = -3; // 11111111111111111111111111111101

// console.log(~a); // 11111111111111111111111111111010
// Expected output: -6

// console.log(~b); // 00000000000000000000000000000010
// Expected output: 2

//console.log(!!5);     ////true
//console.log(!'a');    ////false

class newHome{
    static newPass = 'peace';
    constructor(boy, girl) {
        this.boy = boy;
        this.girl = girl;
    }
    get getBoy() {
        return this.boy;
    }
    set tBoy(newName) {
        this.boy = newName;
        
    }
}
const exam = new newHome('Pete', 'Sarah');

console.log(exam);

exam.setBoy = 'Steve';
console.log(exam.getBoy);
console.dir(newHome);
console.log(exam.newPassy);


