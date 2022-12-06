// operators &&, ||, ! 
// NaN is falsey || 1 is truthy

// < > >= <= == === != !== 
// for numbers, booleans and strings 

let a = 3;
let b = (a > 2) ? 6 : 1;
console.log(b);

// ternary operator
// (expression) ? value1 : value2

if (a == 3) {
	console.log("a is three");
}
else if (a == 4) {
	console.log("a is four");
}
else {
	console.log("a is not three or four");
}

// switch
switch (a) {
	case 3:
		console.log("a is three");
		break;
	case 4:
		console.log("a is four");
		break;
	default:
		console.log("a is not three or four");
		break;
}

switch (true) {
	case (a == 2):
		console.log('a is two');
		break;
	case (b == 6):
		console.log("b is six");
		break;
	default:
		console.log("a is not three");
		break;
}

for (let i = 0; i < Infinity; i++) {
	if (i == 100) {
		break;
	}
	console.log("Hello");
	continue;
	console.log("world");
}

let i = 0;
while (i < 10) {
	i += 1;
	console.log(i);
}

// j;
do {
	var j = i + 1;
	console.log(j);
	i -= 1;
} while (j > 0);

// while (true) { ... }  -> this is an infinite loop

const cities = ["delhi", "mumbai", "kolkata", "chennai", "bengaluru", "indore", "pune", "hyderabad", "agra", "guwahati"];
for (let n = 0; n < cities.length; n++) {
	console.log(cities[n]);
}

for (let city of cities) {
	console.log(city)
}

const myname = { fname: "avikalp", lname: 'Gupta' };
for (let key in myname) {
	console.log(key, myname[key]);
}