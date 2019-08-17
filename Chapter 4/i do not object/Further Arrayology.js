//Further Arrayology
const switchAround = front => {                                                  //selects the first and last sections of an array,
    return (back, array) => {                                                    //and switches them around, original order intact
        if (front + back > array.length) return 'Your array is too short!';      //outer function takes in the first section length
        let fArray = [], bArray = [];                                            //inner function takes in the last and the array
        for (let a = front; a > 0; a--) { fArray.push(array.shift()); }
        for (let b = back; b > 0; b--) { bArray.push(array.pop()); }
        while (fArray.length !== 0) { array.push(fArray.shift()); }
        while (bArray.length !== 0) { array.unshift(bArray.shift()); }
        return array;
    };
};
let num = [1, 2, 3, 4, 5, 6];
let first3 = switchAround(3);
console.log(first3(2, num));
num = [1, 2, 3];
console.log(first3(2, num));
let blah = '';
num = first3(4, ['does', 'this', 'sentence', 'still', 'make', 'sense', 'after', 'the', 'switch?']);
for (let x = 0; x < num.length; x++) {
    blah += num[x] + ' ';
}
console.log(blah);                                                              //I think I understand?