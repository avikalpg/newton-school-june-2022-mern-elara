console.log("Promise");
// network calls
// i/o calls (input/output) - user input, file read/write, printing etc.

// Sajan made a promise to Sham about returning his popcorn money
const my_promise = new Promise((res, rej) => {
	setTimeout(() => {
		let gotMoney = Math.random() * 200;
		gotMoney = Math.floor(gotMoney * 100) / 100; // limiting to two decimal places
		console.log(`Sajan got ${gotMoney} as pocket-money from his parents`)
		if (gotMoney > 70) {
			res(Math.min(100, gotMoney - 70));
		} else {
			rej("Did not get enough pocket money from parents");
		}
	}, 3000)
})
console.debug("Sajan made a promise to Sham about returning his popcorn money", my_promise);

// Sham decides what to do when Sajan reverts after 3 seconds
my_promise.then((val) => {
	console.log(`Sajan returned ${val} rupees back to Sham`);
}).catch((err) => {
	console.warn(`Sajan could not return any money to Sham because: ${err}`);
})
console.debug("Sham decides what to do when Sajan reverts after 3 seconds");

// Meanwhile...
console.log("Sham is not waiting for Sajan. He is carrying out his own work");