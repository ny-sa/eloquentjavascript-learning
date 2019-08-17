const shatterScrambleStutter = v => {                         //drawn from Strings and their Properties
    if (typeof v !== 'string') {return 'Just strings are to be punished.'}
    let bits = [], begin = 0;
    for(let i = 0; i < v.length; i++) {
        if (Math.ceil(Math.random() * 3) === 1 || i === v.length - 1) {
            bits.push(v.slice(begin, i + 1));
            begin = i + 1;
        }
    }
    let s, t, u, r;
    for (let j = bits.length - 1; j > 1; j--) {
        s = Math.floor((Math.random() * j) + 1);
        t = bits[j]; bits[j] = bits[s]; bits[s] = t;
    }
    for (let k = 0; k < bits.length; k++) {
        u = 0; r = bits[k];
        do { u++; } while (Math.floor(Math.random() * 2) !== 0);
        bits[k] = r.repeat(u);
    }
    return bits.join('');
};
const higherThoughts = {                                      //drawn from Abstracting Repetition
    bank: [],
    add: function(...string) { higherThoughts.bank.push(...string); },
    think: (num, func) => {
        if (higherThoughts.bank.length < 1) {
            console.log("You can't think up what you don't know!");
            return; }
        let stream = '';
        for (let x = 0; x < num; x++) {
            stream += func(x);
        }
        console.log(stream);
    },
    already: [],
};
function filter(array, test) {                                      //copied from chapter
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

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

higherThoughts.add('a polite shame', 'a broken ownership', 'an extraordinary dressing', 'a principle archbishop',
    'a round asylum', 'a dreadful liver', 'an immune universe', 'a manual behalf', 'a neighboring square',
    'a technological belt', 'a democratic confidence', 'a calm root', 'a specific decision-making', 'a characteristic whale',
    'a disciplinary desktop', 'an abnormal key', 'a low store', 'a remaining tunnel', 'an acceptable definition',
    'a homogeneous nitrogen', 'a voluntary journey', 'a good agreement', 'an acute soul', 'a voluntary decline',
    'a radical phenomenon', 'a planned jar', 'an uncertain shareholder', 'a dense step', 'an integrated railway',
    'a vigorous assignment', 'an early condition', 'a resulting ship', 'an unexpected context', 'an unwilling church');
let interestingThoughts = filter(higherThoughts.bank, thought => higherThoughts.isInteresting(thought));
let lovecraftChatter = map(interestingThoughts, victim => shatterScrambleStutter(victim));

console.log(interestingThoughts);                                    //sane version
console.log(lovecraftChatter);                                       //insane version, same array but with shatterScrambleStutter