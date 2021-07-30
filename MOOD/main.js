"use strict";


function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
var colors={
    1: 'красный',
    2: 'оранжевый',
    3: 'жёлтый',
    4: 'зелёный',
    5: 'голубой',
    6: 'синий',
    7: 'фиолетовый'
}
let newobj={};
console.log( 'цветов: ' + colorsCount );
for ( var i=1; i<=colorsCount; i++ ) {
    var n=randomDiap(1,7);
    var colorName=colors[n];
    console.log( colorName );
}
}

mood(3);
