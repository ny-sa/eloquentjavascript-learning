//Optional Arguments
function friends(a, b) {                                                   //we had an argument
    if( b !== undefined) return "It's great being with you!";
    else return "I'm all alone...";
}
function repeatThat(x = `Did I hear something`) { console.log(x + '?'); } //default values

console.log(friends('Me', 'Her'));
console.log(friends('Me'));
repeatThat();
repeatThat('A parasol');