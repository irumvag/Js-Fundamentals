function translate(sentence) {
  return (!isNaN(Number(sentence)) || sentence.length <= 2)
    ? sentence
    : sentence.split(' ').map((val) => {
        if (['a', 'e', 'i', 'o', 'u'].includes(val.charAt(0).toLowerCase())) {
          return val + "way";
        } else {
          let vowel = -1;
          let ex = val.length;

          for (var index = 0; index < val.length; index++) {
            if (['a', 'e', 'i', 'o', 'u'].includes(val[index].toLowerCase())) {
              vowel = index;
              break;
            }
          }

          for (var index = val.length - 1; index >= 0; index--) {
            if (['?', '!'].includes(val[index])) {
              ex = index;
              break;
            }
          }

          // Fallback if no vowel found
          if (vowel === -1) vowel = 1;

          if (val.charAt(0).toUpperCase() === val.charAt(0)) {
            return (
              val.charAt(vowel).toUpperCase() +
              val.slice(vowel + 1, ex) +
              val.charAt(0).toLowerCase() +
              "ay" +
              val.slice(ex)
            );
          }

          return (
            val.charAt(1) +
            val.slice(2, ex) +
            val.charAt(0).toLowerCase() +
            "ay" +
            val.slice(ex)
          );
        }
      }).join(" ");
}












function translate(sentence) {
  return (!isNaN(Number(sentence)) || sentence.length <= 2)
    ? sentence
    : sentence.split(' ').map((val) => {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        const isCapital = val[0] === val[0].toUpperCase();

        // Extract trailing punctuation
        let endPunct = '';
        while (val.length && ['!', '?', '.', ','].includes(val[val.length - 1])) {
          endPunct = val[val.length - 1] + endPunct;
          val = val.slice(0, -1);
        }
        
        if (vowels.includes(val[0].toLowerCase())) {
          return val + "way" + endPunct;
        } else {
          // Find index of first vowel
          let vowel = -1;
          let vowelcheck=false;
          for (let i = 0; i < val.length; i++) {
            if (vowels.includes(val[i].toLowerCase())) {
              vowel = i;
              break;
            }
          }
          if(vowel===-1)
            {
              return val+"ay";
            }
          
          if (vowel === -1) vowel = 1; // fallback if no vowels

          let head = val.slice(0, vowel);
          let tail = val.slice(vowel);

          // Adjust capitalization
          if (isCapital) {
            tail = tail.charAt(0).toUpperCase() + tail.slice(1);
            head = head.toLowerCase();
          }
    
          return tail + head + "ay" + endPunct;
        }
      }).join(" ");
}
