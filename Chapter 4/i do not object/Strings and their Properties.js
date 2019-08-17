//Strings and their Properties
function shatterScrambleStutter(victim) {
    if (typeof victim !== 'string') {return 'Only strings are to be punished.'}
    let pieces = [], start = 0;
    for(let i = 0; i < victim.length; i++) {                                        //shatters: Slices string at random lengths,
        if (Math.ceil(Math.random() * 3) === 1 || i === victim.length - 1) {     //averaging 3 characters each
            pieces.push(victim.slice(start, i + 1));
            start = i + 1;
        }
    }
    let s, t, u, r;
    for (let j = pieces.length - 1; j > 1; j--) {                                   //scrambles: Shuffles the sliced sections
        s = Math.floor((Math.random() * j) + 1);
        t = pieces[j]; pieces[j] = pieces[s]; pieces[s] = t;
    }
    for (let k = 0; k < pieces.length; k++) {                                       //stutters: 50% chance to add one extra stutter
        u = 0; r = pieces[k];                                                       //averages to one extra repeat for each segment
        do { u++; } while (Math.floor(Math.random() * 2) !== 0);
        pieces[k] = r.repeat(u);
    }
    return pieces.join('');                                                         //joins the pieces together into a string
}
console.log(shatterScrambleStutter([3,6,9]));
console.log(shatterScrambleStutter('I love the outdoors! Do you?'));