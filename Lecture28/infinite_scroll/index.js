// javascript code goes here
function addNDivs(n) {
	const body_element = document.getElementsByTagName("body")[0];
	for (let i = 0; i < n; i++) {
		const new_div = document.createElement("div");
		new_div.innerHTML = i;
		body_element.appendChild(new_div);
	}
}

// addNDivs(3);

const body_element = document.getElementsByTagName("body")[0];
body_element.addEventListener('scroll', (event) => {
	console.log("Scroll end triggered");
	addNDivs(3);
});