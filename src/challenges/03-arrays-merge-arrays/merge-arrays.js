/*
Create a function called mergeArrays(arr1, arr2) that receives two arrays and returns a new array with all elements combined.

 Example input:
([1, 2], [3, 4])

 Expected output:
[1, 2, 3, 4]
*/

export const mergeArrays =(arr1,arr2)=>[...arr1,...arr2];