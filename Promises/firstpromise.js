// let promise = new Promise(function(resolve, reject) {
//   // after 1 second signal that the job is finished with an error
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// });
console.log("hello world");
let promise = new Promise(function(resolve, reject) {
  resolve("done");

  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
});
console.log(promise.then(a=>console.log(a)))
console.log(promise)