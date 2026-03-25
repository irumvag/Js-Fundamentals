function solution(number){
  if(number<0) return 0;
  return Array.from({length:number-1},(_,i)=>i+1).
         filter(a=>a%3==0||a%5==0).
         reduce((a,b)=>a+b,0)
}