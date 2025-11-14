/*
Create a function called reverseString(str) that takes a string and returns it reversed without using .reverse().
Example:
reverseString("hello")
Expected output: "olleh"
*/

/*export const reverseString=(str)=>str.split("").reverse().join("");*/


export const reverseString=(str)=>{
   let newArr= str.split('');
   console.log(newArr)
   let reversedArr=[];
   for(let i=newArr.length-1; i >=0;i--){
        reversedArr.push(newArr[i])
   }
   console.log(reversedArr)
   let joinArr=reversedArr.join('');
   return joinArr
}