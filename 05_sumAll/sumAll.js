const sumAll = function(input1, input2) {
  // checks if all the inputs are positive integers
  if ( !( ( Number.isInteger(input1) && input1 > 0 ) && ( Number.isInteger(input2) && input2 > 0 ) ) ) {
    return "ERROR";
  }

  return input1 >= input2 ? (input1 * (input1 + 1) / 2) - ((input2 - 1) * input2 / 2) : (input2 * (input2 + 1) / 2) - ((input1 - 1) * input1 / 2);
};

// Do not edit below this line
module.exports = sumAll;
