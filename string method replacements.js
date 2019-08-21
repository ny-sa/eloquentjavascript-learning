function strCharAt(string, index) {
    if (string[index] !== undefined) return string[index];
}
function strConcat(...strings) {
    let string = '';
    for (let i in strings) string += strings[i];
    return string;
}
function strIncludes(string, part) {
    let parse = '';
    for (let i = 0, j = 0; i < string.length && j < part.length; i++) {
        if (string[i] === part[j]) {
            parse += string[i]; j++;
            if (parse === part) return true;
        }
        else parse = '';
    }
    return false;
}
function strIndexOf(string, part) {
    let parse = '', pInd = -1;
    for (let i = 0, j = 0; i < string.length && j < part.length; i++) {
        if (string[i] === part[j]) {
            if (parse === '') pInd = i;
            parse += string[i]; j++;
            if (parse === part) return pInd;
        }
        else parse = '';
    }
    return -1;
}
function strRepeat(string, count) {
    let s = '';
    for (let i = 0; i < count; i++) s += string;
    return s;
}
function strSplit(string, separator) {
    let array = [], str = '';
    for(let i = 0, j = 0; i < string.length; i++) {
        if (string[i] === separator || separator === '') {
            array[j] = str; j++; i++; str = '';
        }
        str += string[i];
    }
    array[array.length] = str;
    return array;
}
function strSubstr(string, start, length) {
    let str = '';
    for (let i = start, j = 0; j < length && string[i] !== undefined; i++, j++) {
        str += string[i];
    }
    return str;
}
function strSubstring(string, start, end) {
    let str = '';
    for (let i = start; i < end && string[i] !== undefined; i++) {
        str += string[i];
    }
    return str;
}
function strToLowerCase(string) {
    let str = '';
    let lower = 'abcdefghijklmnopqrstuvwxyz', upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i in string) {
        if (strIncludes(upper, `${string[i]}`)) {
            str += lower[strIndexOf(upper, string[i])];
        }
        else str += string[i];
    }
    return str;
}
function strToUpperCase(string) {
    let str = '';
    let lower = 'abcdefghijklmnopqrstuvwxyz', upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i in string) {
        if (strIncludes(lower, `${string[i]}`)) {
            str += upper[strIndexOf(lower, string[i])];
        }
        else str += string[i];
    }
    return str;
}
function strTrim(string) {
    let str = '';
    for (let i in string) {
        if (string[i] !== ' ') str += string[i];
    }
    return str;
}

