function changer(str) { 
  let alhabt='abcdefghijklmnopqrstuvwxyz';
  return str.toLowerCase().split('')
    .map(c=>(c>='a'&&c<'z')?alhabt[alhabt.indexOf(c)+1]:c=='z'?'A':c)
    .map(d=>('aiueo'.includes(d))?d.toUpperCase():d).join('');
}