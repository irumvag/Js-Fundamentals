function generateHashtag (str) {
  //filter empty string
  if(str.toString().length==0||str==""||str.isEmpty||str==" ".repeat(str.length))
   {
     return false;
   }//filter empty space
   else if(str.split(' ').filter(a=>a!=" ").join("").lenght>=140 && str.length>140)
    {
      console.log(word);
      return false; 
    }
  //captilize word
  let word=str.split(" ").map((w)=>w.charAt(0).toUpperCase()+w.slice(1)).filter(n=>n!='').join("");
  if(word.length>=140)
    {
      return false;
    }
  //return with # tag
  return "#"+word;
}
