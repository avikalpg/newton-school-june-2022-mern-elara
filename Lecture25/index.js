// Arrays

let arr = [1, 2, 3, 4]
console.log(arr);
console.log(typeof arr)

arr = [1, "Hello", true, false, 3.12, null, undefined, Infinity]
console.log(arr);

arr = [1, true, "hello", [2, 3, "four"], { fname: "Avikalp", lname: "Gupta" }, undefined, function (a, b) { return a + b }]
console.log(arr);

// accessing elements of the array
console.log(arr[0], arr[1], arr[2]);
console.log(arr[3][2]);
console.log(arr[6](4, 13));

// modifying
arr[0] = 100;
console.log(arr);

// length
console.log(arr.length);

// concatenation [1,2,3]; [5, 6, 7] => [1, 2, 3, 5, 6, 7]
const arr_2 = ["Lokesh", "Alwaz", "Aditya"];
console.log(arr.concat(arr_2));
console.log(
	arr.concat(
		arr_2,
		[1, 2, 3],
		[null, null, undefined, 0, [], ""],
		['banana', 'apple', 'grape']
	)
);

// push, pop
arr_2.push("Bharat", "Ujjwal");
console.log(arr_2);
let last_element = arr_2.pop();
console.log(last_element, arr_2);

const new_array = [];
for (const element of arr) {
	new_array.push(element + "__");
}
console.log(new_array);

// reverse
console.log(arr.reverse(), arr); // in-place reversing
arr.reverse();

// shift
console.log(arr.shift(), arr);
console.log(arr.unshift("Hundred"), arr);

// primitives are passed as value, objects are passed as reference
function func1(array_element, a, b) {
	array_element.unshift(a);
	array_element.push(b);
	return [a, b];
}
console.log(func1(arr, 120, 210), arr);

console.log(arr.toString());
console.log(JSON.stringify(arr));

// slice and splice
console.log(arr.slice(3, 6), arr);
// console.log(arr.splice(3, 3), arr);
console.log(arr.splice(3, 3, "some", "some more"), arr);

console.log(arr.join("-"));

// includes, indexOf, lastIndexOf
console.log(arr.includes("some"), arr.includes(100));
console.log(arr.indexOf("some"), arr.indexOf(100));
arr = [120, 200, 140, 100, 120, 410];
console.log(arr.indexOf(120), arr.lastIndexOf(120));

// arrow functions revision
function func1(param1, param2, ...restParams) {
	console.log(param1, restParams.join("/")); // statements
	return restParams.unshift(param2); // expressions
}
const func2 = (param1, param2, ...restParams) => restParams.unshift(param2);
const func3 = (param1, param2, ...restParams) => {
	console.log(param1, restParams);
	return restParams.unshift(param2);
}

let forEachOutput = arr.forEach((element) => {
	console.log(element);
});
console.log(forEachOutput);

let mapOutput = arr.map((element) => 2 + element);
console.log(mapOutput);

// spread operator
console.log(arr);
console.log(...arr);