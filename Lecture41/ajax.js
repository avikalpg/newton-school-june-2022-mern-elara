console.log("AJAX: Asychronous JavaScript and XML");

function initialize() {
	// localStorage.clear();
	if (localStorage.getItem("like_count") == undefined) {
		console.log("Initializing...")
		localStorage.setItem("like_count", 0);
	}
}
initialize();

async function storeInDatabase(key, value) {
	localStorage.setItem(key, value);
	return value;
}
async function retrieveFromDatabase(key) {
	return localStorage.getItem(key);
}

const like_btn = document.getElementById('like_btn');
const like_counts_el = document.getElementById('like_count');

setInterval(() => {
	retrieveFromDatabase("like_count").then(count => {
		like_counts_el.innerHTML = count;
	})
}, 1000)

like_btn.addEventListener('click', () => {
	retrieveFromDatabase("like_count").then(count => {
		storeInDatabase("like_count", parseInt(count) + 1).then((stored_val) => {
			like_counts_el.innerHTML = stored_val;
		}).catch(e => {
			console.error("Could not update value in database. Reason: ", e);
		})
	}).catch(e => {
		console.error("Could not get value from database. Reason: " + e);
	})
})

// fetch
fetch("https://openlibrary.org/subjects/accessible_book.json").then(response => {
	return response.json();
}).then(data => {
	// console.log(data);
	const books_div = document.getElementById("books");
	data.works.forEach(element => {
		const book = document.createElement("div");
		book.id = element.cover_id;
		book.innerHTML = element.title;
		book.style = "border: solid green 1px; padding: 5px;"
		books_div.appendChild(book);
	});
})