// the execution: catch -> then
new Promise((resolve, reject) => {

  throw new Error("Whoops!");
  resolve(20)

}).catch(function(error) {

  console.log("The error is handled, continue normally");

}).then((hello) => console.log("Next successful handler runs",hello))
.then(()=>console.log("second is done"));

console.log("000000--------------------000000000000000");
// the execution: catch -> then
new Promise((resolve, reject) => {

  throw new Error("Whoops!");
  resolve(20)

}).then((hello) => console.log("Next successful handler runs",hello))
.then(()=>console.log("second is done"))
.catch(function(error) {

  console.log("The error is handled, continue normally");

});

new Promise(function() {
  //noSuchFunction(); // Error here (no such function)
})
  .then(() => {
    // successful promise handlers, one or more
  }); // without .catch at the end!

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(a=>console.log(a));