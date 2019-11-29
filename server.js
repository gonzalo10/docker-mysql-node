const express = require('express');
const Sequelize = require('sequelize');

const PORT = 3001;
const HOST = '127.0.0.1';

const sequelize = new Sequelize('', 'root', 'root', {
	dialect: 'mysql',
	host: 'dataBase',
	port: 3306,
	pool: {
		max: 10,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
});

sequelize.authenticate().then(function(errors) {
	console.log(errors);
});

// try {
// 	sequelize
// 		.sync()
// 		.then(() => app.listen(PORT, () => console.log('running on port: ' + PORT)))
// 		.catch(err => console.log(err));

// 	// when it breaks append this .authenticate() then run then delete the word
// 	// it works by forcing to re-store the connection
// } catch (err) {
// 	console.log('server err', err);
// }
