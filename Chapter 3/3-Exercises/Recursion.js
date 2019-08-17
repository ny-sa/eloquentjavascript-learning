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