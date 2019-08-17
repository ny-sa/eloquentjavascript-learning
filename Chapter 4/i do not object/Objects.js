//Objects
let abc = {
    a: 'apple',
    b: 'bird',
    c: 'croissant'
};
console.log('That ' + abc.b + ' ate an ' + abc.a + '-flavored ' + abc.c + '.');         //using properties
let numbers = {a:5};
Object.assign(numbers, { a: 10582, b: 82, c: 9.283, d: (286/13) });              //Object.assign overwrites properties
console.log(numbers);