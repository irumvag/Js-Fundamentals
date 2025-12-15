// let nbr=document.getElementById('number');

// function displayNumber(){
//     let end=1;
//     let timer=setInterval(()=>{
//         if(end==5) clearInterval(timer);
//         if(end%2==0){ 
//             console.log(end);
//             nbr.innerHTML+=`after 2 second :=> ${end} <br>`;
//         };
//         end++;
//     },1000);
// }
// displayNumber()

// async function displayNumber1(){
//     let promisee=await Promise.resolve(1)
//     .then(a=>{
//         let end=a;
//         timer=setInterval(()=>{
//         if(end==5) clearInterval(timer);
//         if(end%2==0) console.log(end);
//         end++;
//     },1000);});
// }
// displayNumber1()

function urlfetchq(){
    let controller= new AbortController();
    let signal = controller.signal;
    let promise=fetch('https://api.github.com/users/irumvag',{signal}).catch((response)=>console.log('aborted'));
    setTimeout(()=>{
    if(!signal.aborted) controller.abort();
    },100); 
}
urlfetchq();

/*
4. Write a JavaScript function `fetchToDo` that uses XMLHttpRequest to fetch data from the given URL (https://jsonplaceholder.typicode.com/todos/1). The function should handle both successful responses and errors (such as network issues or invalid URLs). Upon receiving a successful response, it should log the fetched data to the console. If there's an error, it should catch the error and log an appropriate message.
5. Extend the `fetchToDo` function from Question 4 to include custom headers in the request. Specifically, you need to add a User-Agent header with a custom value and a Content-Type header set to application/json. Additionally, modify the function to send a JSON payload in the request body. After sending the request, the function should parse the JSON response and log the parsed object to the console.
*/