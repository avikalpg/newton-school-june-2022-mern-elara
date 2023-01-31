const app = require('express')();
const port = 8080;

app.get('/', (req, res) => {
	fetch('index.html').then(response => {
		res.send(response.text())
	})
})

app.listen(port, () => {
	console.log(`Listening of port ${port}`);
})