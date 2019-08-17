//Rest Parameters
let birds = {
    words : ['Caw', 'Cheep', 'Chirp', 'Cluck', 'Coo', 'Cuckoo', 'Gobble gobble', 'Honk honk', 'Quack', 'Squawk', 'Tweet tweet',
        'Warble'],                                                                  //many kinds of birds together
    noises : function(b) {                                                          //helper function that generates the noisy
        let stringy = '';                                                           //strings
        while(b > 0) {
            stringy += birds.words[Math.floor(Math.random() * birds.words.length)] + '!';
            b--;
            if (b > 0) stringy += ' ';
        }
        return stringy + ' ';
    },
    noise : (a, ...conversation) => {                                               //bird noises are making it hard to hear
        if (a < 0 || !Number.isInteger(a)) {                                        //a = noise amount
            console.log('Positive integers only');                                  //...conversation = what is being interrupted
            return;                                                                 //uses the helper function with the parameters
        }                                                                           // to create a whole new text
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