let readline = require('readline');             //because node.js doesn't use prompt() on its own
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Conditional Execution
rl.question("Pick a number: ", function(answer) {                  //this way of prompting is a bit more involved
    let num = Number(answer);
    if (num < 10) {
        console.log("Small");
    } else if (num < 100) {
        console.log("Medium");
    } else {
        console.log("Large");
    }
    rl.close();
    process.exit();
});