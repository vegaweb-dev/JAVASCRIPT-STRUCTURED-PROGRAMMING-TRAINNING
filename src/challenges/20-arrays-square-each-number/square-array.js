/*
Create a function squareArray(arr) that returns a new array where each number from the input array is squared.

Examples
squareArray([1, 2, 3])      // [1, 4, 9]
squareArray([5, -2])        // [25, 4]
squareArray([])             // []
*/


export const squareArray = (arr)=>arr.map(el=>el*el)