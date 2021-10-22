const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 5000;
//user:mongodb
//password:PoMdTtNI9vx59nfH

const uri =
	'mongodb+srv://mongodb:PoMdTtNI9vx59nfH@cluster0.q5fov.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

async function run() {
	try {
		await client.connect();
		const database = client.db('foodMaster');
		const usersCollection = database.collection('users');

		//POST API//
		app.post('/users', async (req, res) => {
			res.send();
			console.log('testing post');
		});
		// create a document to insert
		// const doc = {
		// 	name: 'one',
		// 	email: 'one@gmail.com',
		// };
		// const result = await usersCollection.insertOne(doc);
		// console.log(
		// 	`A document was inserted with the _id: ${result.insertedId}`,
		// );
	} finally {
		await client.close();
	}
}
run().catch(console.dir);
//Or//
// client.connect((err) => {
// 	const collection = client.db('foodMaster').collection('users');
// 	// perform actions on the collection object
// 	console.log('hitting the database');
// 	const user = {
// 		name: 'Opu Biswas',
// 		email: 'mahiya@gmail.com',
// 		phone: '0199999999',
// 	};
// 	collection.insertOne(user).then(() => {
// 		console.log('insert success');
// 	});
// 	// client.close();
// });

app.get('/', (req, res) => {
	res.send('running crud server');
});

app.listen(port, () => {
	console.log('listening to port', port);
});
