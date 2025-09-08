/*
 * Programming Quiz: Building Classes and Subclasses (2-3)
 */

class Vehicle {
	constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
		this.color = color;
		this.wheels = wheels;
		this.horn = horn;
	}

	honkHorn() {
		console.log(this.horn);
	}
}

class Bicycle extends Vehicle{
    constructor(color='blue',wheels = 2, horn = 'honk honk'){
        super(color,wheels,horn);
    }
}
// your code goes here

const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk

let set = new Set();
let obj = { name: "Alice" };
set.add(obj);

console.log(set.has(obj)); // true

obj = null;  // remove reference
console.log(set.size); // 1  (the object is still in memory!)
console.log(set);


