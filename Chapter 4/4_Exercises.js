//The Sum of a Range
const range = (a, b, c = 1) => {                                 //let the third 'step' parameter default to 1
    if (a.isNaN || b.isNaN) return;                              //checks if a and b are numbers
    if (a === b) return [a];                                     //checks if a and b are equal
    let array = [];
    while ((a <= b && c > 0) || (a >= b && c < 0)) {             //checks if the step value makes sense with the given range
        array.push(a);
        a += c;                                                  //adds a, a + c, a + 2c... values that don't exceed b
    }
    return array;
};
const sum = (numbers) => {                                       //quick and dirty, did not feel like adding more cases
    let x = 0;
    for (let y of numbers) {                                     //shorthand loop
        x += y;
    }
    return x;
};
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

//Reversing an Array
const reverseArray = array => {                                     //goes through the passed array, and adds each element to a new
    let newArray = [];                                              // array from the other side using unshift()
    for (let element of array) {
        newArray.unshift(element);
    }
    return newArray;
};
const reverseArrayInPlace = array => {                              //without using another array, switches elements starting from
    let swap;                                                       //the outermost to the middle
    for (let n = 0; n < Math.floor(array.length / 2); n++) {
        swap = array[n];                                            //swaps 'array length/2' times rounded down, such that on odd
        array[n] = array[array.length - 1 - n];                     // arrays the middle element is left untouched
        array[array.length - 1 - n] = swap;
    }
};
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

//A List
const arrayToList = array => {                                     //linked lists are nice; I guess recursion is the easy way out
    if (array.length === 0) return null;                           //base case
    return { value: array[0],  rest: arrayToList(array.slice(1)) };
};
const listToArray = list => {
    if (list.rest === null) return [list.value];
    return [list.value].concat(listToArray(list.rest));            //single element arrays glued together into a larger one
};
const prepend = (number, list) => {
    return { value: number, rest: list };
};
let nth = (list, number) => {                                      //the textbook assumes that people do these iteratively first?
    let current = list.value, nextList = list.rest;                //for me it's somehow the other way
    for (let a = 0; a < number; a++) {
        current = nextList.value;                                  //shifts by one node per run
        nextList = nextList.rest;
    }
    return current;
};
nth = (list, number) => {
    if (number === 0) return list.value;
    else return nth(list.rest, number - 1);
};
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

//Deep Comparison
deepEqual = (item1, item2) => {
    if ((typeof(item1) == 'object' && typeof(item2) == 'object') && (item1 || item2) != null) {     //checks if both parameters are
        let prop1 = Object.keys(item1), prop2 = Object.keys(item2);                                 //objects and not null,
        if (prop1.length === prop2.length) {                                       //if they have the same number of properties,
            for (let o = 0; o < prop1.length; o++) {                               //then the real comparison starts
                if (typeof item1[prop1[o]] == 'object') {
                    if (!deepEqual(item1[prop1[o]], item2[prop1[o]])) return false;//calls function again if the properties involve
                }                                                                  // more objects
                else if (item1[prop1[o]] !== item2[prop2[o]]) return false;
            }
            return true;                                              //if the loop passes without a single comparison returning
        }                                                             //false, then the deep comparison finally returns true
        return false;
    }
    return (item1 === item2);
};
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true