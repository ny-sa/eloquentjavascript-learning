//The Math Object
function thirdSideSAS(a, b, degree) {                                              //finds third side given the first two and angle
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - (2 * a * b * Math.cos(degree * Math.PI / 180)));
    console.log('Given that side a equals ' + a + ', side b equals ' + b + ', and they make an angle of ' + degree + ' degrees,' +
        '\nside c roughly equals ' + c.toFixed(3));
}
thirdSideSAS(4,13, 102);
