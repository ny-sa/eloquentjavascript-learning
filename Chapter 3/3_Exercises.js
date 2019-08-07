//No hints! Ever!
//Minimum
const min = (x, y) => {
    if (x <= y)                                 //simple condition check
        return x;
    else
        return y;
};
console.log(min(1,'a'));                  //all strings are before numbers I guess

//Recursion
function isEven(x){
    if (!Number.isInteger(x))                   //checks if not integer
        return 'Integers only!';
    if (x === 0)
        return true;
    if (x === 1)
        return false;
    if (x < 0)                                  //checks if negative
        return isEven(x + 2);
    else
        return isEven(x - 2);
}
console.log(isEven(1.5));
console.log(isEven('0'));
console.log(isEven(255));
console.log(isEven(120));
console.log(isEven(-131));

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
