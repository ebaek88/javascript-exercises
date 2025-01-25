const repeatString = function(stringToRepeat, numToRepeat) {
  let result = "";
  
  if (numToRepeat < 0) {
    return "ERROR";
  }

  for (let i = 0; i < numToRepeat; i++) {
    result += stringToRepeat;
  }

  return result;
};

// Do not edit below this line
module.exports = repeatString;
