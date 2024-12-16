const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_db_user',
    password: 'your_db_password',
    database: 'chat_db'
});
connection.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected...");
});
module.exports = connection;
