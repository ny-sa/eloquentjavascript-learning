//Deep Comparison
deepEqual = (item1, item2) => {
    if ((typeof(item1) == 'object' && typeof(item2) == 'object') && (item1 || item2) != null) {     //checks if both parameters are
        let prop1 = Object.keys(item1), prop2 = Object.keys(item2);                                 //objects and not null,
        if (prop1.length === prop2.length) {                                       //if they have the same number of properties,
            for (let o = 0; o < prop1.length; o++) {                               //then the real comparison starts
                if (typeof item1[prop1[o]] == 'object') {
                    if (!deepEqual(item1[prop1[o]], item2[prop1[o]])) return false;//calls function again if the properties involve
                }                                                                  // more objects
                else if (item1[prop1[o]] !== item2[prop2[o]]) return false;
            }
            return true;                                              //if the loop passes without a single comparison returning
        }                                                             //false, then the deep comparison finally returns true
        return false;
    }
    return (item1 === item2);
};
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true