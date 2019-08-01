//Defining a function
const idk = function(a, b, c) {                     //multiple parameters
  return Math.round(Math.random() * a*b*c);
};
//console.log(idk(6,2,9));
//console.log(idk(0,62,97));
//console.log(idk(1,1,2000));
const cat = function() {                            //no return value
  console.log('meow');
};
//cat();
//cat();
//cat();
//Bindings and Scopes
if(1>0) {                                         //looking at var
    var vari = 30;
}
const test = function(){
    var able = 60;
};
console.log(vari);
//console.log(able);                            //var still local inside function
//Nested Scope
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};
//hummus(5);                                                  //hummus so good, I want 5
const passItOn = function(a) {                                  //nest test
    const pio2 = function(b) {
        const pio3 = function(c) {
            const pio4 = function(d) {
                return 'Are ' + d;
            };
            return pio4('you') + ' ' + c;
        };
        return pio3('really') + ' ' + b;
    };
    console.log(pio2('home')+', '+ a + '?');
};
passItOn('Jacques');
/*function greet(who) {
    console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");*/

function friends(a, b) {
    if( b !== undefined) return "It's good having friends.";
    else return "I'm all alone...";
}
//console.log(friends('Me', 'Her'));                   //We had an argument
//console.log(friends('Me'));
//console.log('I', 'see', 'you');
function divider(factor) {
    return number => number / factor;
}
let third = divider(3);
//console.log(third(33));                           //Closures
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}
//console.log(findSolution(139));                   //Recursion
