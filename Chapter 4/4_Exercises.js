//The Sum of a Range
const range = (a, b, c = 1) => {
    if (a === b && !a.isNaN) return [a];
    let array = [];
    while ((a <= b && c > 0) || (a >= b && c < 0)) {
        array.push(a);
        a += c;
    }
    return array;
};
const sum = (numbers) => {
    let x = 0;
    for (let y of numbers) {
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
const reverseArray = array => {
    let newArray = [];
    for (let element of array) {
        newArray.unshift(element);
    }
    return newArray;
};
const reverseArrayInPlace = array => {
    let swap;
    for (let n = 0; n < Math.floor(array.length/2); n++) {
        swap = array[n];
        array[n] = array[array.length-1-n];
        array[array.length-1-n] = swap;
    }
};
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

//A List
const arrayToList = array => {
    if (array.length === 0) return null;
    return { value: array[0],  rest: arrayToList(array.slice(1)) };
};
const listToArray = list => {
    if (list.rest === null) return [list.value];
    return [list.value].concat(listToArray(list.rest));
};
const prepend = (number, list) => {
    return { value: number, rest: list}
};
let nth = (list, number) => {
    let current = list.value, nextList = list.rest;
    for(let a = 0; a < number; a++) {
        current = nextList.value;
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
    if ((typeof(item1) == 'object' && typeof(item2) == 'object') && (item1 || item2) != null) {
        let prop1 = Object.keys(item1), prop2 = Object.keys(item2);
        if(prop1.length === prop2.length) {
            for(let o = 0; o < prop1.length; o++) {
                if(typeof item1[prop1[o]] == 'object') {
                    if(!deepEqual(item1[prop1[o]], item2[prop1[o]])) return false;
                }
                else if (item1[prop1[o]] !== item2[prop2[o]]) return false;
            }
            return true;
        }
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