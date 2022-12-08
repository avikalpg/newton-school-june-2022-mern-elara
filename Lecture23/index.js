// default parameter
function power(num, exponent = 2) {
	return num ** exponent;
}

console.log(power(3, 4));
console.log(power(4));
console.log(power(19));

// anonymous functions
console.log(function (num1, num2) {
	return num1 * 2 + num2 * 3;
}(2, 3));

// declaration vs expression
function declaredFunction() {
	console.log("I am a declared function");
}
var expressedFunction = function () {
	console.log("I am a function expression");
}
declaredFunction();
expressedFunction();

// callback function
function printPowerOfTwo(n, callback_function) {
	console.log(callback_function(2, n));
}
printPowerOfTwo(3, power);