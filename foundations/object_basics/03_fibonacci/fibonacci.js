const fibonacci = function(n) {

    if(typeof n !== 'number' || n<=0 || Number.isNaN(n)){
        return "OOPS";
    }
    let f0 = 0;
    let f1 = 1;

    for(let i = 2; i <=n; i++){
        let curr = f0 + f1;
        f0 = f1;
        f1 = curr;  
    }

    return f1;
};

// Do not edit below this line
module.exports = fibonacci;
