function arrayPush(array, element) {
    array[array.length] = element;
    return array;
}
function arrayPop(array) {
    let element = array[array.length - 1];
    delete array[array.length - 1];
    array.length--;
    return element;
}
function arrayShift(array) {
    let element = array[0];
    delete array[0];
    for (let i = 1; i < array.length; i++)
        array[i - 1] = array[i];
    array.length--;
    return element;
}
function arrayUnshift(array, element) {
    for (let i = array.length - 1; i >= 0; i--)
        array[i + 1] = array[i];
    array[0] = element;
    return array;
}
function arrayConcat(array1, array2) {
    for (let i in array2)
        array1[array1.length] = array2[i];
    return array1;
}
function arraySlice(array, start, end = array.length) {
    let slice = [];
    for (let i = start, j = 0; i < end && array[i] !== undefined; i++, j++)
        slice[j] = array[i];
    return slice;
}
function arrayIndexOf(array, element) {
    for (let i in array)
        if (array[i] === element) return i;
    return -1;
}
function arrayToString(array) {
    let string = '';
    for (let i = 0; i < array.length - 1; i++)
        string += array[i] + ',';
    return string + array[array.length - 1];
}
function arraySplice(array, index, deleteCount, ...addItems) {
    let deleted = [], difference = deleteCount - addItems.length;
    for (let i = index, j = 0; i < index + deleteCount && array[i] !== undefined; i++, j++) {
        deleted[j] = array[i];
        delete array[i];
    }
    if (deleteCount > addItems.length) {
        for (let i = index + deleteCount; i < array.length; i++)
            array[i - difference] = array[i];
        array.length -= difference;
    }
    else if (deleteCount < addItems.length)
       for (let i = array.length - 1 - difference; i >= index + deleteCount; i--)
            array[i] = array[i + difference];
    for (let i = index, j = 0; i < index + addItems.length; i++, j++)
        array[i] = addItems[j];
    return deleted;
}
function arrayReverse(array) {
    for (let i = 0, temp; i < array.length/2; i++) {
        temp = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = temp;
    }
    return array;
}
function arrayIncludes(array, element) {
    for (let i in array)
        if (array[i] === element) return true;
    return false;
}
function arrayJoin(array, separator) {
    let string = '';
    for (let i = 0; i < array.length - 1; i++)
        string += array[i] + `${separator}`;
    return string + array[array.length - 1];
}
function arrayFilter(array, f) {
    let arr = [];
    for (let i in array)
        if (f(array[i])) arr[arr.length] = array[i];
    return arr;
}
function arrayMap(array, f) {
    let arr = array;
    for (let i in arr)
        arr[i] = f(arr[i]);
    return arr;
}
function arrayReduce(array, f, init) {
    let condition = 0, current = init;
    if (init == undefined) {
        condition = 1;
        current = array[0];
    }
    for (let i = condition; i < array.length; i++)
        current = f(current, array[i]);
    return current;
}
function arrayReduceRight(array, f, init) {
    let condition = 0, current = init;
    if (init == undefined) {
        condition = 1;
        current = array[array.length - 1];
    }
    for (let i = array.length - 1 - condition; i >= 0; i--)
        current = f(current, array[i]);
    return current;
}
function arrayFind(array, f) {
    for (let i in array)
        if (f(array[i]))
            return array[i];
}
function arrayFindIndex(array, f) {
    for (let i in array)
        if (f(array[i]))
            return i;
}
function arrayForEach(array, f) {
    for (let i in array)
        f(array[i]);
}
function arraySome(array, f) {
    for (let i in array)
        if (f(array[i])) return true;
    return false;
}
function arrayEvery(array, f) {
    for (let i in array)
        if(!f(array[i])) return false;
    return true;
}
function isArray(array) {
    return (array instanceof Array);
}