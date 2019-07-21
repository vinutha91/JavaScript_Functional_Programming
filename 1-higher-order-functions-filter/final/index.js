var double = function double(x) {
    return x*2;
};
double(2);

var customDouble = double;
customDouble(5);

var animals = [
    { name: 'Fluffykins', species: 'rabit' },
    { name: 'Tommy', species: 'dog' },
    { name: 'Sheru', species: 'dog' },
    { name: 'Hamilton', species: 'fish' },
    { name: 'SmellyCat', species: 'cat' },
    { name: 'Hopkins', species: 'fish' }
];

var isDog = function(animal) {
    return animal.species === 'dog';
};

var dogs = animals.filter(isDog);

dogs;

// var dogs = [];
// for (var i = 0; i < animals.length; i++) {
//     if (animals[i].species === 'dog') {
//         dogs.push(animals[i]);
//     }
// }