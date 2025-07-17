function rotate(array,n){
   if(n==0||array.length==0) return array;
    if(n>0){
    for(let i=0;i<n;i++)
    {
      array.unshift(array.pop());
    }
    console.log();
    return array;
  }else{
    for(let i=n;i<0;i++)
    {
      array.push(array.shift());
    }
    console.log();
    return array;
  }
}




var data = [1, 2, 3, 4, 5];

console.log(rotate(data, 1)); // => [5, 1, 2, 3, 4]
console.log(rotate(data, 2)); // => [4, 5, 1, 2, 3]
// console.log(rotate(data, 3)); // => [3, 4, 5, 1, 2]
// console.log(rotate(data, 4)); // => [2, 3, 4, 5, 1]
// console.log(rotate(data, 5)); // => [1, 2, 3, 4, 5]

// console.log(rotate(data, 0)); // => [1, 2, 3, 4, 5]

// console.log(rotate(data, -1)); // => [2, 3, 4, 5, 1]
// console.log(rotate(data, -2)); // => [3, 4, 5, 1, 2]
// console.log(rotate(data, -3)); // => [4, 5, 1, 2, 3]
// console.log(rotate(data, -4)); // => [5, 1, 2, 3, 4]
// console.log(rotate(data, -5)); // => [1, 2, 3, 4, 5]