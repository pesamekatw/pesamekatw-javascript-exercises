const removeFromArray = function(){
    let arr = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        let value = arguments[i];
        for (let j = 0; j < arr.length; j++){
            arr = arr.filter(item => item !== value);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
