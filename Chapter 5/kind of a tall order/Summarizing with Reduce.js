function filter(array, test) {                                      //copied from chapter
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}
function map(array, transform) {                                   //copied from chapter
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}
const repeatPlusOne = (n, func) => {                                //copied from Higher-Order Functions
    for (let x = 1; x <= n; x++) {
        func(x);
    }
};
startingFromOne = num => {                                          //copied from Filtering Arrays
    let array = [];
    repeatPlusOne(num, x => { array.push(x); });
    return array;
};

//Summarizing with Reduce
function reduce(array, combine, start) {                             //copied from chapter
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}
const isPrime = x => {
    if (x === 1) return false;
    if (x === 2) return true;
    for (let n = 2; n < x; n++) {
        if (x % n === 0)
            return false
    }
    return true;
};
let testArray2 = startingFromOne(100);
let randomPrimes = filter(map(testArray2, x => x + Math.ceil(Math.random() * 1000)), x => isPrime(x));
consolidateToString = reduce(randomPrimes, (a, b) => a + `${b} `, 'Here are some random prime numbers: ');
console.log(consolidateToString);                                   //returns array of random prime numbers from 2 to 1100
                                                                    //as one string