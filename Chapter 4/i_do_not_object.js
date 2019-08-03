////////////////////Data Sets
const randomCombo = function() {                            //Now using arrays
    let main = ['a double-bacon bbq cheeseburger', 'two hand-rolled sushi', 'three batter-fried fish tacos', 'pasta alla carbonara'];
    let side = ['sweet potato fries', 'tamagoyaki', 'shrimp ceviche', 'caprese salad']
    console.log("I'd like " + main[Math.floor(Math.random() * main.length)] + " as well as " +
        side[Math.floor(Math.random() * side.length)] + '.');
};
randomCombo();
randomCombo();

