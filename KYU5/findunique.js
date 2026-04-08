function findUniq(arr) {
  let unique=arr.map(a=>Array.from(new Set([...(a.toLowerCase())].sort())).join('')) // unique value and sort
  let uniqueValue=unique.map((b,i)=>unique.lastIndexOf(b)==unique.indexOf(b)?i:'--').filter(b=>b!='--')[0]//unique value index calculate
  return arr[uniqueValue] //return value
}

console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])) //=== 'BbBb');
console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ])) //=== 'foo');
console.log(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]))
console.log(findUniq([ 'silvia', 'vasili', 'victor' ]))