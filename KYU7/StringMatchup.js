console.log(['a','a'].find(a=>a=='a'));
function solve(a,b){
  return b.map(c=>a.filter(d=>d===c).length);
}