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