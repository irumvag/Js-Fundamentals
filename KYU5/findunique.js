function findUniq(arr) {
  let output=[];
  for(const [i,v] of arr.entries())
  {
    for(const [j,h] of arr.entries())
    {
        if( i!=j && h.toLowerCase().split('').includes(v[0].toLowerCase()) ){
          output.push(h)  
        }
    }
  }
  console.log(output);
}

console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb');
console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo');