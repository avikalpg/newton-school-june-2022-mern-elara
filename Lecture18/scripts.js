console.log("Hello");

let a;
console.log(a);
// primitive 
a = undefined;
console.log(typeof (a));

a = null;
console.log(typeof (a));

console.log(null == undefined)

a = true; // or false; Boolean
console.log(typeof (a));

a = -1.1;
console.log(typeof (a));

a = 0.1 + 0.2;
console.log(a);

a = 0o12;
console.log(a);

a = 0x12;
console.log(a);

a = 1.45e3;
console.log(a);

a = "My name is Avikalp";
console.log(typeof (a));

a += " Kumar Gupta";
console.log(a);

a[4] = 'u';
console.log(a, a[4]);

// Object 
// JSON: JavaScript Object Notation
a = {
	name: {
		first: "Avikalp",
		middle: "Kumar",
		last: "Gupta",
	},
	designation: "CEO",
	company: "Vibinex",
}
console.log(a, typeof (a));

a = [1, 3, 2, 45];
console.log(typeof (a));
a = [1, "avikalp", true, false, undefined, null, 0.4, 0.1 + 0.2, 0o45];
console.log(typeof (a), a)

a = [true, {
	category: 'car',
	brand: 'hyundai',
	car_name: 'santro'
}, 34, 42.1, [1, 2, 'new', false]]
console.log(a);

a = "21";
console.log(a, typeof (a), parseInt(a), typeof (parseInt(a)));

a = "21.312";
console.log(a, typeof (a), parseInt(a), typeof (parseInt(a)));

a = "21.312";
console.log(a, typeof (a), parseFloat(a), typeof (parseFloat(a)));

a = function function_name(p, q) {
	console.log(p + q - 0.1);
	return p / q;
}
console.log(typeof (a), a(0.1, 0.2));