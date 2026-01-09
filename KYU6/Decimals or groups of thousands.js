//console.log(parseInt('123,45'));
function sort(sentence){
  return sentence.split(' ');
}
console.log(sort("I, habitan of the Alleghanies, treating of him as he is in himself in his own rights"), "as habitan he him himself his in in is of of own rights the treating I Alleghanies")
console.log(sort("take up the task eternal, and the burden and the lesson"), "and and burden eternal lesson take task the the the up")
console.log(sort("Land of the Old Thirteen! Massachusetts land! land of Vermont and Connecticut!"), "and land land of of the Vermont Thirteen Old Massachusetts Land Connecticut","sentence may end with a punctuation")
console.log(sort("Pioneers, O Pioneers!"), "Pioneers Pioneers O","sentence may end with a punctuation")