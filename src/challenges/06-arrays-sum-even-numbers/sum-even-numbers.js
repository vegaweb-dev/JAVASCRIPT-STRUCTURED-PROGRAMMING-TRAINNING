/*
Create a function called sumEvenNumbers(arr) that receives an array of numbers and returns the sum of all even numbers.

Example:
sumEvenNumbers([1, 2, 3, 4, 5, 6])

Expected output: 12

*/

/*export const sumEvenNumbers=(arr)=>{
    let intialValue = 0;
    for(let i=0; i < arr.length; i++){
        arr[i]%2===0 ? intialValue=intialValue+arr[i]: intialValue= intialValue+0;
    }
    return intialValue;

}*/

export const sumEvenNumbers=(arr)=>
    arr.filter(el=>el%2===0).reduce((prev,current)=>prev+current,0)
