var cartItems = [
    { amount: 300 },
    { amount: 400 },
    { amount: 500 },
    { amount: 100 },
    { amount: 200 },
    { amount: 600 }
];

var totalAmount = 0;
for (var i = 0; i < cartItems.length; i++) {
    totalAmount += cartItems[i].amount;
}
totalAmount;

var totalAmount = cartItems.reduce((sum, item) => {
    return sum += item.amount;
}, 0);
totalAmount;