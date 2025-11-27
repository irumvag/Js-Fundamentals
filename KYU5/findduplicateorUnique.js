function duplicateOrUnique(arr){
  let dup=[];
  for(let i=0;i<arr.length;i++){
    if(arr.lastIndexOf(arr[i])!=i){
      dup.push(arr[i]);
    }
  }
  if(dup.length==1){
    return dup[0];
  }
  for(let i of arr){
    if(!dup.includes(i)) return i;
  }
//   let dup=arr.filter((a,i)=>arr.slice(i+1).includes(a));
//   console.log(dup);
//   if(dup.length==1) return dup[0];
//   let answer=[...arr.filter(a=>!dup.includes(a))];
//   console.log(answer);
//   return answer[0];
  
}

console.log(duplicateOrUnique[1,2,3,6,5,4,1]), 1);
console.log(duplicateOrUnique[1,2,3,1,2,3,4]), 4);
console.log(duplicateOrUnique[1,2,3,6,5,4,6]), 6;
console.log(duplicateOrUnique[3,6,9,2,5,8,1,4,8,7]), 8);