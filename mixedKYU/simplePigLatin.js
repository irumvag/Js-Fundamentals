function pigIt(str,word=str.split(' ')){
  //return collected Kata
  return word.map((w)=>(w.length>1)?(w.slice(1)+w.charAt(0)+"ay"):(['!','.',',','?'].includes(w)?w:w+'ay')).join(' ');
}
