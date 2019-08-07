//Defining a function
const idk = function(a, b, c) {                     //multiple parameters
    return Math.round(Math.random() * a * b * c);
};
//console.log(idk(6,2,9));
//console.log(idk(0,62,97));
console.log(idk(1,1,2000));
const cat = function() {                            //no return value
    console.log('meow');
};
cat();
//cat();
//cat();

//Bindings and Scopes
if (1 > 0) {                                         //looking at var
    var vari = 30;
}
const test = function() {
    var able = 60;
};
console.log(vari);
//console.log(able);                                //var still local inside function

//Nested Scope
const passItOn = function(a) {                              //nest test
    const pio2 = function(b) {
        const pio3 = function(c) {
            const pio4 = function(d) {
                return 'Are ' + d;
            };
            return pio4('you') + ' ' + c;
        };
        return pio3('really') + ' ' + b;
    };
    console.log(pio2('home') + ', ' + a + '?');
};
passItOn('Jacques');

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

//Declaration Notation
console.log('Marco');                                                   //declared functions come out on top
polo();
function polo() {
    console.log('Polo');
}

//Arrow Notation
const eggs = x => console.log('I have ' + x + ' eggs.');                //one-line function are nice
eggs(8297510);

//Call Stack
const penthouse = () => {                                              //floors are levels on a call stack
    console.log('Floor 4');
};
const floor3 = () => {
    console.log('Floor 3');
    penthouse();
    console.log('Floor 3');
};
const floor2 = () => {
    console.log('Floor 2');
    floor3();
    console.log('Floor 2');
};
let elevator = () => {
    console.log('Floor 1');
    floor2();
    console.log('Floor 1');
};
elevator();

//Optional Arguments
function friends(a, b) {                                                   //we had an argument
    if( b !== undefined) return "It's great being with you!";
    else return "I'm all alone...";
}
console.log(friends('Me', 'Her'));
console.log(friends('Me'));
function repeatThat(x = `Did I hear something`) { console.log(x + '?'); }
repeatThat();                                                              //default values
repeatThat('A parasol');

//Closures
function divider(factor) {
    return number => number / factor;
}
let third = divider(3);
console.log(third(33));
gossip = x => { return y => "Oh I don't know much, but I've heard " + x + ' asked ' + y + ' out on a date.' };   //one-line closure
let uhOh = gossip('you');
console.log(uhOh('my boyfriend'));

//Recursion
elevator = function(x, y) {                                                     //elevator goes to top, but can start on any floor
    if(x < 1) { console.log('Are you from another dimension?'); }               //x = number of floors and y = current floor
    else if ( y > x) { console.log(`This is no Great Glass Elevator`); }
    else if(y < 1) {
        console.log('Since there are no basements, you are actually on the ground floor');
        if (x > 1) {elevator(x, 1);}
    }
    else if (x === y) {                                                //upon reaching the top, the elevator returns to the ground
        console.log('Floor ' + y);                                     //regardless of the floor you initially started on
        if (x > 1) {elevator(x - 1, y - 1);}
    }
    else {
        console.log('Floor ' + y);
        elevator(x , y + 1);
    }
};
//elevator(3,1);
elevator(4,3);
//elevator(5,-1);
//elevator(1,4);
//elevator(0,-1);
