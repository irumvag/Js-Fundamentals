let checker=function(age){
    if(age>18){
        console.log("You're over 18!!");
    }
    else{
        console.log("You are under 18");
    }
};

function user(a,chk){
    chk(a);
}
user(2,checker);

let name="Gad";
let size="XL";
let obj={
    name,
    size
}
console.log(obj);
let obj1 = {};
obj1.__proto__ = 5; // assign a number
console.log(obj1.__proto__); // [object Object] - the value is an object, didn't work as intended


//prototype in js object
let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log( rabbit.jumps ); // true (1)

delete rabbit.jumps;

console.log( rabbit.jumps ); // null (2)

delete animal.jumps;

console.log( rabbit.jumps ); // undifined (3)
