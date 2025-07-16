function sumIntervals(intervals) {
  let res=0;
  let array=[];
  intervals.forEach(a=>array.push(a[0],a[1]));
  let newarray=[... new Set(array)];
  console.log(newarray)
  newarray.sort((a,b)=>a-b);
  console.log(newarray);
  for(let i=2;i<newarray.length;i+=1)
  {
    res+=newarray[i-1]-newarray[i-2];
  }
  return res;
}
console.log(sumIntervals([
   [1, 5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
])); //19
console.log(sumIntervals([
   [1, 2],
   [6, 10],
   [11, 15]
])); //9
console.log(sumIntervals([
   [0, 20],
   [-100000000, 10],
   [30, 40]
]));//