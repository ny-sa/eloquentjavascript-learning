function objAssign(target, source) {
    for (let key in source)
        target[key] = source[key];
    return target;
}
function objKeys(object) {
    let array = [], i = 0;
    for (let key in object) {
        array[i] = key;
        i++;
    }
    return array;
}
function objValues(object) {
    let array = [], i = 0;
    for (let key in object) {
        array[i] = object[key];
        i++;
    }
    return array;
}
function objEntries(object) {
    let array = [], i = 0, entry = [];
    for (let key in object) {
        entry = [];
        entry[0] = key; entry[1] = object[key];
        array[i] = entry;
        i++;
    }
    return array;
}
function objSwap(object) {
    let swapped = {};
    for (let key in object)
        swapped[object[key]] = key;
    return swapped;
}
function objFromEntries(entries) {
    let obj = {};
    for (let i in entries)
        obj[entries[i][0]] = entries[i][1];
    return obj;
}