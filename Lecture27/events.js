console.log("events script is running");

const parent = document.getElementById("container");
const child = document.getElementById("para1");

parent.addEventListener('click', (event) => {
	console.log("Parent was clicked");
}) // event is not captured at parent -- passed to the child first
child.addEventListener('click', (event) => {
	console.log("Child was clicked");
	event.stopPropagation(); // stops event bubbling to the parent
})

const parent_2 = document.getElementById("parent");
const child_2 = document.getElementById("child");
parent_2.addEventListener("click", (e) => {
	console.log("2nd parent was clicked");
	e.stopPropagation(); // stops propogation to child because event was captured in parent first
}, true); // capture by adding the third argument as true
child_2.addEventListener('click', (e) => {
	console.log("2nd child was clicked");
})

