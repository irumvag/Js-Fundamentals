function genfib() {
  let a = 0, b = 1;
  return function fib() {
    let current = a;
    [a, b] = [b, a + b];
    return current;
  };
}

