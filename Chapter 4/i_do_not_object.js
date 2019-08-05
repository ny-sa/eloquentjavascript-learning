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
let delta = gamma;                                                          //a new 'object' is created with the same value
gamma = ['A', 'jumble', 'of', 'ideas'];                                     //instead of just a reference
console.log(gamma);
console.log(delta);                                                         //delta is not changed

////////////////////The lycanthrope’s log
let journal = [];

function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}
addEntry(["work", "touched tree", "pizza", "running",
    "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
    "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
    "beer"], true);