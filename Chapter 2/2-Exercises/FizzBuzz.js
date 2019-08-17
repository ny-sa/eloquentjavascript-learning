//FizzBuzz
for(let x = 1; x <= 100; x++) {
    if (x % 15 === 0){                                //checks for the LCM of 3 and 5, 15, first
        console.log("FizzBuzz");
        continue;
    }
    else if (x % 3 === 0) {                           //all remaining multiples of 3 should be Fizz
        console.log("Fizz");
        continue;
    }
    else if (x % 5 === 0) {                           //and all remaining multiples of 5 should be Buzz
        console.log("Buzz");
        continue;
    }
    console.log(x);
}