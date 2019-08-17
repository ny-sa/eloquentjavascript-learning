let readline = require('readline');             //because node.js doesn't use prompt() on its own
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Dispatching on a Value with switch
console.log("You are in a cave.\nYou see three exits, with a red, yellow and blue hue respectively.\nA massive rumble suddenly " +
    "shakes the surrounding; the whole place might just collapse!");                                            //testing switch
rl.question("You need to move this instant! What color do you follow?\n", function(answer) {
    switch (answer) {
        case "red":
            console.log("A blast of superheated air incapacitates, and you fall into a lava pit below. You die.");
            break;
        case "yellow":
            console.log("The iridescent yellow gas past the exit suffocates, and you collapse in seconds. You die.");
            break;
        case "blue":
            console.log("You're outside! But there's nothing under your feet, and you fall off the ledge. You die.");
            break;
        default:
            console.log("Too slow! Your indecision leads to falling boulders crushing you to pulp. You die.");
            break;
    }
    process.exit();
});
