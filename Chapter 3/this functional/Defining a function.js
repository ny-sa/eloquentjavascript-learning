//Defining a function
const idk = function(a, b, c) {                     //multiple parameters
    return Math.round(Math.random() * a * b * c);
};
console.log(idk(6,2,9));
console.log(idk(0,62,97));
console.log(idk(1,1,2000));
const cat = function() {                            //no return value
    console.log('meow');
};
cat();
cat();
cat();