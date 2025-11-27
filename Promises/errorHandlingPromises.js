// the execution: catch -> then
new Promise((resolve, reject) => {

  //throw new Error("Whoops!");
  resolve(20)

}).catch(function(error) {

  console.log("The error is handled, continue normally");

}).then((hello) => console.log("Next successful handler runs",hello));