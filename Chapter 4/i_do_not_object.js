////////////////////Data Sets
const randomCombo = function() {                            //Now using arrays
    let main = ['a double-bacon bbq cheeseburger', 'two hand-rolled sushi', 'three batter-fried fish tacos', 'pasta alla carbonara'];
    let side = ['sweet potato fries', 'tamagoyaki', 'shrimp ceviche', 'caprese salad']
    console.log("I'd like " + main[Math.floor(Math.random() * main.length)] + " as well as " +
        side[Math.floor(Math.random() * side.length)] + '.');
};
randomCombo();
randomCombo();

////////////////////Objects
let abc = {
    a: 'apple',
    b: 'bird',
    c: 'croissant'
};
console.log('That ' + abc.b + ' ate an ' + abc.a + '-flavored ' + abc.c + '.'); //Using properties
let numbers = {a:5};
Object.assign(numbers, {a:10582,b:82,c:9.283,d:(286/13)});              //Object.assign overwrites properties
console.log(numbers);

////////////////////Mutability
let alpha = {a:3};
let beta = alpha;
Object.assign(alpha, {a:'A', b:'jumble', c:'of', d:'ideas'});
console.log(beta);                                                          //beta is changed

let gamma = 3;
let delta = gamma;                                                          //A new 'object' is created with the same value
gamma = ['A', 'jumble', 'of', 'ideas'];                                     //instead of just a reference
console.log(gamma);
console.log(delta);                                                         //delta is not changed

////////////////////Array Loops
let list = [1, 2, 3, 4, 5], string1 = '';
for (let x = 0; x < list.length; x++) {
    string1 += list[x] + ' ';
}
console.log(string1); string1 = '';
for (let x of list) {
    string1 += x + ' ';
}
console.log(string1);                                                       //The result is the same

////////////////////Further Arrayology
const switchAround = front => {                                                 // Selects the first and last sections of an array,
    return (back, array) => {                                                   // and switches them around, original order intact
        if (front + back > array.length) {return 'Your array is too short!';}   // outer function takes in the first section length
        let fArray = [], bArray = [];                                           // inner function takes in the last, along with the array
        for (let a = front; a > 0; a--) { fArray.push(array.shift()); }
        for (let b = back; b > 0; b--) { bArray.push(array.pop()); }
        while (fArray.length !== 0) { array.push(fArray.shift()); }
        while (bArray.length !== 0) { array.unshift(bArray.shift()); }
        return array;
    };
};
let num = [1,2,3,4,5,6];
let first3 = switchAround(3);
console.log(first3(2,num));
num = [1,2,3];
console.log(first3(2,num));
let blah = '';
num = first3(4, ['does', 'this', 'sentence', 'still', 'make', 'sense', 'after', 'the', 'switch?']);
for (let x = 0; x < num.length; x++) {
    blah += num[x] + ' ';
}
console.log(blah);                                                              //I don't quite get it
