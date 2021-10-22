const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

// const handler = (req, res) => {
// 	res.send('node');

// app.get('/', handler);
const users = [
	{ id: 0, name: 'popy', email: '3333333' },
	{ id: 1, name: 'ropy', email: '3333333' },
	{ id: 2, name: 'topy', email: '3333333' },
	{ id: 3, name: 'vopy', email: '3333333' },
];
app.get('/', (req, res) => {
	res.send('node');
});
//query parameter//
app.get('/users', (req, res) => {
	const search = req.query.search;
	if (search) {
		const searchResult = users.filter((user) =>
			user.name.toLowerCase().includes(search),
		);
		res.send(searchResult);
	} else {
		res.send(users);
	}
	// console.log(search);
});
//post.METHOD
app.post('/users', (req, res) => {
	const newUser = req.body;
	newUser.id = users.length;
	users.push(newUser);
	// res.send(JSON.stringify(newUser));

	res.json(newUser);
});
//dynamic parameter/api
app.get('/users/:id', (req, res) => {
	const id = req.params.id;

	const user = users[id];
	res.send(user);

	// console.log(req.params.id);
});
app.listen(port, () => {
	console.log('listening to node', port);
});
