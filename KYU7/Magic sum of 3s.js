function magicSum(numbers) {
  return numbers
    .filter(a=>a%2!=0)
    .map(String)
    .filter(s=>s.includes('3'))
    .map(Number)
    .reduce((a,b)=>a+b,0);
}