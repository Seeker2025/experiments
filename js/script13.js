// 'use strict'
//////Экземпляры и классы

/////Задачи. Модуль 5 Урок 2. Артем Рисіч. 08.03.2023
///// Bitwise Not (~)

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
        // console.log('Car.logInfo->carObj', carObj);
    }
    constructor({brand, model, price}={}) {
        // console.log('Выполняется конструктор');
        // console.log(this);

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
    constructor({ boy, girl }) {
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
//////  передаём объект параметров
const exam = new newHome({ boy: 'Pete', girl: 'Sarah'});

// console.log(exam);

// exam.setBoy = 'Steve';
// console.log(exam.getBoy);
// console.dir(newHome);
// console.log(exam.newPassy);



const chopShop = {
    stones: [
        { name: 'Emerald', price: 1300, quantity: 4 },
        { name: 'Dіamond', price: 2700, quantity: 3 },
        { name: 'Sapphire', price: 1400, quantity: 7 },
        { name: 'Rubyd', price: 8300, quantity: 2 },
    ],
    calcTotalPrice(stoneName) {
        const { name, price, quantity } = this.stones.find(elem => elem.name === stoneName)
        // console.log({ name, price, quantity });
        return price * quantity;
    },

};
// console.log(chopShop.calcTotalPrice('Dіamond'));

const chopShop2 = {
    stones: [
        { name: 'Щебінь', price: 1300, quantity: 4 },
        { name: 'Пісок', price: 2700, quantity: 3 },
    ],
};
// console.log(chopShop.calcTotalPrice.call(chopShop2, 'Щебінь'))
// console.log(chopShop.calcTotalPrice.apply(chopShop2, ['Щебінь']))

////Example 2 - Телефонная книга
////Выполните рефакторинг методов объекта phonebook, что бы код заработал

const phonebook = {
    contacts: [],
    add(contact) {
        const newContact = {
            list: 'default',
            ...contact,
            id: this.generateId(),
            createAt: this.getDate(),
        };
        this.contacts.push(newContact);
        return this.contacts;
    },
    generateId() {
        return '_' + Math.random().toString(36)
    },
    getDate() {
        return Date.now();
    },
};

// console.log(
//     phonebook.add({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );

// console.log(
//     phonebook.add({
//         name: 'Paly',
//         email: 'poly@mail.com',
       
//     }),
// );


const calculator = {
    a: 0,
    b: 0,
    c: 0,
    toSet(a, b){
        this.a = a;
        this.b = b;
    },
    toSum(a, b) {
        this.c = a + b;
    }


};

// calculator.toSum(5, 3);
// console.log(calculator.a);
// console.log(calculator.c);

//////конструктор объектов
const constructor = {
    toGet(a, b) {
        this.a = a;
        this.b = b;
    }
}
//////добавили поля в объект
constructor.toGet(1, 3);
// console.log(constructor);
/////создали пустой объект
const newOne = {};
////добавили поля в новый пустой объект
constructor.toGet.call(newOne, 2, 4);
// console.log(newOne);


class Helen {
    static number = 'two';
    constructor({man, woman}) {
        this.man = man;
        this.woman = woman;
    };
    get getMan() {
        return this.man
    }
    set setMan(newName) {
        this.man = newName;
    }
};

const people = new Helen({ man: 'Abraham', woman: 'Rebecca', })
// console.log(people);
// console.dir(Helen);
// console.dir(people.getMan);
people.man = 'Petro';
// console.dir(people.getMan);

//////В класс добавляем счетчик экземпляров
class Home{
    static counter = 0;
    static sum03(b) {
        Home.counter += 1;
        // console.log(this.counter)
    }
    constructor(a) {
        this.a = a;
        Home.sum03(b);
    }
}
const examOwo = new Home(0);
const examTwo = new Home(1);
const examTree = new Home(2);
// console.log(examTwo);
// console.log(Home.b);

/////Задача 1
class Bloger {
    constructor({ name, age, numberOfPosts, topics })
 {
        this.name = name;
        this.age = age;
        this.numberOfPosts = numberOfPosts;
        this.topics = topics;
    }
    getInfo() {
return `User ${this.name} is ${this.age} year old and has ${this.numberOfPosts} post`;
    }
    updatePostCount(value) {
        this.numberOfPosts += value;
    }
}

const mango02 = new Bloger({
    name: 'mango@gmail.com',
    age: 24,
    numberOfPosts: 20,
    topics: ['tech', 'cooking'],
});

console.log(mango02);
mango02.updatePostCount(1);
console.log(mango02.numberOfPosts);
console.log(mango02.getInfo());

//////Задача 2. Сховище
class Storage {
    constructor(items) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
    addItem(item) {
        const newAdd = this.items.indexOf(item);
        if (!~newAdd) this.items.push(item);
        return  this.items;
    }
    removeItem(itemRem) {
        const newRem = this.items.indexOf(itemRem);
        console.log(newRem);
        if (!!~newRem) this.items.splice(newRem, 1);
        return  this.items;
    }
};
const storage = new Storage(['apple', 'lemon', 'orange']);
////Смотрим массив
console.log(storage.getItems());            ////['apple', 'lemon', 'orange']
////Добавляем элемент в массив
console.log(storage.addItem('plum'));       //// ['apple', 'lemon', 'orange', 'plum']
////Удаляем элемент из массива
console.log(storage.removeItem('plum'));    ////['apple', 'lemon', 'orange']
////Смотрим массив
console.log(storage);

///// Задача 3. User
class User02{
    #login;
    #email;
    constructor({login, email}) {
    this.#login = login;
    this.#email = email;
    }
    get getLogin() {
        return this.#login;
    }
    get getEmail() {
        return this.#email;
    }
    set setLogin(newLogin) {
        if(this.#login !== newLogin) this.#login = newLogin;
    }
    set setEmail(newEmail) {
         if(this.#email !== newEmail) this.#email = newEmail;
    }
}

const poly = new User02({
    login: 'Poly',
    email: 'poly@mail.com'
})

////console.log(poly.login); ////undefined
////console.log(poly.email); ////undefined

////Задача 4. Нотатки

////Напиши класс Notes который управляет коллекцией заметок в свойстве items.
////Заметка - это объект со свойствами text и priority.Добавь классу статическое
//// свойство Priority, в котором сохраняется объект с приоритетами.

class Notes{
    static Priority = {
        LOW: 'low',
        NORMAL: 'normal',
        HIGHT: 'high',
    };
    constructor(items) {
        this.items = items;
        
    }
    addNote(note) {
        console.log(this.items.some(itm=>itm.text===note.text))
        if(!this.items.some(itm=>itm.text===note.text)) this.items.push(note);
    }
    removeNote(text) {
        console.log(this.items.findIndex(({ text: findText }) => findText === text))
    if (!!~this.items.findIndex(({ text: findText }) => findText === text)) {
        const indx = this.items.findIndex(({ text: findText }) => findText === text)
        this.items.splice(indx, 1); 
        return;
    }
        return console.log('Немає такої!')
        
    }
    updateNote(text, newPriority) {
        const index = this.items.findIndex(({ text:newText }) => newText === text)
        if (!!~index) {
            this.items[index].priority=newPriority
        }
        }
    }

const myNotes = new Notes([]);
console.log(myNotes);
myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
myNotes.addNote({ text: 'Друга замітка', priority: Notes.Priority.NORMAL });
myNotes.addNote({ text: 'Третя замітка', priority: Notes.Priority.LOW });

console.log(myNotes);

////myNotes.removeNote('Четверта замітка'); ////    -1    Немає такої!
myNotes.removeNote('Третя замітка');        //////   2
console.log(myNotes);


myNotes.updateNote('Третя замітка', Notes.Priority.HIGHT);

////Задача 5
class Toggle {
    constructor(booleen) {
        this.on = booleen;
    }

}
const firstToggle = new Toggle({ isOpen: true });
console.group('firstToggle');
console.log(firstToggle.on);
// firstToggle.toggle()
console.groupEnd('firstToggle');



class User03 {
    constructor(name, salary, overtime) {
        this.name = name;
        this.salary = salary;
        this.overtime = overtime;
    }
    paySalary() {
        console.log('Parent', this.salary * this.overtime * 0.1 + this.salary);
    }
}
const alex03 = new User03('Pete', 1000, 5);

class Customer03 extends User03{
    constructor(   name, salary, overtime, membership) {
        super( name, salary, overtime );
        this.membership = membership;
    }
    showInfo() {
        super.paySalary();
    }
}
const bob03 = new Customer03('Bob', 4000, 5, 'Basic');
console.log(bob03);












