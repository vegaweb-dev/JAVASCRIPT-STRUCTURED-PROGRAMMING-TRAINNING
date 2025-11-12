/*
Create a function called countOccurrences(arr, value) that receives an array and a value, and returns how many times that value appears in the array.

 Example input:
([1, 2, 2, 3, 2], 2)

 Expected output:
3
*/
// export const countOcurrences=(arr,value)=>{
//     let count=0;
//     for(let i=0; i < arr.length; i++){
//         arr[i]==value ? count+=1 : count;
//     }
//     return count;

// }


export const countOccurrences=(arr,value)=>{
    let arrReference=[];

    for(let i=0; i<arr.length;i++){
        arr[i]===value && arrReference.push(arr[i])
    }
    return arrReference.length;
}