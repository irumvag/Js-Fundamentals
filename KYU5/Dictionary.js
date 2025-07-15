function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern) {
  const array=Array.from(this.words);
  //console.log(array);//let len=pattern.split('').filter(a=>a!=="?");
  let newArray=array.filter(a=>a.length==pattern.length);
  console.log(pattern,newArray);
  let res=[];
  
  if(newArray.length==0) return [];
  
  if(!pattern.includes('?')){
    
  newArray.forEach(a=>{
    if(a==pattern)
      {
        res.push(a);
      }
  });
    
  }
                   
  else {
    newArray.forEach(a=>{
    let char=a.split('');
      let check=true;
      char.forEach(
      (c,i)=>{
        check=(c==pattern[i]||pattern[i]=='?')?check:false;
      }
      );
      if(check){
        res.push(a);
      }
      
  });           
      }
  return res;
}