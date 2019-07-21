var animals = [
    { name: 'Fluffykins', species: 'rabit' },
    { name: 'Tommy', species: 'dog' },
    { name: 'Sheru', species: 'dog' },
    { name: 'Hamilton', species: 'fish' },
    { name: 'SmellyCat', species: 'cat' },
    { name: 'Hopkins', species: 'fish' }
];

var animalNames = [];
for (var i = 0; i < animals.length; i++) {
    var name = {
        name: animals[i].name
    };
    animalNames.push(name);
}
animalNames;

var animalNames = animals.map((animal) => {
    return {name: animal.name}
});
animalNames;