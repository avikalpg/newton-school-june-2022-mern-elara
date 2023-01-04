console.info("setTimeout and setInterval");

let counter = 0;
function print_sum(a, b) {
	counter++;
	console.log(`counter: ${counter} - sum = ${a + b}`);
	if (counter >= 10) {
		clearInterval(interval);
	}
}

print_sum(2, 4);

setTimeout(() => print_sum(3, 87), 2000);
setTimeout(print_sum, 2000, 32, 12);

const interval = setInterval(print_sum, 2000, 5, 7);