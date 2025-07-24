function sumUnique(num){
    return num.filter(a=>num.indexOf(a)==num.lastIndexOf(a)).reduce((a,b)=>a+b,0);
}

// Write a function sumUnique that takes an array of numbers as
//  an argument and returns the sum of the elements that appear only once in the array.
console.log(sumUnique([1, 2, 2, 3, 4, 4, 5])); // 1 + 3 + 5 => 9
console.log(sumUnique([10, 20, 20, 30, 40, 40, 50])); // 10 + 30 + 50 => 90
console.log(sumUnique([5, 5, 10, 15, 20, 25, 25])); // 10 + 15 + 20 => 45