//Closures
function divider(factor) {
    return number => number / factor;
}
let third = divider(3);
console.log(third(33));
gossip = x => { return y => "Oh I don't know much, but I've heard " + x + ' asked ' + y + ' out on a date.' };   //one-line closure
let uhOh = gossip('you');
console.log(uhOh('my boyfriend'));