console.log("Lecture 33");

function User(name) {
	this.name = name;
}
const sayMixin = {
	say: (name) => {
		let sumChars = 0;
		for (let x of name) {
			sumChars += x.charCodeAt(0);
		}
		return sumChars;
	}
}
let sayHiMixin = {
	// write your code here
	say() {
		return sayMixin.say(this.name);
	}
};
function setPrototype() {
	// some code here
	Object.assign(User.prototype, sayHiMixin);
}
setPrototype();
const obj = new User("Newton School");
console.log(obj.say());

// Closure
function countBy(initial) {
	let value = initial;
	return (num) => {
		value += num;
		return value;
	}
}
const count = countBy(-80);
console.log(count(40));
console.log(count(32));
console.log(count(8));
console.log(count(2));

const counter = (function () {
	let value = 0;
	function modifier(num) {
		value += num;
	}
	return {
		increment() {
			modifier(1);
		},
		decrement() {
			modifier(-1);
		},
		getVal() {
			return value;
		}
	}
})();

console.log(counter.getVal());
counter.increment();
counter.increment();
console.log(counter.getVal()); // NOTE: value and modifier are now like PRIVATE properties and functions

// ES6
class Person {
	constructor(first_name, last_name) {
		this.fname = first_name;
		this.lname = last_name;
	}
	getFullName() {
		return this.fname + " " + this.lname;
	}

	#salary = null;
	getJob(company, salary) {
		this.company = company;
		this.#salary = salary;
	}

	#walletMoney = 2000;
	#spendMoney(price) {
		this.#walletMoney -= price;
	}
	#earnMoney(amount) {
		this.#walletMoney += amount;
	}

	getSalary() {
		this.#earnMoney(this.#salary);
	}
	declareWalletMoney() {
		console.log(this.getFullName() + " has a total of Rs. " + this.#walletMoney + " in their wallet");
	}

	throwParty() {
		this.#spendMoney(5000);
	}
}
const zakir = new Person("zakir", "hussain", 120000);
console.log(zakir.getFullName());
zakir.getJob("Microsoft", 120000);

zakir.declareWalletMoney();
zakir.getSalary();
zakir.declareWalletMoney();

zakir.getSalary();
zakir.declareWalletMoney();

zakir.throwParty();
zakir.declareWalletMoney();
zakir.throwParty();

// static
class SeventhBStudent {
	static class_teacher = "Vaishali ma'am";
	static storey = 2;
	static standard = 7;
	static section = "B";

	constructor(first_name, last_name, height, weight) {
		this.fname = first_name;
		this.lname = last_name;
		this.h = height;
		this.w = weight;
	}

	getFullName() {
		return this.fname + " " + this.lname;
	}

	getBMI() {
		return this.w / (this.h ** 2);
	}

	static complain() {
		console.log("Complain about the class has been made to their class teacher " + this.class_teacher);
	}

	getClassTeacher() {
		return this.constructor.class_teacher;
	}
}

console.log(SeventhBStudent.class_teacher);
const sunil = new SeventhBStudent("Sunil", "Pal", 1.57, 60);
const kapil = new SeventhBStudent("Kapil", "Sharma", 1.7, 65);
console.log(sunil.getFullName(), sunil.getBMI());
// sunil.complain(); // throws error
SeventhBStudent.complain();
console.log(sunil.getClassTeacher());
SeventhBStudent.class_teacher = "Rajiv sir";
console.log(sunil.getClassTeacher(), kapil.getClassTeacher());
SeventhBStudent.complain();