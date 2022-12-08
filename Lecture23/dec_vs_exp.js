function parentScope() {
	// decFun("before definition, function scope");
	// expFun("before definition, function scope");
	if (true) {
		decFun("before definition, block scope");
		// expFun("before definition, block scope");
		function decFun(place) {
			console.log(`[${place}]: Declared function`);
		}
		var expFun = function (place) {
			console.log(`[${place}]: Expression function`);
		}
		decFun("block");
		expFun("block");
	}
	decFun("function");
	expFun("function");
}

parentScope();

// decFun("global"); // declared functions do not have global scope
// expFun("global"); // var variables do not have global scope

/*================== HOISTING ===================*/
/*
1. function declarations: 
	- the whole function definition is moved to the top of the scope. 
	- You can use the function before or after its definition, without any difference
2. var declared variables:
	- only the declaration is hoisted, not the assignment
	- you can use the variable, but it will not have any value yet (it will be undefined)
3. let, const variables:
	- you cannot use these variables before their declaration
	- temporal deadzone (TDZ) is created from the start of the scope to the declaration
*/

// example of declared function hoisting
function newParentScope1() {
	printHello();
	function printHello() {
		console.log("Hello");
	}
}
newParentScope1();

// example of var hoisting
function newParentScope2() {
	console.log(hoistedVar);
	var hoistedVar = "Hoisted var variable";
	console.log(hoistedVar);
}
newParentScope2();

// example of let and const hoisting
function newParentScope3() {
	let x = 1;
	if (true) {
		console.log(x); // in the TDZ only when 'let x' is written in the scope
		// let x = 1; // TDZ from line 58 to 60
		const y = 2; // TDZ from line 58 to 61
		let z = 3; // TDZ from line 58 to 62
	}
}
newParentScope3();