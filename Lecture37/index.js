// global scope
// local/functional scope
// block scope

function xyz() {
	if (true) {
		// create variable
		a = 10;
		var b = 11;
		let c = 12; // or const
		// use variable
		console.log(a);
		console.log(b);
		console.log(c);
	}
	// NOT able to use variable
	console.log(a);
	console.log(b);
	// console.log(c); // block scope
}

xyz();
// NOT able to use variable
console.log(a);
// console.log(b); // function/local scope
// console.log(c); // block scope

let big_number = 10000000000000; // automatically has global scope because it is not inside any function or block

function abc() {
	const small_number = 1;
	console.log(`small number: ${small_number} and big number: ${big_number}`);
	function abcd() {
		const a_fraction = 0.5;
		console.log(`small number: ${small_number} and big number: ${big_number} and fraction: ${a_fraction}`);
	}
	abcd();
}

abc();
// abcd(); // function scope

function printBigNumber() {
	console.log(big_number);
}

function modifier_function() {
	console.log(big_number + " before");
	big_number = 100;
	console.log(big_number + " after");
	printBigNumber();
}

function new_var_function() {
	// console.log(big_number + " before"); // Temporal deadzone of the big_number in this scope. Outside variable with same name is not defined in this scope
	let big_number = 100;
	console.log(big_number + " after");
	printBigNumber();
}

new_var_function();
modifier_function();

// execution context and lexical environment as discussed in previous classes
// EC - 2 parts: code, memory