function my_sum(a, b) {
	return a + b;
}

function my_difference(a, b) {
	return a - b;
}

function my_product(a, b) {
	return a * b;
}

function my_quotient(a, b) {
	return Math.floor(a / b);
}

function my_remainder(a, b) {
	return a % b;
}

module.exports = {
	my_sum, my_difference, my_product, my_quotient, my_remainder
}