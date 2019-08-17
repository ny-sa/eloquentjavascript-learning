//Array Loops
let list = [1, 2, 3, 4, 5], string1 = '';
for (let x = 0; x < list.length; x++) {
    string1 += list[x] + ' ';
}
console.log(string1); string1 = '';
for (let x of list) {
    string1 += x + ' ';
}
console.log(string1);                                                       //the result is the same