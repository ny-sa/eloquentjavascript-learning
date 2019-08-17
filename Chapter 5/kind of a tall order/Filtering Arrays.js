const repeatPlusOne = (n, func) => {                                //copied from Higher-Order Functions
    for (let x = 1; x <= n; x++) {
        func(x);
    }
};

//Filtering Arrays
function filter(array, test) {                                      //copied from chapter
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}
const eitherOr = (a, b) => {                                        //just the either-or gate
    if (a && !b) return true;
    return !a && b;
};
startingFromOne = num => {                                          //creates an array of numbers from 1 to num
    let array = [];
    repeatPlusOne(num, x => { array.push(x); });
    return array;
};
testArray = startingFromOne(25);
console.log(filter(testArray, test =>                         //filters numbers divisible either by 3 or 4 into a new array
    eitherOr(test % 3 === 0, test % 4 === 0)));