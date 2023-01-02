// JSON: JavaScript Object Notation
let avikalp = {
	name: {
		first: "Avikalp",
		middle: "Kumar",
		last: "Gupta",
		salutation: "Mr."
	},
	birth: {
		date: new Date(),
		place: "India",
		nationality: "Indian"
	},
	eye: [
		{
			vision: "assisted",
			iris_color: "brown",
			side: "right"
		},
		{
			vision: "normal",
			iris_color: "black",
			side: "left"
		}
	],
	height: 172,
	weight: 72.5,
	occupation: "Software Engineer"
}

// if you represent any information in the form as JavaScript objects, you are writing JSON

async function sum(num1, num2) {
	return num1 + num2;
}

async function main() {
	const arr1 = [1, 2, 3, 4, 5];
	const arr2 = [1, 2, 3, 4, 5];

	let total = 0;
	for (const i of arr1) {
		for (const j of arr2) {
			// total += await sum(i, j);
			// console.debug("I will wait for the promise to be fulfilled", total);

			sum(i, j).then(function (iPlusJ) {
				total += iPlusJ;
				console.debug(i, j, total);
			}).catch((err) => {
				console.error(err);
			})
			console.debug("I am moving on without waiting on the promise", i, j);
		}
	}
	console.log(total);
}

async function f1() {
	main();
	// await main();
	console.log("Written after main")
}

f1();
// async functions return a Promise
// await can only be called on Promises
// not all promises have to be created using async functions