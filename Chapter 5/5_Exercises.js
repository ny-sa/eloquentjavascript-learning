const SCRIPTS = require('C:\\Projects\\EloquentJavaScript\\Chapter 5\\scripts.js');
function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}
function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name === name);
        if (known === -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}
function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}
function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}



//Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
newArray = arrays.reduce((a, b) => { return a.concat(b); }, []);                    //concatenates down to the last element
console.log(newArray);
// → [1, 2, 3, 4, 5, 6]



//Your own Loop
const loop = (n, tested, updated, bodied) => {                                //a while loop, but each part is a function parameter
    while(tested(n)) {
        bodied(n);
        n = updated(n);
    }
};
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1



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



//Dominant Direction
function dominantDirection(text) {
    let array = countBy(text, character => {                    //like the previous textScripts, but with direction instead of name
        let s = characterScript(character.codePointAt(0));
        return s ? s.direction : "none";
    }).filter(({ name }) => name !== "none");                              //filters characters with no "direction"
    let top = array[0];
    for (let x of array) {                                                 //searches for the element with the highest count .then
        if (x.count > top.count) top = x;                                  // returns the name of that element
    }
    return top.name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl

//let test = 'Hey, مساء الخير';
//console.log(characterScript(test.codePointAt(6)));
