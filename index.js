const express = require('express');

const app = express();
const fs = require('fs');
const PORT = 8000;
const users = require('./MOCK_DATA.json');

//middleware - plugin
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// html response
app.get('/users', (req, res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

// rest API

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.route('/api/users/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        if(!user){
            return res.json({status:"not found"});
        }
        return res.json(user);
    })
    .patch((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        if (!user) {
            res.json({ status: "not found" });
        }

        Object.assign(user, req.body);

        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
            if (err) {
                return res.json({ status: "error" });
            }

            return res.json({ status: "success", user });
        });
    })
    .delete((req, res) => {
        const id = Number(req.params.id);
        const user = users.findIndex((user) => user.id == id);
        if (!user) {
            return res.json({ status: "not found" });
        } else {
            const deleteduser = users.splice(user, 1)[0];
            if (deleteduser) {
                fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
                    if (err) {
                        return res.json({ status: "error", err });
                    }
                });
                return res.json({ status: "success", user:deleteduser });
            } else {
                console.log("ERROR");
            }
        }

    });


app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({ status: "success", id: users.length });
    });

});


app.listen(PORT, () => {
    console.log(`server started at port: ${PORT}`);
});