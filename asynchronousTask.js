// 1. Delayed Callback Execution
// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
function invokeafterdelay(callbk){
    setTimeout(callbk,2000);
}
function message(){
    console.log("Hello");
}
invokeafterdelay(message);

// Callback to Promise Conversion
// Write a JavaScript program that converts a callback-based function to a Promise-based function.
function callback_BasedFunction(arg1, arg2, callback) {
  // Perform asynchronous operations
  // Call the callback with the result or error
  setTimeout(() => {
    const result = arg1 + arg2;
    if (result % 2 !== 0) {
      callback(null, result);
    } else {
      callback(new Error('Result is not odd!'), null);
    }
  }, 1000);
}

//answer
function promise_BasedFunction(arg1, arg2){
    return new Promise((resolve,reject)=>{
        callback_BasedFunction(arg1, arg2, (error, result)=>{
            if(error)
            {
                reject(error);
            }
            else{
                resolve(result);
            }
        });
    })
}

promise_BasedFunction(7,3)
.then(result=>{
    console.log('result:',result);
}).catch(error=>{
    console.log("error happened");
});

promise_BasedFunction(2,3)
.then(result=>{
    console.log('result:',result);
}).catch(error=>{
    console.log("error happened",error.message);
});

// HTTP GET with Promises
// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.
let response= await fetch("https://handlers.education.launchcode.org/static/planets.json", {Headers:{'method': 'Get'}})
.then(response=>response.json()).then(json=>console.log(json));
const problematicIntervalPromise = new Promise((resolve) => {
  const intervalId = setInterval(() => {
    console.log("Interval running, trying to resolve...");
    resolve("This value is used only the first time");
  }, 1000);

  // The interval will keep running in the background after the first resolve
  // so you must clear it manually somewhere else, or never, if you forget.
  // A better pattern would be to clear it inside the callback when a condition is met.
});

problematicIntervalPromise.then((value) => {
  console.log(`Promise resolved with value: ${value}`); // This logs only once, after ~1 second
});

// Output:
// Interval running, trying to resolve...
// Promise resolved with value: This value is used only the first time
// Interval running, trying to resolve... (this continues every second)
// Interval running, trying to resolve... (indefinitely)
