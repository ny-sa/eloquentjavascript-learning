//Breaking out of a Loop
for (let a = 1; a<=60; a++) {
    if (a % 17 === 0) {
        console.log("hiccup");
        continue;                                                                   //testing continue
    }
    console.log(a);
}