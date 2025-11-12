/* Create a function that given an array detects if an element is present in the array*/

export function containElement(arr, ref) {
  let value = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ref) {
      value = true;
    }
  }
  return value;
}
