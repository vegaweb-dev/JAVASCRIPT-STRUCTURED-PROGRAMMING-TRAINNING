/*
Create a function countGreaterThanAverage(arr) that:

Calculates the average of all numbers in the array.

Returns how many elements are strictly greater than that average.

Examples
countGreaterThanAverage([2, 4, 6, 8])   // average = 5 → result = 2
countGreaterThanAverage([10, 10, 10])   // 0
countGreaterThanAverage([1])            // 0
*/

export const countGreaterThanAverage = (arr) => {
  let acc = 0;
  let average = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    acc += arr[i];
  }
  average = acc / arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > average) {
      count++;
    }
  }
  return count;
};
