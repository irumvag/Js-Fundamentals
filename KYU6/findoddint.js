function findOdd(n) {
  if(n.length==1) return n[0];//for one number
  let test={};
  n.forEach(a=>test[a]=(test[a]||0)+1);
  return +Object.keys(test).filter(a=>test[a]%2!=0)[0];//for many numbers in array
}