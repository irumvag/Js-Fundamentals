function alphabetPosition(text) {
  return text.
  toLowerCase().
  split('').
  filter(a=>(97<=a.charCodeAt(0))&&(122>=a.charCodeAt(0))).  //fliter the characters only
  map(b=>b.charCodeAt(0)-96).filter(b=>b>0).join(' ');//map and join with space
}