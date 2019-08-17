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