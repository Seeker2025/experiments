'use strict'
//////favorite tasks

//////Напишите метод 'toFindStone', который принимает название камня
//////рассчитывает и возвращает общую стоимость камней с таким именем и
///// количеством из свойства 'stones'

const score = {
    oneStone: null,
    manyStones: [
        { name: 'Rubin', price: 100, qtv: 10 },
        { name: 'Sapphire', price: 200, qtv: 10 },
        { name: 'brilliant', price: 300, qtv: 10 },
    ],
    toFindStone: function (stoneName) {
        this.oneStone = this.manyStones.find(({ name }) => name === stoneName)
        const { price, qtv } = this.oneStone;
        if (this.oneStone) {
            return price * qtv;
    }
},
    
};
// console.log(score.toFindStone('Sapphire'));     ////// 2000

const arrTech = ['JavaScript', 'React', 'CSS', 'React', 'CSS'];

const newRedis = arrTech.reduce((accum, itm) => {
     accum.hasOwnProperty(itm) ? accum[itm] += 1 : accum[itm] = 1;
     return accum;
    
}, {});
console.log(newRedis);

//////Находим индекс
console.log(arrTech.indexOf('CSS'));
console.log(arrTech.findIndex((itm) => itm === 'React'));

const a = 1;
const isObj = { name: 'brilliant', price: 300, qtv: 10, a};
console.log(isObj.hasOwnProperty('name'));////true
console.log(isObj.na); ////undefined

const objNum = arrTech.reduce((accum, itm) => {
    return {
        ...accum,
        [itm]:accum[itm]?accum[itm]+=1:1
        
    }
    
}, {});
console.log(objNum);
console.log('a');





 


    