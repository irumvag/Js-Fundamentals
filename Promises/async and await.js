async function hello() {
    //do nothing
}

console.log(hello, hello().then(()=>0))
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 6000)
  });

  let result = await promise; // wait until the promise resolves (*)

  console.log(result); // "done!"
}

f();
let promise=new Promise((resolve,reject)=>{
    console.log("hello world")
});


async function fw() {
  let promise = Promise.resolve(1);
  let result = await promise; // Syntax error
}

async function f() {
  //let response = await fetch('http://no-such-url')
}

// f() becomes a rejected promise
f().catch(console.log); // TypeError: failed to fetch // (*)

//task to use async and await

