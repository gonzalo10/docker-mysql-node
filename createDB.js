var mysql = require('mysql2');

var con = mysql.createConnection({
	host: 'localhost',
	port: 3309,
	user: 'root',
	password: 'root',
});

con.connect(function(err) {
	if (err) throw err;
	console.log('Connected!');
	con.query('CREATE DATABASE mydb', function(err, result) {
		if (err) throw err;
		console.log('Database created');
	});
});
