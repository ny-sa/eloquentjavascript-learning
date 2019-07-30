//No hints!
//Looping a triangle
let a = "";
for(let x = 1; x < 7; x++){
    a += "#";
    console.log(a);
}
console.log("----------------------------------");
//FizzBuzz
for(let x = 1; x <= 100; x++){
    if(x % 15 === 0){
        console.log("FizzBuzz");
        continue;
    }
    else if(x % 3 === 0){
        console.log("Fizz");
        continue;
    }
    else if(x % 5 === 0){
        console.log("Buzz");
        continue;
    }
    console.log(x);
}
console.log("----------------------------------");
//Chessboard
let size = 7;
let polarity = true;
let result = "";
for(let x = 1; x <= size**2; x++){
    if(x>size && x%size === 1){
        if(size%2 === 0){
            polarity = !polarity;
        }
            result+='\n';
    }
    if(x%2 === 0)
        if(polarity)
            result+='#';
        else
            result+=' ';
    else
        if(polarity)
            result+=' ';
        else
            result+='#';
}
console.log(result);