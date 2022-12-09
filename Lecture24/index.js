// Rest operator
// ...
function sum(base_number, ...nums) {
	let sum_of_nums = base_number;
	for (const num of nums) {
		sum_of_nums += num;
	}
	console.log("The base number was " + base_number + " and the following numbers were added: " + nums)
	return sum_of_nums;
}
console.log(sum(4, 23));
console.log(sum(4, 23, 12, 2));
console.log("sum", typeof sum, typeof sum(5));

// try catch
try {
	console.log(`a dozen is equal to ${a}`);
	let a = 12;
} catch (my_error_object) {
	console.log(my_error_object.name)
	console.log("This is an error: " + my_error_object.message);
	// any code that you want to execute if the try block fails to run
}

// higher order function
function powerOf(n) {
	function raisedTo(m) {
		return n ** m;
	}
	return raisedTo;
}
console.log("powerOf", typeof powerOf, typeof powerOf(3), typeof powerOf(3)(2));
console.log(powerOf(3));
console.log(powerOf(3)(2));

let powerOfThree = powerOf(3);
console.log(powerOfThree(2));