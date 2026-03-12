function evenOrOdd(n) {
//   if(n%2===0) return 'Even';
//   return 'Odd'
  let result=n%2==0?'Even':'Odd';
  evenOrOdd[n]=result;
  return result
}
for(let i=-10000;i<10000;i++){
  evenOrOdd[i]=evenOrOdd(i);
}