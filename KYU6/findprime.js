function isPrime(number) {
  if(number<2) return false;
  if (number==2) return true;
  for(i=2;i<=Math.sqrt(number);i++){
    if(number%i==0) return false;
  }
  return true;
}

function getPrimes(start, finish) {
  let output=[];
  let sm=start>finish?finish:start;
  let lg=(sm==start)?finish:start;
  for(;sm<=lg;sm++){
    if(isPrime(sm)){
      output.push(sm);
    }
  }
  return output;
}