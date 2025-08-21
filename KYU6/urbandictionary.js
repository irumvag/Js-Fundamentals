class WordDictionary {
    dict=[];
    addWord(word) {
      this.dict.push(word);
    }

    search(word) {     
      if(word.includes('.')){
        let l=word.length;
        let w=this.dict.filter(a=>a.length==l);
        if(!w.length) return false;
        // let match=w.map(b=>b.split('').every((a,i)=>a=='.'||a==word[i]).length?true:false);
        // return match.length?true:false;
        let res=[];
        // if(!word.includes('.')){ 
        // w.forEach(a=>{
        //   if(a==word)
        //     {
        //       res.push(a);
        //     }
        // });  
        // }              
        // else 
        // {
        w.forEach(a=>{
          let char=a.split('');
            let check=char.every((c,i)=>(c==word[i]||word[i]=='.')?true:false);
            if(check){
              res.push(a);
            }  
        });           
        //}
        return res.length?true:false;
      }
      else{
        return this.dict.includes(word);
      }
    }
}
const wd = new WordDictionary();
      wd.addWord('a');
      wd.addWord('at');
      wd.addWord('ate');
      wd.addWord('ear');
console.log(wd.search('a'),
            wd.search('a.'),
            wd.search('a.e'),
            wd.search('b'),
            wd.search('e.'),
            wd.search('ea.'),
            wd.search('ea..'))