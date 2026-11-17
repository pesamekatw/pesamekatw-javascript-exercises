const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let sumOfAll = 0;
  for(let i = 0; i<arr.length; i++){
    sumOfAll += arr[i];
  }
  return sumOfAll;
};

const multiply = function(arr) {
  let mulOfAll = 1;
    for(let i = 0; i<arr.length; i++){
      mulOfAll *= arr[i];
    }
    return mulOfAll;
};

const power = function(base,expo) {
	 let mulOfAll = 1;
    for(let i = 0; i<expo; i++){
      mulOfAll *= base;
    }
    return mulOfAll;
};

const factorial = function(n) {
		let mulOfAll = 1;
    for(let i = 1; i<=n; i++){
      mulOfAll *= i;
    }
    return mulOfAll;
};

console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
