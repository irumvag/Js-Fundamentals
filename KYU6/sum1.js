function sum(n) {
    let res=n || 0;
    if(arguments.length==0) return res;
    function inner(nbr){
        if(arguments.length==0) return res;
        res+=nbr;
        return inner;
    }
  return inner;
}
console.log(sum(2)(3)(),sum(4)(5)(9)(),sum(5)(),sum())

let promise = new Promise(function(resolve, reject) {
    console.log("done0")
  setTimeout(() => resolve("done1"));
  console.log("done2")
  resolve("done!")
});

// resolve runs the first function in .then
promise.then(
  result => console.log(result), // shows "done!" after 1 second
  error => console.log(error) // doesn't run
);


queueMicrotask(()=>{
    console.log("custom microtask");
})