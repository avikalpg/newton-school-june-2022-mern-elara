const arr = [1, 100, "Hello", null, 0.1, NaN, "2nd string"];

// filter
console.log(arr.filter((x) => typeof (x) == "number"))
console.log(arr.filter((x, i) => typeof (x) == "number" && i < 3))
console.log(arr.filter((value, index) => {
	let condition = index * value;
	console.debug(index, value, condition);
	return condition;
}))

// reduce
console.log(arr.reduce((prev, curr) => prev + curr));
console.log(arr.filter((x) => x > 0).reduce((prev, curr) => prev + curr));
console.log(arr.filter((x) => x > 0).reduce((p, c, i) => {
	console.debug(i, p, c);
	return (p / c);
}, 0.9));
// arr.reduceRight()

// some, every
console.log(arr.some((x) => x > 0), arr.every(x => x > 0));
if (arr.some(x => x == 100)) {
	console.log('at least one value in arr is equal to 100');
}
if (arr.every(x => x != 200)) {
	console.log('all the values in arr are not equal to 200');
}

// find 
console.log(arr.find(x => typeof (x) == 'string'));
console.log(arr.find(x => x == 200));
console.log(arr.findIndex(x => typeof (x) == "string"));

// DOM Manipulation
// inserting an element
const para = document.createElement("p");
const text_node = document.createTextNode("Lorem Ipsum blah blah blah. A lot of text is written here.")
para.appendChild(text_node);

const container_element = document.getElementById("container");
container_element.appendChild(para);

// removing an element
function deletePara() {
	const para_to_be_removed = document.getElementById("para_to_be_deleted");
	para_to_be_removed.remove();
}

// replace an element 
function changeHeading() {
	const new_heading_element = document.createElement("h3");
	new_heading_element.appendChild(document.createTextNode("DOM Manipulation and JS Array loop functions"));

	const heading_element = document.getElementsByTagName("h1")[0];
	const body_element = document.getElementsByTagName("body")[0];
	body_element.replaceChild(new_heading_element, heading_element);
}

// more DOM Selectors
const li_elements = document.getElementsByTagName("li");
console.log(li_elements);
const id_elem = document.getElementById("second_item");
console.log(id_elem.innerHTML);
const pet_items = document.getElementsByClassName("pet");
console.log(pet_items);

console.log(document.querySelector('.pet'));
document.querySelectorAll('.pet').forEach((elem) => console.log(elem.innerHTML));