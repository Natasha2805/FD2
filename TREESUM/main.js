'use strict'
/*let arr = [ 5, 7, 
    [ 4, [2], 8, [1,3], 2 ], 
    [ 9, [] ], 
    1, 8
  ];
 

function treeSum (){
  for(let i=0; i< arr.length;i++){
    sum += arr[i];
  }
  if ()
  let sum = 0;
  for(let i=0; i< newArr.length;i++){
    sum += newArr[i];
  }
  return sum;
}

console.log( treeSum (arr))*/



 function treeSum() {
  if(arr.length === 0){
      return 0;
  }
  function add(arr, i){
      console.log(arr[i]);
      if(i === arr.length-1){
          return arr[i];
      }
      return arr[i] + add(arr, i+1);
  }
  return add(arr, 0);
};
treeSum([ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ], 1, 8]);
