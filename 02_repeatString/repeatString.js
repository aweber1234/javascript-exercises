const repeatString = function (string, num) {
    let count = 0;
    let result = '';
    if (num < 0) {
        return 'ERROR';
    }
    while (count < num) {
        result += string;
        count++;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
