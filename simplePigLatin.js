function pigIt(str,word=str.split(' ')){
  return word.map((w)=>(w.length>=2)?(w.slice(1)+w.charAt(0)+"ay"):w).join(' ');
  }
