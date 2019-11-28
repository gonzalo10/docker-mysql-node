const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const app = express();

const PORT = 3001;
const HOST = '127.0.0.1';

const sequelize = new Sequelize('gonzaloTest', 'root', 'root', {
	dialect: 'mysql',
	port: 3301,
	pool: {
		max: 10,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
});

// to run on docker docker run -p 3001:3001 test-node-app

try {
	sequelize
		.sync()
		.then(() => app.listen(PORT, () => console.log('running on port: ' + PORT)))
		.catch(err => console.log(err));

	// when it breaks append this .authenticate() then run then delete the word
	// it works by forcing to re-store the connection
} catch (err) {
	console.log('server err', err);
}
