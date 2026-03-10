function calculate(expression){
  let expr=expression.replaceAll("$","/");
  let symbols=[];
  let ops=[];
  for(let i=0;i<expr.length;i++){
    if(expr[i]==="") continue;
    if(expr[i]==="/") symbols.push('/');
    if(expr[i]==="*") symbols.push('*');
    if(expr[i]==="+") symbols.push('+');
    if(expr[i]==="-") symbols.push('-');
  }
  if(!symbols.length) return String(expr);
  let sum=ops[0];


  if(symbols.length==1){
    let operands=expr.split(symbols[0]).map(Number);
    if(operands.length==1) return Number(symbols[0]+operands[1]);
    if(symbols[0]==="/"){
        let result=operands[0]/operands[1];
        return result?result:'400: Bad request';
    }
    if(symbols[0]==="*"){ 
        let result=operands[0]*operands[1];
        return result?result:'400: Bad request';
    }
    if(symbols[0]==="+"){
        let result=operands[0]+operands[1];
        return result?result:'400: Bad request';
    }
    if(symbols[0]==="-"){ 
        let result=operands[0]-operands[1];
        return result?result:'400: Bad request';
    }
  }
  return sum;
}


console.log(calculate('1+1'))//     => '2'
console.log(calculate('10$2'))//    => '5'
console.log(calculate('1.5*3'))//   => '4.5'
console.log(calculate('5+5+5+5'))// => '20'
console.log(calculate('1000$2.5$5+5-5+6$6'))// =>'81'
console.log(calculate('10-9p'))//   =>  '400: Bad request'