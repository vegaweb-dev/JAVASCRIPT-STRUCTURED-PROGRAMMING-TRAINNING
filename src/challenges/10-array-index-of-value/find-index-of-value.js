/*
Create a function called findIndexOfValue(arr, value) that takes an array and a value, and returns the index of that value.
If the value doesn’t exist in the array, return -1.

Example:

findIndexOfValue([10, 20, 30, 40], 30)
*/

export const findIndexOfvalue=(arr,value)=>{
    let index=-1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===value){
            index = i
            break
        }
    }   
    return index
}