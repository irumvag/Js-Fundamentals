var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";
var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled"];
console.log(donuts.push("Gad's donuts"));
//console.log(captain[0]);
let fruit=[];
console.log(fruit.push('orange','mango','banan'));
console.log(Object.keys(fruit));
fruit[16]="banana";
fruit.length=100;
console.log(fruit.length);
console.log(fruit);
fruit.length=2;
console.log(fruit,"\n",fruit.length,"\n",Object.keys(fruit));
console.log();
donuts.length=3;
donuts.forEach((items,index)=>{
    console.log(items,"  ",index);
});
var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];
rainbow.splice(2,1);
rainbow.splice(2,0,"Yellow","Green");
rainbow.splice(rainbow.length,0,"Purple");

console.log(rainbow);
/*
 * Programming Quiz: Nested Numbers (6-10)
 * QUIZ REQUIREMENTS
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */


var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for(var row=0;row<numbers.length;row++)
{
    let l=numbers[row];
    console.log(l);
    for(var column=0;column<l.length;column++)
    {
        if(numbers[row][column]%2===0)
        {
            numbers[row][column]="even";
        }
        else
        {
            numbers[row][column]="odd";
        }
    }
}
function isSolved(boad) {
  // TODO: Check if the board is solved!
  if((boad[0][0]===boad[0][1]===boad[0][2]===1)||(boad[1][0]===boad[1][1]===boad[1][2]===1)||(boad[2][0]===boad[2][1]===boad[2][2]===1)||(boad[0][0]===boad[1][1]===boad[2][2]===1)||(boad[0][2]===boad[1][1]===boad[2][0]===1))
  {
    return 1;
  }
  else if((boad[0][0]===boad[0][1]===boad[0][2])===2||(boad[1][0]===boad[1][1]===boad[1][2])===2||(boad[2][0]===boad[2][1]===boad[2][2])===2||(boad[0][0]===boad[1][1]===boad[2][2])===2||(boad[0][2]===boad[1][1]===boad[2][0])===2){
    return 2;
  }
  else if((boad[0][0]===boad[0][1]===boad[0][2])===0||(boad[1][0]===boad[1][1]===boad[1][2])===0||(boad[2][0]===boad[2][1]===boad[2][2])===0||(boad[0][0]===boad[1][1]===boad[2][2])===0||(boad[0][2]===boad[1][1]===boad[2][0])===0) {
    return -1;
  }
  else
    {
      return 0;
    }
    
}
console.log("tictac",isSolved([[0,0,1],[0,1,2],[2,1,0]]));
// your code goes here
console.log(Array.from("hello"));
console.log([..."hello"]);
const unique=new Set([1,2,3,4,4,6,6]);
console.log(Array.from(unique));
console.log(Array.from(unique,x=>x**2));
console.log(Array.from({length:10},(_,z)=>z+1));
const firstname=['Lucide','Gad','Tc'];
console.log([...firstname]);
let a;
a=firstname;
let obj={hello:12};
let obj1=obj;

console.log([...new Set([1,2,3,444,555,555,4])])
console.log(obj1);
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
let result=firstName || lastName || nickName || "Anonymous";
console.log(result); // SuperCoder