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