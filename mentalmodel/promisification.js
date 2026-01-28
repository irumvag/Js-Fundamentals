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

function promisifiedFunction(arg1,arg2){
    return new Promise((resolve,reject)=>{
        callback_BasedFunction(arg1,arg2,(error, result)=>{
        if(error){
            reject(error);
        }else{
            resolve(result);
        }
        });
    });
}
    


promisifiedFunction(2, 3)
  .then(result => {
    console.log('Result:', result);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });

promisifiedFunction(2, 4)
  .then(result => {
    console.log('Result:', result);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });


function fetchData(callback) {
    setTimeout(() => {
      const data = "Data fetched successfully!";
      callback(null, data);
    }, 1000);
  }
function promisifiedFetch(){
    return new Promise((resolve,reject)=>{
    fetchData((error, data) => {
    if (error) {
      reject(new Error("Error:", error));
    } else {
      resolve(data);
    }
    });
});
}

promisifiedFetch()
  .then(result => {
    console.log('Result:', result);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });

promisifiedFetch()
  .then(result => {
    console.log('Result:', result);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });