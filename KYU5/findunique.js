function findUniq(arr) {
  // let newarr=arr.map(a=>a.toLowerCase())
  // let letter=newarr[0][0];
  // return newarr.filter(a=>!a.includes(letter))[0];
  // let sorted = [...arr].sort((a, b) => {
  // let lowerA = a.toLowerCase();
  // let lowerB = b.toLowerCase();
  // return lowerA < lowerB ? -1 : lowerA > lowerB ? 1 : 0;
  // });
  // console.log(sorted)
  // return sorted[0][0].toLowerCase()==sorted[1][0].toLowerCase()? sorted[sorted.length-1]: sorted[0];
  if(arr.length==1) return arr[0];
  let first=arr[0];
  let hello=[...arr.slice(1)].filter(a=>{
    return a.split(' ').filter(b=>b.split('').every(c=>!first.includes(a))).join(' ').length>0;
  });
  console.log(hello);
}

console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])) //=== 'BbBb');
console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ])) //=== 'foo');
console.log(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]))
console.log(findUniq([ 'silvia', 'vasili', 'victor' ]))