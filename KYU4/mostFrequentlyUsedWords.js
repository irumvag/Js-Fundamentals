function topThreeWords(text) {
    let filtedText=text.split(' ').map(a=>a.split('').filter(b=>b>="A"&&'z'<=b).join().toLowerCase());
    console.log(filtedText);
    return [];
}
topThreeWords("hello hello hello");
// describe("Tests Suite", () => {

//   const chai = require('chai'), { deepEqual, isArray, strictEqual, include } = chai.assert;
//   chai.config.truncateThreshold = 0;

//   function doTest(text, expected) {
//     const actual = topThreeWords(text);
//     deepEqual(actual, expected, `for text = "${text}"\n`);
//   }

//   it("sample tests", () => {
//     doTest("a a a  b  c c  d d d d  e e e e e", ['e','d','a'])
//     doTest("a a a c b b", ['a','b','c'])
//     doTest("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e", ['e','ddd','aa'])
//     doTest("  //wont won't won't ", ["won't", "wont"])
//     doTest("  , e   .. ", ["e"])
//     doTest("  ...  ", [])
//     doTest("  '  ", [])
//     doTest(
//     `In a village of La Mancha, the name of which I have no desire to call to
//  mind, there lived not long since one of those gentlemen that keep a lance
//  in the lance-rack, an old buckler, a lean hack, and a greyhound for
//  coursing. An olla of rather more beef than mutton, a salad on most
//  nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
//  on Sundays, made away with three-quarters of his income.`, ['a','of','on'])
//     });
// });

// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
// Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
// Examples:
// "In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income."

// --> ["a", "of", "on"]


// "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"

// --> ["e", "ddd", "aa"]


// "  //wont won't won't"

// --> ["won't", "wont"]
// Bonus points (not really, but just for fun):
// Avoid creating an array whose memory footprint is roughly as big as the input text.
// Avoid sorting the entire array of unique words.