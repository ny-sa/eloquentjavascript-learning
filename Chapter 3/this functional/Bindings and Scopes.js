//Bindings and Scopes
if (1 > 0) {                                        //looking at var
    var vari = 30;
}
const test = function() {
    var able = 60;
};
console.log(vari);
//console.log(able);                                //var still local inside function, commented due to crash