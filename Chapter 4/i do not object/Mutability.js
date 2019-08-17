//Mutability
let alpha = { a: 3 };
let beta = alpha;
Object.assign(alpha, { a: 'A', b: 'jumble', c: 'of', d: 'ideas' });
console.log(beta);                                                          //beta is changed

let gamma = 3;
let delta = gamma;                                                          //a new 'object' is created with the same value
gamma = ['A', 'jumble', 'of', 'ideas'];                                     //instead of just a reference
console.log(gamma);
console.log(delta);                                                         //delta is not changed