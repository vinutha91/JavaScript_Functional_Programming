function addNumbers(x) {
    return function addAnotherNumber(y) {
        return x + y;
    }
}

var sum = addNumbers(2)(5);
sum;