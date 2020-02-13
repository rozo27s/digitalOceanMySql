const mysql = require('mysql');

let con = mysql.createConnection({
    host: '64.225.7.173',
    user: 'Javier',
    password: 'Rozo2788.',
    database: 'db_serpiente'
});

con.connect();

con.query("select * from jugador", (err, res) => {
    if(err) throw err;
    console.log(res);
})

con.end();