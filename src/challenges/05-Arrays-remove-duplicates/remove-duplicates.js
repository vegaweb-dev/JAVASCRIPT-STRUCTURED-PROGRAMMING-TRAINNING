/*
Create a function called removeDuplicates(arr) that receives an array and returns a new one without repeated elements.

Example input:
[1, 2, 2, 3, 3, 4]

Expected output:
[1, 2, 3, 4]
*/
export const removeDuplicates=(arr)=>[...new Set(arr)]