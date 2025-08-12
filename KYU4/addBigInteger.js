function add(a, b) {
  let result='';
  let carry=0;
  let max=Math.max(a.length,b.length),i=max-1;
  a=a.padStart(max,'0');
  b=b.padStart(max,'0');
  while(i>=0)
    {
        let dig1=+a[i];
        let dig2=+b[i];
        let curSum=dig1+dig2+carry;
        let resdig=curSum % 10;
        carry=Math.floor(curSum/10);
        result=resdig+result;
        i--;
    }
    return (carry>0)?carry+result:result; 
}
const numA = "712569312664357328695151392";
const numB = "8100824045303269669937";
const result = add(numA, numB);
console.log(result); // Output: 712577413488402631964821329