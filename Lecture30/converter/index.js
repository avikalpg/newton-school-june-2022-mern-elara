// javascript code goes here

function swap() {
	console.debug("swap");
	const from_type_element = document.getElementById("from-type");
	const to_type_element = document.getElementById("to-type");
	const from_element = document.getElementById("from");
	const to_element = document.getElementById("to");

	const from_type = from_type_element.value;
	const to_type = to_type_element.value;
	const from_val = from_element.value;
	const to_val = to_element.value;

	from_type_element.value = to_type;
	to_type_element.value = from_type;
	from_element.value = to_val;
	to_element.value = from_val;
}

function convert() {
	console.debug("convert");
	const from_type = document.getElementById("from-type").value;
	const to_type = document.getElementById("to-type").value;
	const from_val = document.getElementById("from").value;

	const from_base = get_base(from_type);
	const to_base = get_base(to_type);

	const to_element = document.getElementById("to");
	to_element.value = parseInt(from_val, from_base).toString(to_base);
}

function get_base(opt) {
	switch (opt) {
		case 'dec':
			return 10;
		case 'hex':
			return 16;
		case 'oct':
			return 8;
		case 'bin':
			return 2;
		default:
			return 10;
	}
}