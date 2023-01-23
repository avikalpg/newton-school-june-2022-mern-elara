async function abc() {
	console.log("async function execute");
}

console.log("print 1");

abc().then(() => {
	console.log("print 3");
})

const time_now = (new Date()).getTime();
let iterations = 0;
while (true) {
	if ((new Date()).getTime() - time_now > 5000) {
		console.log("5 seconds done since start of loop. Number of iterations = " + iterations);
		break;
	} else {
		iterations++;
	}
}

console.log("print 2");