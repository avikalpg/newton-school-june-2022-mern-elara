const a = "tokyo";
const b = {
	country: "Japan",
	city: "Tokyo",
	continent: "Asia",
	growth: {
		gdp: {
			ppp: 100000000,
			nominal: 100000000000,
		},
		population: {
			2011: 4000000,
			2021: 10000000,
		}
	},
	president: {
		first_name: "Kuldeep",
		last_name: "Tiwari",
	},
	getPresidentName: function () {
		return this.president.first_name + " " + this.president.last_name;
	}
}

console.log(a);
console.log(b);

// copy
let copy_a = a;
let copy_b = b;
console.log(a === copy_a, copy_a);
console.log(b === copy_b, copy_b);

copy_a = "beijing";
console.log(a, copy_a);

copy_b.city = "Beijing";
copy_b.country = "China";
console.log(b.city, copy_b.city);

// shallow copy
let shallow_copy_b = {};
Object.assign(shallow_copy_b, b); // works in the same manner as using the rest/spread operator assign
console.log(shallow_copy_b);
shallow_copy_b.city = "Seoul";
shallow_copy_b.country = "South Korea";
console.log(b.city, shallow_copy_b.city);
console.log(b);
console.log(shallow_copy_b);

shallow_copy_b.president.first_name = "Naveen";
shallow_copy_b.president.last_name = "Singh";
console.log(b.president, shallow_copy_b.president);

// deep copy
// const stringified_b = JSON.stringify(b); // JSON.stringify - takes object as input and returns a string (which is the JSON representation of the object)
// console.log(JSON.parse(stringified_b)); // JSON.parse - takes JSON string as input and returns the object it represents

let deep_copy_b = JSON.parse(JSON.stringify(b));
deep_copy_b.president.first_name = "Vikram";
deep_copy_b.president.last_name = "Kumar Raj";
console.log(b.president, deep_copy_b.president);
// console.log(b.getPresidentName(), deep_copy_b.getPresidentName());
console.log(deep_copy_b);

console.log(JSON.stringify(function sum(a, b) {
	return a + b;
}));
console.log(JSON.stringify(new Date()));

// true deep copy
function deepCopy(obj) {
	if (typeof obj === "object") {
		const copy = {};
		for (const prop in obj) {
			copy[prop] = deepCopy(obj[prop])
		}
		return copy;
	}
	else if (typeof obj === "function") {
		//create a copy of the function
		return obj;
	}
	else {
		return obj;
	}
}
let my_deep_copy_b = deepCopy(b);
// let strClone_b = structuredClone(b);
console.log(my_deep_copy_b);
// console.log(strClone_b);
my_deep_copy_b.president.first_name = "Durvesi";
my_deep_copy_b.president.last_name = "Srinivas";
console.log(b.getPresidentName(), my_deep_copy_b.getPresidentName());
