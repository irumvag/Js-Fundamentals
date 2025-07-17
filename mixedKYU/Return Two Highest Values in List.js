function twoHighest(arr) {
  if(arr.isEmpty)
    {
      return arr;
    }
  else{
   if(Array.from(new Set([...arr])).length==1||arr.length==1)
   {
     return [arr[0]];
   }
    else{
        let unique=Array.from(new Set([...arr]));
        if (unique.length==2)
          { 
            return unique;
          }
          else{
            let sortedarray=unique.sort((a,b)=>b-a);
            return sortedarray.slice(0,2);
            
    }
  }
  }
}