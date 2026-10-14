// postgreSQL connection and CRUD

const { Client } = require('pg');

const con = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "sneh1227",
    database: "DemoDB"
});

con.connect().then(() => console.log("connected"))

con.query('select * from tbl_user', (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    con.end;
})