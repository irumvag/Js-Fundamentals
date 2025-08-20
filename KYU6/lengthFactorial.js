function count(n) {
  let arr=Array.from({length:n},(_,i)=>i+1).slice(1);
  return arr.reduce((a,b)=>~~Math.log(b)+a,0);
}
console.log(count(5))