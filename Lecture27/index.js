/** Selector Revision */

// const element = document.getElementById('para1');
// element.innerHTML = "Changed text";

// const elements = document.getElementsByClassName("item");
// const elements = document.getElementsByTagName("li");
// console.log(elements.length);
// for (const element of elements) {
// 	element.innerHTML = "Changed text";
// }

// const element = document.querySelector('li[title]');
// element.innerHTML = "Changed text";

// const elements = document.querySelectorAll('*[title], .first_item');
// for (const element of elements) {
// 	element.innerHTML = "Changed text";
// }

/** Create element revision */
window.addEventListener('load', () => {
	console.log("window was loaded");
	const new_para = document.createElement('p');
	const para_text = document.createTextNode("The text of the new paragraph");
	new_para.appendChild(para_text);
	new_para.id = "myId";
	new_para.setAttribute("title", "new added paragraph");

	const container_div = document.getElementById("container");
	container_div.appendChild(new_para);

	/** DOM Events */
	const new_button = document.createElement('button');
	new_button.innerHTML = "Click me";
	// new_button.addEventListener('click', (event) => {
	// new_button.addEventListener('dblclick', (event) => {
	// new_button.addEventListener('focus', (event) => {
	// new_button.addEventListener('blur', (event) => { // removed from focus
	// new_button.addEventListener('mouseover', (event) => {
	new_button.addEventListener('mousedown', (event) => {
		console.log("This event was triggered");
	})
	container_div.appendChild(new_button);
});

function buttonFocusFunc() {
	console.log("The button was focussed");
}