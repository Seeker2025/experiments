'use strict'
//// Function

////Замыкание
const makeSheff = function (name) {
    const makeDish = function (dish) {
        console.log(`${name} готовит ${dish}`);
    };
    return makeDish;
};

const mango = makeSheff('Mango');

mango('Котлеты');
mango('Пирожки');

console.dir(mango);

const poly = makeSheff('Poly');
 
poly('Чай');
poly('Омлет');

