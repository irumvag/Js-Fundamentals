class SubstitutionCipher {
    constructor(abc1, abc2) {
      this.abc1=abc1
      this.abc2=abc2
      this.equal=[...abc1].length==[...abc2].length
    }

    encode(plaintext) {
        return [...plaintext].map(a=>{
         return [...this.abc2].includes(a)?this.abc2[this.abc1.indexOf(a)]:a
        }).join('');
    }
  
    decode(ciphertext) {
        return [...ciphertext].map(a=>{
          return [...this.abc1].includes(a)?this.abc1[this.abc2.indexOf(a)]:a
        }
        ).join('');
    }
}

    let abc1 = "abcdefghijklmnopqrstuvwxyz";
    let abc2 = "etaoinshrdlucmfwypvbgkjqxz";
    let sub = new SubstitutionCipher(abc1, abc2);
    console.log(sub.encode("abc"), "eta");
    console.log(sub.encode("xyz"), "qxz");