let readline = require('readline');             //because node.js doesn't use prompt() on its own
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//const a = 2;
//a = a + 1;
//console.log(a); //constants cannot change
//let 2pac = "rapper"; //name cannot start with a number
/*rl.question("Pick a number: ", function(answer){
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
});*/

