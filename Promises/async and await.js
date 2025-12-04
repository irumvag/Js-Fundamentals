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


function fw() {
  let promise = Promise.resolve(1);
  let result = await promise; // Syntax error
}
