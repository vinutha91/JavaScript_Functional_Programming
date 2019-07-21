var cartItems = [
    { amount: 300 },
    { amount: 400 },
    { amount: 500 },
    { amount: 100 },
    { amount: 200 },
    { amount: 800 },
    { amount: 700 },
    { amount: 900 },
    { amount: 1000 }
];

var itemsGreater = cartItems.reduce(function(items, item) {
    if (item.amount > 400) {
        items.push(item)
    }
    return items;
}, []);
itemsGreater