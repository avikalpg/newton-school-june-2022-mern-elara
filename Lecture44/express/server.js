const axios = require("axios");
const _ = require("lodash");

console.log("Hello, World!")

// axios.get("https://openlibrary.org/subjects/accessible_book.json").then(res => {
// 	return res.data;
// }).then(data => {
// 	console.log(data.work_count);
// })

function sum(a, b, c) {
	return a + b + c;
}

const curry_sum = _.curry(sum);
console.log(curry_sum(2)(3)(4))

////////////////////////////////

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('<p style="background-color: yellow">Hello World!</p>')
})

app.post('/', (req, res) => {
	res.json({
		message: "Success"
	})
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})