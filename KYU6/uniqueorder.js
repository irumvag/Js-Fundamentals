var uniqueInOrder=function(iterable){
  let output=[],temp;
  return (!iterable.length)?[]: //for empty array
  (iterable.length==1)?[...iterable]://for size 1
  (()=>{//function to return the result
    temp=iterable[0];
    let text=iterable.slice(1);
    output.push(temp);
    for(let i of text)
      {
        if(i==temp){
          continue;
        }
        else
        {
          temp=i;
          output.push(i);
        }
      }
    return output
  })();
}