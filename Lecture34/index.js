// Destructuring Assignment operator
const old_array = [3, undefined, 1, 4, 2, 4, "Hello", "World", null, [1, 2]]
console.log(old_array)

var [a, b] = old_array;
console.log(a, b);

var [a, , b] = old_array;
console.log(a, b);

var [a, , , b] = old_array;
console.log(a, b);

var [a, b = "unassigned"] = old_array;
console.log(a, b);

var [a, b, ...new_array] = old_array;
console.log(a, b, new_array)

let num1 = 200;
let num2 = 400;
console.log(num1, num2);
[num2, num1] = [num1, num2];
console.log(num1, num2);

const old_object = {
	fname: "Avikalp",
	lname: "Gupta",
	eye_color: "brown",
	hair_color: "black",
	nationality: "Indian",
}

var { fname, nationality } = old_object;
console.log(fname, nationality);
var { eye_color, hair_color, ...other } = old_object;
console.log(eye_color, hair_color, other);
var { eye_color: eye, hair_color: hair, fname: first_name } = old_object;
console.log(eye, hair, first_name);
var { state: country = "The USA" } = old_object;
console.log(country);