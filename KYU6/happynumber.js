function isHappy(n) {
  if(n==1) return true;//for 1
  let count=n;
  for(let i=1;i<n;i++){
  let str=String(count).split('').map(a=>a**2).reduce((b,c)=>b+c);
  if(str==1) return true;//when the number got one
  count=str;
  }
  return false;//if all fails
}