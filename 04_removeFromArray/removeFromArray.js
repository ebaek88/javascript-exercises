const removeFromArray = function(arr, ...query) {
  const elementsToRemove = [];  // storing the elements of arr where arrayElem === elem
  let result = [];  // storing the final result

  // iterates over query
  for (elem of query) {
    // for every element of arr
    for (arrayElem of arr) {
      // if elem === elementToRemover, store the index in an array
      if (arrayElem === elem) {
        elementsToRemove.push(arrayElem);
      }
    }
  }

  // now iterate over the array of the elements to be removed that exist in the original array
  for (elem of elementsToRemove) {
    // toSpliced() does not modify the original array
    // if we remove for the first time, use toSpliced() from the origianl array
    if (result.length === 0) {
      result = arr.toSpliced(arr.indexOf(elem), 1);
    } else {  // if not, use toSpliced() from result
      result = result.toSpliced(result.indexOf(elem), 1);
    }
  }

  // if no removal is done, just return the original value
  if (elementsToRemove.length === 0) {
    return arr;
  }

  // else, return result
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
