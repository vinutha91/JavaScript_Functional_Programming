function countdownFrom(num) {
    if (num === 0) return;
    console.log(num);
    countdownFrom(num - 1);
}

countdownFrom(10);

let categories = [
    { id: 'animals', parent: null },
    { id: 'mammals', parent: 'animals' },
    { id: 'cats', parent: 'mammals' },
    { id: 'dogs', parent: 'mammals' },
    { id: 'labrador', parent: 'dogs' },
    { id: 'germanshephard', parent: 'dogs' },
    { id: 'persian', parent: 'cats' },
    { id: 'siamese', parent: 'cats' }
];

function makeTree(categories, parent) {
    let node = {};
    categories.filter((category) => {
        return category.parent === parent;
    })
    .forEach((category) => {
        node[category.id] = makeTree(categories, category.id);
    })
    return node;
}
console.log(JSON.stringify(makeTree(categories, null)))

/*
- animals
    - mammals
        - dogs
            - labrador
            - german shephard
        - cats
            - persian
            - siamese
*/