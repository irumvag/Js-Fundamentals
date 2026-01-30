// 
// Implement a timeout for an asynchronous fetch request. If the request takes longer than(5 milliseconds) , it should be aborted.

// https://jsonplaceholder.typicode.com/users

let controller=new AbortController();
let signal = controller.signal;

setTimeout(() => {
    controller.abort();
}, 5);

let promise=fetch("https://jsonplaceholder.typicode.com/users",{signal})
            .then(response=>response.json())
            .then(data=>console.log(data));






