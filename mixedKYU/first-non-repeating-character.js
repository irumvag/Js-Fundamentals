function firstNonRepeatingLetter(s,letters=s.split('')) {
  const lower = s.toLowerCase();
  //checking repetion of letters
  for (let i = 0; i < s.length; i++) {
    if (lower.indexOf(lower[i]) === lower.lastIndexOf(lower[i])) {
      return s[i];
    }
  }
  return '';
}
let str="gadanacletirumva";
console.log(str.split(''));