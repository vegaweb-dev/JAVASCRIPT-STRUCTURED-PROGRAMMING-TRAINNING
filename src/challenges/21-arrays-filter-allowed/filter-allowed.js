/*
Create a function filterAllowed(arr, allowed) where:
arr is an array of any values
allowed is an array containing the only values that are permitted
Return a new array containing only the elements from arr that appear inside allowed.
Examples
filterAllowed([1, 2, 3, 4], [2, 4])       // [2, 4]
filterAllowed(["a", "b", "c"], ["b"])     // ["b"]
filterAllowed([true, false], [false])     // [false]
*/

export const filterAllowed = (arr1, arr2) => {
  let solutionArray = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === arr1[i]) {
        solutionArray.push(arr2[j]);
      }
    }
  }

  return solutionArray;
};
    