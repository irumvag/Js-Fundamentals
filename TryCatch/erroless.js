try { 
console.log('Start of try runs');  // (1) <-- 
// ...no errors here 
lars;
console.log('End of try runs');   // (2) <-- 
} catch(err) { 
    console.log('an error occurred',Object.getOwnPropertyNames(err),err.message); // (3) 
} 
console.log("...Then the execution continues");