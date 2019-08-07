//Numbers
let a = 2 ** 53;
let b = 1 + 2 ** 53;
let c = -3 + 2 ** 53;
console.log('a = ' + a + "|b = " + b + `|c = ` + c);                                          //testing the limit for a value
console.log(8888e-2+8888e2);
console.log(5/7);
console.log(1 - 2 + 3 / 4 * 5 ** (2+4));                                                      //pemdas

//Special Numbers
console.log(Infinity);
console.log(Infinity - Infinity);

//Strings
console.log(`7 to the power of 9 is ${7**9}.`);

//Boolean Values
console.log('Z'>'a');

//Automatic Type Conversion
a = 6;
console.log(a + '|' + (a + "pac") + '|' + (a + "pac" - 3));
console.log("Do you have a " + typeof 4.7 + "?" + "\nI'll give mine, no " + typeof "no way" + "s attached.");  //using typeof

//Short-circuiting of Logical Operators
console.log((282%17 > 13) ? (5**5) : 1===2 || 5===5);                                           //booleans
console.log(null || 'me' ? typeof 1>0 : "a");