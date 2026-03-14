function solve(s){
  let count=0
  for(let i=0;i<s.length;i++){
    for(let j=i;j<s.length;j++)
      {
        if(Number(s[j]%2===1)) count++;
      }
  }
  return count
}
    console.log(solve("1341"),7);
    console.log(solve("1357"),10);
    console.log(solve("13471"),12);
    console.log(solve("134721"),13);
    console.log(solve("1347231"),20);
    console.log(solve("13472315"),28);