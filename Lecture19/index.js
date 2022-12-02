console.log("Hello");
let avikalp = {
	fname: "Avikalp",
	lname: "Gupta",
	mname: "Kumar",
	age: 27,
	gender: "male",
}

console.log(avikalp);

let array = [2, 4, 6, 8, 10];
console.log(array);

// functions are also objects
// but with the added property of being callable
function multiplyBy2(i) {
	return i * 2;
}

let multiplyBy3 = function (i) { // anonymous function
	return i * 3;
}

let multiplyBy5 = (i) => { // arrow function
	return i * 5;
}

let multipleBy7 = (i) => (i * 7);

// parseInt, parseFloat
const p = "23.81";
console.log(p, typeof (p));

const p_i = parseInt(p);
const p_f = parseFloat(p);
console.log(p_i, typeof (p_i));
console.log(p_f, typeof (p_f));
