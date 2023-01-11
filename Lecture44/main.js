// Requires NodeJS to run. You can download from here: https://nodejs.org/en/download/

const http = require('node:http');
const { my_product } = require("./helper");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');

	let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	console.log(arr_num.reduce(my_product));
	res.end('Hello, World!\n' + arr_num);
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});