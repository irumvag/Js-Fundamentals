// function factorialDigitByDigit(n){
// let result = [1];

//     for (let i = 2; i <= n; i++) {
//         let carry = 0;

//         // Multiply each digit by i
//         for (let j = 0; j < result.length; j++) {
//             let product = result[j] * i + carry;
//             result[j] = product % 10; // store single digit
//             carry = Math.floor(product / 10); // carry over
//         }

//         // Handle remaining carry
//         while (carry > 0) {
//             result.push(carry % 10);
//             carry = Math.floor(carry / 10);
//         }
//     }

//     // Reverse to get the correct order
//     return result.reverse().join("");
// }
function factorialDigitByDigit(n){

  let result=[1];

  for(let i=2; i<=n; i++) {
    let carry=0;
    
    for(let j=0; j < result.length; j++){
      let product = result[j] * i + carry;
      result[j]=product % 10;
      carry = Math.floor(product / 10);
    }
    
    while(carry > 0){
      result.push(carry % 10);
      carry=Math.floor(carry/10)
    }
    
  }
  return result.reverse().join('');
}

// Example usage:
try {
    console.log("5! =", factorialDigitByDigit(5));   // 120
    console.log("10! =", factorialDigitByDigit(10)); // 3628800
    console.log("50! =", factorialDigitByDigit(50)); // Very large number
} catch (err) {
    console.error(err.message);
}