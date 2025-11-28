function isPalindrome(x) {
  return x.toLowerCase() == Buffer(x.toLowerCase()).reverse();
}
