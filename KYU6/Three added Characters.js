// function addedChar(s1, s2){
//   let str1={},str2={};
//   for(let i of s1.split('')){
//     str1[i]=(str1[i]||0)+1;
//   }
//   for(let i of s2.split('')){
//     str2[i]=(str2[i]||0)+1;
//   }
//   for(let elem of Object.keys(str2)){
//     if(str1[elem]!=str2[elem]){
//         console.log(str1[elem],str2[elem])
//         return elem;
//     }
//   }
// }

//research
function addedChar(s1, s2){
 let s11 = [...s1].sort()
 let s22 = [...s2].sort()
 console.log(s11,s22)
 return s22.find((el, i) => el !== s11[i])
}
let str1 = "hello";
let str2 = "checlclo";
console.log(addedChar(str1, str2));
