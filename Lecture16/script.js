console.log("This is the JavaScript from the script.js file");

// int, char, String, double, float, etc.
// const, let (var)

// constant
const a = 12;
console.log("constant a = " + a);
// a = 11;
// console.log("constant a = " + a);
// const a = 12;

// let
let b = 32;
console.log(`variable b = ${b}`);
b = 11;
console.log(`variable b (modified) = ${b}`)
// let b = 32;
{
	let scoped_variable = 12;
	console.log(`This is inside the scope: ${scoped_variable}`);
}
// console.log(`This is outside the scope: ${scoped_variable}`);

// undeclared variable (old, not-recommended)
c = 11;
console.log(`undeclared variable c = ${c}`);
c = 13;
console.log(`undeclared variable c (modified) = ${c}`);

// variable (old, not-recommended)
var d = 91;
console.log("variable d = " + d);
d = 10;
console.log("variable d (modified) = " + d);
var d = 21;
console.log("variable d (redeclared) = " + d);
{
	var unscoped_variable = 12;
	console.log(`This is inside the scope: ${unscoped_variable}`);
}
console.log(`This is outside the scope: ${unscoped_variable}`);

// JavaScript Data types

