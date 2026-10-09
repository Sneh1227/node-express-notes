const { error } = require("console");
const fs = require("fs");

// sync
// fs.writeFileSync("./data.txt","Hey Folks");

// async
// fs.writeFile("./data.txt","hey folks async",error=>{});

// readfile sync
// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);

// async will return a result while sync will not return the result
//  for result we have to put a call back function.

// sync
// 

// append
// fs.appendFileSync("./data.txt", "hello\n");

// copy
// fs.cpSync("./data.txt","./copy.txt");

// delete
fs.unlinkSync("./copy.txt");