//Abstracting Repetition - Four levels of repetition!
let var1 = '';                                                     //chapter 2 coding
for (let x = 0; x < 20; x++) {
    var1 += 'no ';
}
console.log(var1);                                                 //returns a string of 20 no's
console.log('\n');


const sayNTimes = N => what => {                                   //chapter 3 coding
    let var2 = '';
    for (let x = 0; x < N; x++) {
        var2 += `${what} `;
    }
    console.log(var2);                                            //repeats a given string N times, all in one string
};
let denial = sayNTimes(25);
denial('Nein');
console.log('\n');


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
console.log('\n');


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
higherThoughts.think(5, x => {                                               //identical function from before
    return `(${higherThoughts.bank[Math.floor(Math.random() * higherThoughts.bank.length)]}...) `;
});
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