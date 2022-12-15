// javascript code goes here
function addNDivs(n) {
	const body_element = document.getElementsByTagName("body")[0];
	for (let i = 0; i < n; i++) {
		const new_div = document.createElement("div");
		new_div.innerHTML = i;
		body_element.appendChild(new_div);
	}
}

addNDivs(5);

window.addEventListener('scroll', (event) => {
	const y = window.scrollY + window.outerHeight;
	let loadHeight = document.body.scrollHeight - (0.5 * window.innerHeight);
	if (y >= loadHeight) {
		addNDivs(3);
	}
});