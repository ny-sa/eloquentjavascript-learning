//Nested Scope
const passItOn = function(a) {                              //nest test
    const pio2 = function(b) {
        const pio3 = function(c) {
            const pio4 = function(d) {
                return 'Are ' + d;
            };
            return pio4('you') + ' ' + c;
        };
        return pio3('really') + ' ' + b;
    };
    console.log(pio2('home') + ', ' + a + '?');
};
passItOn('Jacques');