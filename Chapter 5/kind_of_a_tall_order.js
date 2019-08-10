//Abstracting Repetition
let var1 = '';                                                     //chapter 2 coding
for (let x = 0; x < 20; x++) {
    var1 += 'no ';
}
console.log(var1);                                                 //returns a string of 20 no's

const sayNTimes = N => what => {                                   //chapter 3 coding
    let var2 = '';
    for (let x = 0; x < N; x++) {
        var2 += `${what} `;
    }
    console.log(var2);                                            //repeats a given string N times, all in one string
};
let denial = sayNTimes(25);
denial('Nein');

let jumbleThoughts = {                                                       //chapter 4 coding
    bank: [],
    add: function(...string) { jumbleThoughts.bank.push(...string); },       //takes in strings
    think: num => {
        if (jumbleThoughts.bank.length < 1) {
            console.log("You can't think up what you don't know!");
            return; }
        let stream = '';
        for (let x = 0; x < num; x++) {
            stream += `(${jumbleThoughts.bank[Math.floor(Math.random() * jumbleThoughts.bank.length)]}...) `;
        }
        console.log(stream);                                                 //then outputs a string of 5 randomly chosen thoughts
    }
};
jumbleThoughts.add('a polite shame', 'a broken ownership', 'an extraordinary dressing', 'a principle archbishop',
    'a round asylum', 'a dreadful liver', 'an immune universe', 'a manual behalf', 'a neighboring square',
    'a technological belt', 'a democratic confidence', 'a calm root', 'a specific decision-making', 'a characteristic whale',
    'a disciplinary desktop', 'an abnormal key', 'a low store', 'a remaining tunnel', 'an acceptable definition',
    'a homogeneous nitrogen', 'a voluntary journey', 'a good agreement', 'an acute soul', 'a voluntary decline',
    'a radical phenomenon', 'a planned jar', 'an uncertain shareholder', 'a dense step', 'an integrated railway',
    'a vigorous assignment', 'an early condition', 'a resulting ship', 'an unexpected context', 'an unwilling church');
jumbleThoughts.think(4);

let higherThoughts = {};                                                       //chapter 5 coding: abstracting repetition
Object.assign(higherThoughts, jumbleThoughts);
higherThoughts.think = (num, func) => {
    if (higherThoughts.bank.length < 1) {
        console.log("You can't think up what you don't know!");
        return; }
    let stream = '';
    for (let x = 0; x < num; x++) {
        stream += func(x);
    }
    console.log(stream);
};
higherThoughts.already = [];
/*higherThoughts.think(5, x => {                                               //identical function from before
    return `(${higherThoughts.bank[Math.floor(Math.random() * higherThoughts.bank.length)]}...) `;
});*/
const thinkingProcess = x => {                                                 //new function to be abstracted
    let thought = higherThoughts.bank[Math.floor(Math.random() * higherThoughts.bank.length)];
    while (higherThoughts.already.includes(thought)) {
        thought = higherThoughts.bank[Math.floor(Math.random() * higherThoughts.bank.length)]
    }
    higherThoughts.already.push(thought);
    let factor =  Math.min(1, thought.length / 25);
    if (Math.random() > (factor * .7 + .05))
        thought += '... now this is interesting!';                             //shorter thoughts are more likely to be interesting
    else
        thought += "... I'm not sure what this is about.";
    return `thought ${x + 1}: ` + thought + '\n';          //returns a unique numbered thought and evaluation as its own line
};
higherThoughts.think( 5, thinkingProcess);           //generates a list of 5 utilizing the new function


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


//Filtering Arrays
function filter(array, test) {                                      //copied from chapter
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}
const eitherOr = (a, b) => {                                        //just the either-or gate
    if (a && !b) return true;
    return !a && b;
};
startingFromOne = num => {                                          //creates an array of numbers from 1 to num
    let array = [];
    repeatPlusOne(num, x => { array.push(x); });
    return array;
};
testArray = startingFromOne(25);
console.log(filter(testArray, test =>                         //filters numbers divisible either by 3 or 4 into a new array
eitherOr(test % 3 === 0, test % 4 === 0)));


//Transforming with Map
function map(array, transform) {                                   //copied from chapter
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}
higherThoughts.isInteresting = thought => {                        //based upon the previous thoughtProcess function
    let factor =  Math.min(1, thought.length / 25);
    return (Math.random() > (factor * .7 + .05));
};
function shatterScrambleStutter(victim) {                         //copied from i_do_not_object.js
    if (typeof victim !== 'string') {return 'Only strings are to be punished.'}
    let pieces = [], start = 0;
    for(let i = 0; i < victim.length; i++) {
        if (Math.ceil(Math.random() * 3) === 1 || i === victim.length - 1) {
            pieces.push(victim.slice(start, i + 1));
            start = i + 1;
        }
    }
    let s, t, u, r;
    for (let j = pieces.length - 1; j > 1; j--) {
        s = Math.floor((Math.random() * j) + 1);
        t = pieces[j]; pieces[j] = pieces[s]; pieces[s] = t;
    }
    for (let k = 0; k < pieces.length; k++) {
        u = 0; r = pieces[k];
        do { u++; } while (Math.floor(Math.random() * 2) !== 0);
        pieces[k] = r.repeat(u);
    }
    return pieces.join('');
}
let interestingThoughts = filter(higherThoughts.bank, thought => higherThoughts.isInteresting(thought));
//console.log(interestingThoughts);                                  //array changes every time as expected
let lovecraftChatter = map(interestingThoughts, victim => shatterScrambleStutter(victim));
console.log(lovecraftChatter);                                       //outputs new array with shatterScrambleStutter applied on


//Summarizing with Reduce
function reduce(array, combine, start) {                             //copied from chapter
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}
const isPrime = x => {
    if (x === 1) return false;
    if (x === 2) return true;
    for (let n = 2; n < x; n++) {
        if (x % n === 0)
            return false
    }
    return true;
};
let testArray2 = startingFromOne(100);
let randomPrimes = filter(map(testArray2, x => x + Math.ceil(Math.random() * 1000)), x => isPrime(x));
consolidateToString = reduce(randomPrimes, (a, b) => a + `${b} `, 'Here are some random prime numbers: ');
console.log(consolidateToString);                                   //returns array of random prime numbers from 2 to 1100
                                                                    //as one string