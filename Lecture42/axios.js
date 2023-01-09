console.log("Axios");

const URL = "https://openlibrary.org/subjects/accessible_book.json";

/* GET HTTP calls */
// fetch
fetch(URL).then(response => {
	response.json().then(data => {
		console.log(data);
	})
})

// axios
axios.get(URL).then(response => {
	console.log("Response received");
	console.log(response.data)
})

/* POST HTTP calls */
const POST_URL = "https://httpbin.org/post";
axios.post(POST_URL).then(response => {
	console.log(response.data);
})

fetch(POST_URL, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	}
}).then(response => {
	response.json().then(data => {
		console.log(data);
	})
})