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
console.log(blah);                                                              //I don't quite get you

////////////////////Strings and their Properties
function shatterScrambleStutter(victim) {
    if (typeof victim !== 'string') {return 'Only strings are to be punished.'}
    let pieces = [], start = 0;
    for(let i = 0; i < victim.length; i++) {                                        //Shatters: Slices string at random lengths, averaging 3 characters each
        if (Math.ceil(Math.random() * 3) === 1 || i === victim.length - 1) {
            pieces.push(victim.slice(start, i+1));
            start = i + 1;
        }
    }
    let s, t, u, r;
    for(let j = pieces.length - 1; j > 1; j--) {                                    //Scrambles: Shuffles sliced sections of the string
        s = Math.floor((Math.random() * j) + 1);
        t = pieces[j]; pieces[j] = pieces[s]; pieces[s] = t;
    }
    for(let k = 0; k < pieces.length; k++) {                                        //Stutters: 50% chance to add one extra stutter on top of another
        u = 0; r = pieces[k];                                                       //Averages to one extra repeat for each segment
        do {u++;} while(Math.floor(Math.random() * 2) !== 0);
        pieces[k] = r.repeat(u);
    }
    return pieces.join('');                                                         //Joins the pieces together into a string
}
console.log(shatterScrambleStutter([3,6,9]));
console.log(shatterScrambleStutter('I love the outdoors! Do you?'));

////////////////////Rest Parameters
let birds = {
    words : ['Caw', 'Cheep', 'Chirp', 'Cluck', 'Coo', 'Cuckoo', 'Gobble gobble', 'Honk honk', 'Quack', 'Squawk', 'Tweet tweet', 'Warble'],
    noises : function(b) {
        let stringy = '';
        while(b > 0) {
            stringy += birds.words[Math.floor(Math.random() * birds.words.length)] + '!';
            b--;
            if (b > 0) stringy += ' ';
        }
        return stringy + ' ';
    },
    noise : (a, ...conversation) => {                                               //Bird noises are making it hard to hear
        if (a < 0 || !Number.isInteger(a)) {                                        //a = noise amount
            console.log('Positive integers only');                                  //...conversation = what is being interrupted
            return;
        }
        let stringier = '';
        for (let b = 0; b < conversation.length; b++) {
            stringier += birds.noises(a) + '(' + conversation[b] + ') ' + birds.noises(a);
            if (b < conversation.length - 1) stringier += '\n';
        }
        console.log(stringier);
    }
};
birds.noise(4, 'I', "can't", 'hear', 'you!');
birds.noise( 1, "They're quieter", 'now.');

////////////////////The Math Object
function thirdSideSAS(a, b, degree) {                                              //Finds third side given the first two and the angle they make
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - (2 * a * b * Math.cos(degree * Math.PI / 180)));
    console.log('Given that side a equals ' + a + ', side b equals ' + b + ', and they make an angle of ' + degree + ' degrees,' + '\nside c roughly equals ' + c.toFixed(3));
}
thirdSideSAS(4,13, 102);

