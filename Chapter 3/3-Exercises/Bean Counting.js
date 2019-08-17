//Bean Counting
const countBs = function(a) {
    let num = 0;
    for (let n = 0; n < a.length; n++) {            //<= string.length - 1 or < string.length, which is better to use?
        if (a[n] === 'B')
            num++;
    }
    return num;
};
const countChar = function(b, c) {                  //copy, paste, tweak
    let num = 0;
    for (let n = 0; n < b.length; n++) {
        if (b[n] === c)
            num++;
    }
    return num;
};
console.log(countBs("Bored Bob"));
console.log(countChar("Mississippi", "s"));