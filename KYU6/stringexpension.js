function stringExpansion(s) {
  if(s=="") return s;
  let output=[];

//   for(let i=0;i<s.length;i+=2)
//     {
//      if(s[i].toLowerCase()===s[i].toUpperCase()){
//        output.push(s[i+1].repeat(Number(s[i])));
//      }
//       else{
//         output.push(s[i]);
//       }
//     }
//   return output.join('');
}
function repeater(str,times){
    return str.repeat(NUmber(times));
}
console.log(stringExpansion('3abc')=='aaabbbccc');
console.log(stringExpansion('3D2a5d2f')=='DDDaadddddff');
console.log(stringExpansion('0d0a0v0t0y')=='');
console.log(stringExpansion('3d332f2a')=='dddffaa');
console.log(stringExpansion('abcde')=='abcde');
console.log(stringExpansion('a2bcde')=='abbccddee');