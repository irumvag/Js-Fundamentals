const calc = function (expression) {
  let expr=expression.replaceAll(" ","");
  let numbers=[];
  for(let i=0;i<expr.length;i++){
    if(expr[i]==="") continue;
    if(expr[i]==="/") numbers.push('/');
    if(expr[i]==="*") numbers.push('*');
    if(expr[i]==="+") numbers.push('+');
    if(expr[i]==="-") numbers.push('-');
    if(expr[i]==="(") numbers.push('(');
    if(expr[i]===")") numbers.push(')');
  }
  if(!numbers.length) return Number(expr);
  if(numbers.length==1){
    let operands=expr.split(numbers[0]).map(Number);
    if(operands.length==1) return Number((numbers[0]+operands[1]));
    if(numbers[0]==="/") return Number(operands[0])/Number(operands[1]);
    if(numbers[0]==="*") return Number(operands[0])*Number(operands[1]);
    if(numbers[0]==="+") return Number(operands[0])+Number(operands[1]);
    if(numbers[0]==="-") return Number(operands[0])-Number(operands[1]);
  }
  
  return numbers
};

  console.log(calc('1+1'), 2)
  console.log(calc('1 - 1'), 0)
  console.log(calc('1* 1'), 1)
  console.log(calc('1 /1'), 1)
  console.log(calc('-123'), -123)
  console.log(calc('123'), 123)
  console.log(calc('2 /2+3 * 4.75- -6'), 21.25)
  console.log(calc('12* 123'), 1476)
  console.log(calc('2 / (2 + 3) * 4.33 - -6'), 7.732)

