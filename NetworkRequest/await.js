// await function test() {
//   const result = 42;
//   console.log(result); // 42
// }

//test();

const promise = new Promise((resolve, reject) => {
  setInterval(() => {
    resolve("Hello!");
  }, 1000);
});

promise.then(result => console.log(result));

// Output:
// (after 1 second) "Hello!"
// Then nothing... interval keeps running but does nothing