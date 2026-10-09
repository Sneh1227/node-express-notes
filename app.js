// modules
// const utilities = require("./utilities");

// const total = utilities.calculateTotal(1500, 3);
// console.log(total);

// const destination = {
//     name: "Goa",
//     available: true
// };

// console.log(utilities.isAvailable(destination));

// http server through node
const http = require("http");
const fs = require("fs");

// const myserver = http.createServer((req, res) => {
//     const log = `${Date.now()}: ${req.url} New Req Received\n`;
//     fs.appendFile("log.txt", log, (err, data) => {
//         switch (req.url) {
//             case "/":
//                 res.end("HomePage");
//                 break;
//             case "/about":
//                 res.end("I am sneh prajapati");
//                 break;
//             default:
//                 res.end(" 404 not found");
//         }
//     });
// });

// myserver.listen(8000, () => console.log("server started"));

// express
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    return res.send("this is home page");
});

app.get("/about", (req, res) => {
    return res.send(`hey it's sneh prajapati ${req.query.name}`);
});

app.listen(8000, () => console.log("server started!"));