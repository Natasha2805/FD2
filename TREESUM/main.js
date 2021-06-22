'use strict'
let arr = [ 5, 7, 
    [ 4, [2], 8, [1,3], 2 ], 
    [ 9, [] ], 
    1, 8
  ];
 

function treeSum (arr){
  let newArr =  arr.flat(Infinity);
  let sum = 0;
  for(let i=0; i< newArr.length;i++){
    sum += newArr[i];
  }
  return sum;
}

console.log( treeSum (arr))




