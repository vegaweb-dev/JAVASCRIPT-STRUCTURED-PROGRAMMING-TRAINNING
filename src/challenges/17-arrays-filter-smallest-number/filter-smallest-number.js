/*
Create a function findSmallestNumber(arr) that returns the smallest number in the array.
You must NOT use:
Math.min
spread operator (...arr)
Examples
findSmallestNumber([4, 2, 9, 1])   // 1
findSmallestNumber([10])           // 10
findSmallestNumber([-3, -7, 0])    // -7
*/

export const findSmallestNumber =(arr)=>{
    let reference = arr[0]
    for(let i =1; i < arr.length; i++){
        arr[i] < reference ? reference=arr[i]: reference
    }
    return reference
}
