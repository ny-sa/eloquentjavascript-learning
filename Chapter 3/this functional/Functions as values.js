//Functions as values
let draw = 0;                                               //keeps drawing until you win
let lucky7 = function() {
    console.log('No luck');
};
do {
    draw = Math.round(Math.random()*9 + 1);
    if (draw === 7) {
        lucky7 = function() {
            console.log('You win!');
        };
    }
    lucky7();
} while(draw !== 7);