"use strict"

//first 
/*function findWord(){
    let stringUser = prompt('введите сроку');
    let count = 0;
    let arrString = ["а", "о","и", "е", "ё", "э", "ы", "у", "ю", "я"];
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


function countLetter(){
    let str = prompt('введите строку');
    let count = 0;
    let arrayStr = Array.from(str).filter(i => 'аоиеёэыуюя'.includes(i)).length;
    return arrayStr;
}
console.log(countLetter());