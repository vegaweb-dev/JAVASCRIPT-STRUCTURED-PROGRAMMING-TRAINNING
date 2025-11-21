/*
Write a function countStrings(arr) that receives an array and returns how many elements are strings.
Example:
countStrings([1, "hi", true, "JS", 50, "code"])
Expected output: 3
*/


export const filterArray = (arr) =>
  arr.filter((el) => typeof el === "string").length;
