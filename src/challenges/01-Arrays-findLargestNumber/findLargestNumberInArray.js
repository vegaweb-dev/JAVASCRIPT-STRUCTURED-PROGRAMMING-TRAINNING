/*Create a function called findLargestNumber(arr) that receives an array of numbers and returns the largest number. 
Translate all of that into English and give me an appropriate number for this challenge.*/

export const findLargestNumber = (arr) => {
  let valueToUpdate = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > valueToUpdate) {
      valueToUpdate = arr[i];
    }
  }
  return valueToUpdate;
};



