function solution(text, markers) {
    let result=[];
    let start=true;
    let words=text.split('\n');
    for(let word of words)
        {
         let temp=[];
         word.split('').map(a=>
            {
                if(markers.includes(a))
                {
                start=false; 
                }
                if(start) temp.push(a);
            }
          );
          result.push(temp.join(''));
          start=true;
        }
    let res=result.join('\n').split('');
    for(let j=res.length-1;j>=0;j--)
        {
        if(res[j]==' ')
        {
            res.pop();
        }
        else{
            break;
        }
        } 
    console.log(res);  
    return res.join('');
}
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
console.log(result);

function solution(input, markers) {
  return input.split('\n')
    .map(str => markers.reduce((s, m) => s.split(m)[0], str).trimEnd())
    .join('\n');
}
