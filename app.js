const utilities = require("./utilities");

const total = utilities.calculateTotal(1500, 3);
console.log(total);

const destination = {
    name: "Goa",
    available: true
};

console.log(utilities.isAvailable(destination));

