const my_button = document.getElementById("my_btn");
my_button.addEventListener('click', () => {
	const gnf = g_new_function("Button Clicked");
	console.log(gnf);
})

const g_myString = "my new string";

function g_function(num1) {
	const f_myString = "my function string";

	function f_function(num2) {
		console.log(g_myString + " :: " + f_myString);
		return num1 + num2;
	}

	return f_function;
}

console.log(g_function(21)(42));

function g_new_function(input_string) {
	const my_variable = g_myString + "__" + input_string + "__" + g_function(1)(2);
	return my_variable;
}

console.log(g_new_function("Hello"));

const time_now = (new Date()).getTime();
while (true) {
	if ((new Date()).getTime() - time_now > 5000) {
		console.log("5 seconds done since start of loop");
		break;
	}
}