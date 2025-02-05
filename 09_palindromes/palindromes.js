const palindromes = function (str) {
  
  // trim the string -> remove puncuations and whitespaces, then lowercase all the letters
  let trimmedStr;
  // it is assumed that ! ? and . can only appear at the very end of the string
  let endChar = str.charAt(str.length - 1);

  switch (endChar) {
    case "!":
      trimmedStr = str.trim().split("!");
      break;
  
    case "?":
      trimmedStr = str.trim().split("?");
      break;
    
    default:
      trimmedStr = str.trim().split(".");
      break;
  }

  const strWithoutComma = trimmedStr[0].split(", ");  // assumed that there is always one whitespace after ","
  let strChunks = "";
  for(elem of strWithoutComma) {
    let fragments = elem.split(" ");
    strChunks += fragments.join("");
  }
  
  const sanitizedStr = strChunks.toLowerCase();
  
  // two pointers -> <- till center
  let frontPointer = 0;
  let endPointer = sanitizedStr.length - 1;

  while(frontPointer <= endPointer) {
    if(sanitizedStr.charAt(frontPointer) !== sanitizedStr.charAt(endPointer)) {
      return false;
    }
    
    frontPointer++;
    endPointer--;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
