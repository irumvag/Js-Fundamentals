function translate(sentence) {
  
}

// function translate(sentence) {
//   return (!isNaN(Number(sentence)) || sentence.length <= 2)
//     ? sentence
//     : sentence.split(' ').map((val) => {
//         if (['a', 'e', 'i', 'o', 'u'].includes(val.charAt(0).toLowerCase())) {
//           return val + "way";
//         } else {
//           let vowel = -1;
//           let ex = val.length;

//           for (var index = 0; index < val.length; index++) {
//             if (['a', 'e', 'i', 'o', 'u'].includes(val[index].toLowerCase())) {
//               vowel = index;
//               break;
//             }
//           }

//           for (var index = val.length - 1; index >= 0; index--) {
//             if (['?', '!'].includes(val[index])) {
//               ex = index;
//               break;
//             }
//           }

//           // Fallback if no vowel found
//           if (vowel === -1) vowel = 1;

//           if (val.charAt(0).toUpperCase() === val.charAt(0)) {
//             return (
//               val.charAt(vowel).toUpperCase() +
//               val.slice(vowel + 1, ex) +
//               val.charAt(0).toLowerCase() +
//               "ay" +
//               val.slice(ex)
//             );
//           }

//           return (
//             val.charAt(1) +
//             val.slice(2, ex) +
//             val.charAt(0).toLowerCase() +
//             "ay" +
//             val.slice(ex)
//           );
//         }
//       }).join(" ");
// }
