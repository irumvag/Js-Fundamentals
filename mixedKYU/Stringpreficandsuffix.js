function solve(s){  
if(s.length==0 || s.length==1) return 0;
let l=s.length;
let half=Math.floor(l/2);
for(let len=half;len>0;len--)
{
    const preffix=s.substring(0,len);
    const suffix=s.substring(l-len);
    if(preffix==suffix){
        return len;
    }
}
return 0;
//   let last=s.lastIndexOf(s[0]);
//   if(last==0) return 0;
//   if(s.length==2&&last==1) return 1;
//   let check=0;
//   for(let i=last,j=0;i<s.length;i++,j++)
//     {
//       if(s[i]==s[i]){
//         check++;
//       }
//     }
//   return check==s.length-last?check:0;
}
console.log(solve("abcd")); //= 0, because no prefix == suffix. 
console.log(solve("abcda")); //= 1, because the longest prefix which == suffix is "a".
console.log(solve("abcdabc")); //= 3. Longest prefix which == suffix is "abc".
console.log(solve("aaaa")); //= 2. Longest prefix which == suffix is "aa". You should not overlap the prefix and suffix
console.log(solve("aa")); //= 1. You should not overlap the prefix and suffix.
console.log(solve("a")); //= 0. You should not overlap the prefix and suffix.