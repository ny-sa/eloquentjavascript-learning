//Higher-Order Functions
const repeatPlusOne = (n, func) => {                        //normal repeat, but starts at one instead;
    for (let x = 1; x <= n; x++) {
        func(x);
    }
};
const eitherOrThen = (a, b, then) => {                     //either-or gate, then passes a certain value if true
    if (a && !b) then(0);
    if (!a && b) then(1);
};
repeatPlusOne(25, x => {                          //Goes through 1 to 25 and applies the either-or gate of the two conditions
    eitherOrThen(x % 2 === 1, x % 3 === 0, c => {
        if (c === 0) console.log(x, 'is odd, but not divisible by three');
        if (c === 1) console.log(x, 'is divisible by three, but not odd');
    });
});