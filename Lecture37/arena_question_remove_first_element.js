/**
 * Readline library documentation: https://nodejs.org/api/readline.html
 */

const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on('line', inputHandler());

function inputHandler() {
	let input_line_no = 0;
	let n;
	return (input) => {
		input_line_no++;
		console.log(`Received input ${input_line_no}: ${input}`)
		if (input_line_no == 1) {
			n = parseInt(input);
		} else if (input_line_no == 2) {
			const arr = input.split(" ");
			console.assert(arr.length == n, "Invalid input");
			arr.shift();
			console.log(`Shifted array: ${arr}`);
			console.log(arr.join(" "));
		}
	}
}