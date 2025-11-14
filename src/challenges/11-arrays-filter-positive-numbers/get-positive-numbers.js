/*Create a function called getPositiveNumbers(arr) that returns a new array containing only the positive numbers from the input array.
Example:
getPositiveNumbers([-3, 4, -1, 0, 7, -2])
Expected output: [4, 7]*/

export const getPositiveNumbers=(arr)=>arr.filter(el=>el>0);