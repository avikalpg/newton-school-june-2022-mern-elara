const LivingThing = {
	isAlive: true
}

const Animal = {
	num_limbs: 4,
	num_eyes: 2
}

const Dog = {
	num_tail: 1,
	bark: () => { console.log("Bow wow!") },
	howl: () => { console.log("Owwwwwwwww!") },
}

console.log(Dog.num_limbs, Dog.num_eyes, Dog.num_tail, Dog.isAlive);
console.log(Object.getPrototypeOf(Dog).constructor.name);

Object.setPrototypeOf(Dog, Animal);
console.log(Dog.num_limbs, Dog.num_eyes, Dog.num_tail, Dog.isAlive);
console.log(Object.getPrototypeOf(Dog).constructor.name);

Object.setPrototypeOf(Dog, LivingThing);
console.log(Dog.num_limbs, Dog.num_eyes, Dog.num_tail, Dog.isAlive);
console.log(Object.getPrototypeOf(Dog).constructor.name);

Object.setPrototypeOf(LivingThing, Animal);
console.log(Dog.num_limbs, Dog.num_eyes, Dog.num_tail, Dog.isAlive);
console.log(Object.getPrototypeOf(Dog).constructor.name);

/* MIXINs */

let WorkerMixin = {
	hands: 2,
	enterFactory() {
		console.log(`Worker ${this.identifier()} has entered the factory`);
	},
	exitFactory() {
		console.log(`Worker ${this.identifier()} has exitted the factory`);
	},
	performTask(task) {
		console.info(`Worker ${this.identifier()} has performed the task: ${task}`);
	}
}

class Person {
	constructor(fname, lname) {
		this.fname = fname;
		this.lname = lname;
	}
	identifier = () => {
		return this.fname + " " + this.lname;
	}
}

class Robot {
	constructor(brand, model) {
		this.brand = brand;
		this.model = model;
	}
	identifier = () => {
		return this.brand + " " + this.model;
	}
}

Object.assign(Person.prototype, WorkerMixin);
Object.assign(Robot.prototype, WorkerMixin);

const robert = new Person("Robert", "Stark");
const dummy = new Robot("Stark Industries", "D-120");
robert.enterFactory();
robert.performTask("Calculate earnings");
robert.exitFactory();
dummy.enterFactory();
dummy.performTask("Lift heavy stuff");
dummy.exitFactory();