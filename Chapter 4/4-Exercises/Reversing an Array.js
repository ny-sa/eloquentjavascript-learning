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