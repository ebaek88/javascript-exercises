const reverseString = function(str) {
  let result = "";

  for(let i = str.length - 1; i >= 0 ; i--) {
    result += str[i];
  }

  return result;

  // Also, this is possible
  // return str.split("").reverse().join("");
  // When the separator is "" in str.split(), the returned array will be an array of single characters
};

// Do not edit below this line
module.exports = reverseString;
