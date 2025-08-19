const primePrimes = n => {
  if(n<2) return [0,0];
  let arr=primes(n);
  let fract=[];
  console.log(arr);
  arr.forEach((a,i)=>{
    if(!(i==arr.length-1)){
    for(let j=i+1;j<arr.length;j++){
        fract.push(a/arr[j]);
    }
    }
  });
  return [fract.length,~~fract.reduce((a,b)=>a+b,0)]
  console.log(fract);
};
function primes(n,arr=Array.from({length:n},(_,i)=>i+1).slice(1)){
  let res=[];
  for(const a of arr)
  {
   if(prime(a)) res.push(a);
  }
  return res;
}
function prime(m){
  for(i=2;i<=Math.sqrt(m);i++){
    if(m%i==0) return false;
  }
  return true;
}
console.log(primePrimes(6));