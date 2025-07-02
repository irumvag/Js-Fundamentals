let s=0;
for(let i=0;i<100;i++)
{
    console.log("hhh",i," ",fac(i));
}

function fac(n){
      return (n<0)?null:((n===0)?'1':(Array.from({ length: n }, (_, i) => i + 1).reduce((a,b)=>a*b,1).toString()));
}

function factorial(n) {
  if (n < 0) return null;
  if (n === 0) return '1';

  // Start with [1] (which is 1)
  let result = [1];

  for (let i = 2; i <= n; i++) {
    let carry = 0;
    for (let j = 0; j < result.length; j++) {
      let prod = result[j] * i + carry;
      result[j] = prod % 10;
      carry = Math.floor(prod / 10);
    }
    while (carry > 0) {
      result.push(carry % 10);
      carry = Math.floor(carry / 10);
    }
  }
  // Digits are reversed, so join them in reverse order
  return result.reverse().join('');
}
console.log(factorial(25));   
console.log(factorial(100)); 