//Everything
function every(array, test) {                                                   //loop version
    for (let i = 0; i < array.length; i++) {
        if (!test(array[i])) return false;
    }
    return true;
}
every = (array, test) => {                                                      //some version
    return !array.some(x => !test(x));
};
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true