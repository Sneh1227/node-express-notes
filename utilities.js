function calculateTotal(price, quantity) {
    return price * quantity;
}

function isAvailable(destination) {
    return destination.available === true;
}

module.exports = {
    calculateTotal,
    isAvailable
}