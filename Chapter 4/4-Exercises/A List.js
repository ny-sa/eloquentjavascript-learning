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