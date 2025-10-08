function Xbonacci(signature,n){
  let output=[...signature];
  return signature.length>=n?signature.slice(0,n):
  (()=>{
  for(let i=signature.length,j=0;i<n;i++,j++){
    output.push(output.slice(j,j+signature.length).reduce((a,b)=>a+b,0));
  }
    console.log(output)
    return output;
  })();
}