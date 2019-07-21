function addNumbers(x) {
    return function addAnotherNumber(y) {
        return x + y;
    }
}

var sum = addNumbers(2)(5);
sum;

let dragon = name => 
                size => 
                    fire => 
                        name + ' is a ' + size + ' little dragon, that breaths ' + fire;
                                            
var a = dragon('fluffykins')('tiny')('lightning');
a;