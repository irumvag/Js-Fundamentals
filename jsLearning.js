let a,b=null;
console.log(a??b);
console.log([1,2,3].map(x=>x**2));
console.log(parseInt("  42 apples"));
console.log(parseInt("0x1A")); 
let arr=[1,2,3];
let copy=Array.from(arr);
console.log(arr==copy);
copy[0]=3;
console.log(copy,arr,arr.toSpliced(0,0,3));
arr.map((a,b,c)=>console.log(c));
console.log('----------------------------');
console.log(arr);
console.log(arr.map(a=>a**2));
console.log(arr);
console.log('----------------------------');
console.log(Array.from({0: 'a', 1: 'b', length: 2}));
console.log(arr.slice(-3));
let obj={
    name:"user1",
    len:"90"
};
console.log('----------------------------');

for(let key in obj){
    console.log(key);
}
function names(obj){
    obj.name="Gadc";
}
console.log(obj);
names(obj);
console.log(obj);
let myNumber = 0;
if (myNumber = 10) {
	console.log('Hacked!')
}
console.log(myNumber)
const name = 'John';

switch (name) {
  case 'Jack':
    console.log('Found Jack');
    break;
  default:
    console.log("No one found");
  case 'Jim':
    console.log("Found Jim");
}
let counter = 0

for (console.log("Hi"); counter < 4; console.log("Hello")){
  counter++ 
}
console.log('----------------------------');
let counterr = 6

for (console.log("Hi"); counterr < 4; console.log("Hello")){
  counterr++ 
}
const john = {
	age:20,
	address: {
		country: 'USA',
		city: 'New York'
	}
};

const mark = {
	age:20,
	address: john.address
};

mark.address.city = 'Frolida';
let array=[1,2,3,4,5];
array.splice(0,2,4);
console.log(array);
console.log(john);
console.log(mark);
function reverseVowel(n){
    let res=[],pos=[];
    vowel=[..."auoei",..."AUIEO"];
    n.split(' ').map((a,i)=>{
        a.split('').map((b,c)=>{
            isIn=vowel.includes(b);
            if(isIn) pos.push(b);});
    });
    if(pos.length==1) return n;
    for(let i=0,y=pos.length-1;i<n.length;i++){
        if(vowel.includes(n[i])){
            res.push(pos[y]);
            y--;
        }
        else{
            res.push(n[i]);
        }
    }
    return res.join('');
}
console.log('--------------------------------');
console.log(reverseVowel('Hello World'));
console.log(reverseVowel('hello'));
console.log(reverseVowel("Reverse Vowels In A String"));
console.log((reverseVowel("Reverse Vowels In A String"))=="RivArsI Vewols en e Streng")
console.log('------------------------------');