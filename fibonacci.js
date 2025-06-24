const fibonacci = n => {
  //using fibonacci logic and drive an answer using unary operator
  return (n==1)?1:((n==2)?1:fibonacci(n-1)+fibonacci(n-2));
};