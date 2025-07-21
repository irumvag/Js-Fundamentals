function solution(text, markers) {
    //if(markers.length==0) return text;
    let rem=true;
    return text.split('\n').map(a=>{
        let end;
        a.split('').map((b,i)=>{
            if(markers.includes(b))
            {
                end=i;
            }
        });
        return a.substring(0,end);
    }).join('\n');
    
}
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
console.log(result);

// var res='';
//     for(let i=0;markers.length;i++){
//         for(let j=0;j<text.length;j++){
//         if(markers[i]==text[j])
//         {
//             rem=false;
//         }
//         else{
//             if(text[j]=='\\')
//             {
//                 rem=true;
//             }
//             if(rem){ 
//                 res+=text[j];
//             } 
//         }
//         }
//     }
//     return res;