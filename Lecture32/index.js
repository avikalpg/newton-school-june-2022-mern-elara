const some_string = "newton_school";
console.log(some_string[1]);
some_string[1] = 'Y';
console.log(some_string[1], some_string); // because string is a primitive type

const myComputer = {
	ram: '16gb',
	hard_disk_type: 'ssd',
	hard_disk_capacity: '512gb',
	number_of_cores: 8,
}

console.log(myComputer);

myComputer.ram = '32gb';
console.log(myComputer); // because myComputer is an object

const myNewComputer = myComputer;
const myFixedComputer = Object.freeze({
	ram: '16gb',
	hard_disk_type: 'ssd',
	hard_disk_capacity: '512gb',
	number_of_cores: 8,
});

console.log(myComputer, myNewComputer, myFixedComputer);
myComputer.hard_disk_capacity = '256gb';
myFixedComputer.hard_disk_capacity = '256gb';

console.log(myComputer, myNewComputer, myFixedComputer);
console.log(myComputer.hard_disk_capacity, myNewComputer.hard_disk_capacity, myFixedComputer.hard_disk_capacity);

// this (the equal values between myComputer and myNewComputer) will not have with primitive data type
let myPhone = "iPhone";
let myNewPhone = myPhone;
myPhone = "Samsung"
console.log(myPhone, myNewPhone);

// property descriptors
Object.defineProperty(myComputer, 'number_of_cores', {
	value: 4,
	writable: false
});
console.log(myComputer);
myComputer.number_of_cores = 16;
myComputer.hard_disk_type = 'hdd';
console.log(myComputer);

console.log(Object.getOwnPropertyDescriptor(myComputer, 'number_of_cores'));
console.log(Object.getOwnPropertyDescriptor(myComputer, 'hard_disk_type'));

Object.defineProperty(myComputer, 'brand', {
	value: 'Dell',
})
Object.defineProperty(myComputer, 'ram', { enumerable: false });
console.log(myComputer);
console.log(Object.getOwnPropertyDescriptor(myComputer, 'brand'));

console.log(myComputer.brand);
for (let key of Object.keys(myComputer)) {
	console.log(key, myComputer[key]);
}

for (let key in myComputer) {
	console.log(key, myComputer[key]);
}

console.log(myComputer);
delete myComputer.ram;
delete myComputer.brand;
console.log(myComputer);

// all descriptors: enumerable, configurable
// data descriptors: value, writable
// accessor descriptor: get, set
function myClass() { };
let value;
Object.defineProperty(myClass.prototype, 'x', {
	get: () => value / 2,
	set: (val) => value = val ** 2,
});
const a = new myClass();
const b = new myClass();
a.x = 25;
console.log(a.x, b.x);
console.log(Object.getOwnPropertyDescriptor(myClass.prototype, 'x'));


// Constructor Prototype
const myName = "Avikalp Gupta";
const myArray = [1, 10, 100, 1012];
console.log(myName.__proto__.constructor.name, myArray.__proto__.constructor);

if (myName.__proto__.constructor == String) {
	console.log("The constructor of myName is actually String", typeof myName); // yes
}
if (myArray.__proto__.constructor == Array) {
	console.log("The constructor of myArray is actually Array", typeof myArray); // yes
}
if (myArray.__proto__.constructor == Object) {
	console.log("The constructor of myArray is actually Object"); // no
}
if (myComputer.__proto__.constructor == Object) {
	console.log("The constructor of myComputer is actually Object", typeof myComputer); // yes
}

// instanceof
console.log(myArray.__proto__.constructor.name, myArray.__proto__.constructor == Array, myArray instanceof Array);
myArray.__proto__.constructor = String;
console.log(myArray.__proto__.constructor.name, myArray.__proto__.constructor == Array, myArray instanceof Array);

// iterating instance and prototype members
console.log(Object.getPrototypeOf(a).constructor.name);
myClass.prototype.standard = "sixth";
a.section = "B";
console.log(a); // only prints "section"
for (let key in a) {
	console.log(key, a[key]); // prints both "section" and "standard"
}