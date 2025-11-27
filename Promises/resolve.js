let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(a=>console.log(a));

//delay with a promise
function delay(ms) {
  return new Promise(
    (resolve)=>{
        setTimeout(resolve(ms),ms);
    }
  );
}

delay(3000).then(() => console.log('runs after 3 seconds'));


// nested promises 
new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

  console.log(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  console.log(result); // 2
  return result * 2;

}).then(function(result) {

  console.log(result); // 4
  return result * 2;

});

// 
let promis = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promis.then(function(result) {
  console.log(result); // 1
  return result * 2;
});

promis.then(function(result) {
  console.log(result); // 1
  return result * 2;
});

promis.then(function(result) {
  console.log(result); // 1
  return result * 2;
});


//
new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000);

}).then(function(result) {

  console.log(result); // 1

  return new Promise((resolve, reject) => { // (*)
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) { // (**)

  console.log(result); // 2

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) {

  console.log(result); // 4

});

