"use strict"

//first 
/*
let stringUser = prompt('введите сроку');
function findWord(stringUser){
    let count = 0;
    let arrString = ["а", "о","и", "е", "ё", "э", "ы", "у", "ю", "я","А","О","И","Е","Ё","Ы","У","Ю","Я"];
    for (let i = 0; i< stringUser.length; i++ ){
        for (let j=0; j<arrString.length;j++){
           if(stringUser[i] === arrString[j]){
               count++;
           }
        }
    }
    return count ? count : "Гласных букв нету";
}

console.log(findWord());
*/

//second 



let str = prompt('введите строку');
function countLetter(str){
    let arrayStr = Array.from(str).filter(i => 'аоиеёэыуюяАОИЕЁЭЫУЮЯ'.includes(i)).length;
    return arrayStr;
}
console.log(countLetter(str));