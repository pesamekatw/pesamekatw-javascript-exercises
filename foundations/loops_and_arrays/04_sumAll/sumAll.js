const sumAll = function() {
    let sum = 0;
    const args = Array.from(arguments);
    let newArray = args.sort();
    if(!(Number.isInteger(arguments[0]) && Number.isInteger(arguments[1]))){
        return 'ERROR';
    } else if(arguments[0] < 0 || arguments[0] < 0 ){
        return 'ERROR';
    } else {
        for(let i = newArray[0]; i <= newArray[1]; i++){
            sum+= i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
