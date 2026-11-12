const reverseString = function(string) {
    let stringArr = string.split('');
    let reverseString = [];
    let end = string.length;

    for(let i = 0; i <= string.length; i++){
        reverseString[i] = stringArr[end--];
    }
    return reverseString.join('');;
};

// Do not edit below this line
module.exports = reverseString;
