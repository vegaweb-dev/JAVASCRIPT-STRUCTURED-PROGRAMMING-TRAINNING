/*
Create a function findFirstNegative(arr) that returns the index of the first negative number in the array.
If no negative numbers exist, return -1.

Examples
findFirstNegative([3, 7, -2, 5])   // 2
findFirstNegative([10, 20, 30])    // -1
findFirstNegative([-5, 1, 2])      // 0
*/

export const findFirstNegative =(arr)=>{
    let index=-1;
    for(let i=0; i < arr.length; i++){
        if(arr[i]<0){
            index=i
            break
        }
    }
    return index
}