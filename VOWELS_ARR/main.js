"use strict"


// filter
/*let str = prompt('введите строку');
function countLetter(str){
    let arrLetter = ['а','о','и','е','ё','э','ы','у','ю','я','А','О','И','Е','Ё','Э','Ы','У','Ю','Я'];
    let arr = str.split('');
    let arrayLength = arr.filter((i)=>arrLetter.includes(i)).length;
    return arrayLength;
}
console.log(countLetter(str));*/


// forEach
/*let str = prompt('введите строку');
function countLetter(str){
    let arrLetter = ['а','о','и','е','ё','э','ы','у','ю','я','А','О','И','Е','Ё','Э','Ы','У','Ю','Я'];
    let arr = str.split('');
    let count = 0;
    arr.forEach((i) => {
        if(arrLetter.indexOf(i)!==-1){
            count++;
        }
      })
      return count;
}
console.log(countLetter(str));*/

// reduce
let str = prompt('введите строку');
function countLetter(str){
    let arrLetter = ['а','о','и','е','ё','э','ы','у','ю','я','А','О','И','Е','Ё','Э','Ы','У','Ю','Я'];
    let arr = str.split('');
    let count = arr.reduce( (total, i) => {
        if (arrLetter.indexOf (i) !==-1) { 
           total++; 
        }
        return total; 
     }, 0);
     return count;
}
console.log(countLetter(str));