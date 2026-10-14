// postgreSQL connection and CRUD

const { Client } = require('pg');
const express = require('express');
const app = express();
app.use(express.json());

const con = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "sneh1227",
    database: "DemoDB"
});

con.connect().then(() => console.log("connected"))

// con.query('select * from tbl_user', (err, res) => {
//     if (!err) {
//         console.log(res.rows);
//     } else {
//         console.log(err.message);
//     }
//     con.end;
// });

// post
app.post('/postData', (req, res) => {
    const { id, name, city } = req.body;

    const insert_query = 'INSERT INTO tbl_user (id,name,city) values ($1,$2,$3)'


    con.query(insert_query, [id, name, city], (err, result) => {
        if (err) {
            console.log("");
        } else {
            console.log(result);
            res.send("POSTED DATA");
        }
    });
});

// get all
app.get('/fetchData', (req, res) => {
    const get_query = 'select * from tbl_user';

    con.query(get_query, (err, result) => {
        if (err) {
            res.send(err.message);
        } else {
            res.send(result.rows);
        }
    });
});

// get by id
app.get('/fetchbyid/:id', (req, res) => {
    const id = req.params.id;
    const find_query = 'select * from tbl_user where id=$1';

    con.query(find_query, [id], (err, result) => {
        if (err) {
            res.send(err.message);
        } else {
            res.send(result.rows);
        }
    });
});

// update
app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const city = req.body.city;

    const update_query = "update tbl_user set name=$2, city=$3 where id=$1";
    con.query(update_query, [id, name, city], (err, result) => {
        if (err) {
            res.send(err.message);
        } else {
            res.send("updated" + result.rows);
        }
    });
});

// delete
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    const delete_query = 'delete from tbl_user where id = $1';

    con.query(delete_query, [id], (err, result) => {
        if (err) {
            res.send(err.message);
        } else {
            res.send("user deleted successfully");
        }
    });
});

app.listen(3000, () => {
    console.log("Server is running");
});