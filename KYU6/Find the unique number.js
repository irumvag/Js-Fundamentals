function findUnique(numbers) {
    if(numbers.length==1) return numbers[0];
    let unique=new Set([...numbers])
    for(let i of [...unique]){
      if(numbers.find(b=>b==i)==1){
        return i
      }
    }
}
