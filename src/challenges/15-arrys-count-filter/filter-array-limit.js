/*
Create a function allGreaterThan(arr, limit) that returns true only if every number in the array is strictly greater than limit.
Examples
allGreaterThan([5, 6, 7], 4)     // true
allGreaterThan([10, 2, 30], 5)   // false
allGreaterThan([], 10)           // true  (empty array → vacuously true)
*/

export const allGreaterThan =(arr,limit)=>{
    let val=true;
    for(let i=0; i < arr.length;i++){
        if(arr[i]<limit){
            val=false
            break
        }
    }
    return val;
}