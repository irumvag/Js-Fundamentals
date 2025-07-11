function addExtra( listOfNumbers ){
  // add an int to listOfNumbers and return it
  listOfNumbers.push((listOfNumbers.length==0?1:listOfNumbers[listOfNumbers.length-1]+1));
  console.log(listOfNumbers);
  return [...listOfNumbers];
}