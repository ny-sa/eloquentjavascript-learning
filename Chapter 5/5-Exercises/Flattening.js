//Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
newArray = arrays.reduce((a, b) => { return a.concat(b); }, []);                    //concatenates down to the last element
console.log(newArray);
// → [1, 2, 3, 4, 5, 6]