//Chessboard
let size = 16;                          //grid size
let polarity = true;                    //For even grid lengths, the pattern reverses each new line
let result = "";
for (let x = 1; x <= size ** 2; x++) {
    if (x > size && x % size === 1){
        if (size % 2 === 0) {
            polarity = !polarity;       //This variable gets the program to flip the character printed every time it starts a new line
        }
        result += '\n';
    }
    if (x % 2 === 0)
        if (polarity)
            result += '#';
        else
            result += ' ';
    else
    if (polarity)
        result += ' ';
    else
        result += '#';
}
console.log(result);