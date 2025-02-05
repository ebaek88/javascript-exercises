const fibonacci = function(number) {

  const numberInNumber = +number;

  if(numberInNumber < 0) { // does not accept negative numbers
    return "OOPS";
  }

  if(numberInNumber === 0) {
    return 0;
  }

  if(numberInNumber <= 2) {
    return 1;
  }

  return fibonacci(numberInNumber - 2) + fibonacci(numberInNumber - 1);
};

// Do not edit below this line
module.exports = fibonacci;
