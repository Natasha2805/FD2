"use strict"


// filter
function countLetter(){
    let str = prompt('введите строку');
    let arrLetter = ['а','о','и','е','ё','э','ы','у','ю','я','А','О','И','Е','Ё','Э','Ы','У','Ю','Я'];
    let arr = str.split('');
    let arrayLength = arr.filter((i)=>arrLetter.includes(i)).length;
    return arrayLength;
}
console.log(countLetter());


// forEach
/*function countLetter(){
    let str = prompt('введите строку');
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
console.log(countLetter());*/

// reduce
/*function countLetter(){
    let str = prompt('введите строку');
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
console.log(countLetter());*/