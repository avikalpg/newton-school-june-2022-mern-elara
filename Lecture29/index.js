const word = "apple";
console.log(word);
console.log(Object.getPrototypeOf(word).constructor.name);
const word_ka_prototype = Object.getPrototypeOf(word);
console.log(Object.getPrototypeOf(word_ka_prototype).constructor.name);
const word_ke_prototype_ka_prototype = Object.getPrototypeOf(word_ka_prototype);
console.log(Object.getPrototypeOf(word_ke_prototype_ka_prototype));

class Person {
	constructor(fname, lname, dob) {
		this.first_name = fname;
		this.last_name = lname;
		this.date_of_birth = dob;
	}

	getFullName = () => this.first_name + " " + this.last_name;
	getAge = () => {
		const now = new Date();
		const dob = this.date_of_birth;
		let age = now.getFullYear() - dob.getFullYear();
		age -= (now.getMonth() < dob.getMonth()) || ((now.getMonth() == dob.getMonth()) && (now.getDate() < dob.getDate()));
		return age;
	}
}

const avikalp = new Person("Avikalp", "Gupta", new Date(1995, 2, 9));
const zakir = new Person("Zakir", "Hussein", new Date(1995, 6, 12));

console.log("names", avikalp.getFullName(), zakir.getFullName());
console.log("ages", avikalp.getAge(), zakir.getAge());

avikalp.number_of_eyes = 2;
console.log("eyes", avikalp.number_of_eyes, zakir.number_of_eyes);

avikalp.__proto__.number_of_limbs = 4;
console.log("limbs", avikalp.number_of_limbs, zakir.number_of_limbs);

//
class LivingThing {
	constructor() {
		this.isAlive = true;
	}

	kill = () => {
		this.isAlive = false;
		console.debug("Living thing has been killed");
	}
}

class Plant extends LivingThing {
	constructor(type) {
		super();
		this.type = type;
		this.food = "sunlight";
	}
}

class Animal extends LivingThing {
	constructor(medium) {
		super();
		this.food = "plant";
		this.medium = medium;
		this.location = 0;
	}

	travel = (distance) => {
		this.location += distance;
	}
}

class Dog extends Animal {
	constructor() {
		super("land");
		this.number_of_legs = 4;
		this.number_of_eyes = 2;
		this.number_of_nose = 1;
	}

	bark = () => { console.log("bow wow"); }
	kill = () => { console.info("bite"); } // overriding 
}

const tommy = new Dog();
tommy.bark();
tommy.travel(24);
console.log(tommy.isAlive);
tommy.kill();
console.log(tommy.isAlive);

const mango = new Plant("tree");
console.log(mango.isAlive);
mango.kill();
console.log(mango.isAlive);

console.log(tommy.__proto__.constructor.name);
console.log(tommy.__proto__.__proto__.constructor.name);
console.log(tommy.__proto__.__proto__.__proto__.constructor.name);
console.log(tommy.__proto__.__proto__.__proto__.__proto__.constructor.name);