//Recursion
const elevator = function(x, y) {                                                     //elevator goes to top, but can start on any
    // floor
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
elevator(3,1);
console.log('\n');
elevator(4,3);
console.log('\n');
elevator(5,-1);
console.log('\n');
elevator(1,4);
console.log('\n');
elevator(0,-1);
