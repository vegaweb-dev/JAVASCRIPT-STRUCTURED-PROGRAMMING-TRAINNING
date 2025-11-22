/*
Create a function onlyEven(arr) that returns true only if every element in the array is even.
Examples
onlyEven([2, 4, 6])       // true
onlyEven([1, 2, 3, 4])    // false
onlyEven([])              // true   (empty list → vacuously true)
*/

/*export const onlyEven =(arr)=>{
    if(arr.length == 0){
        return 0
    }

    let finalResponse = true;
    for(let i=0; i < arr.length; i++){
        if(arr[i]%2!==0){
            finalResponse=false
            break
        }
    }
return finalResponse
}*/

export const onlyEven = (arr) => {
 
  let count = 0;
  let response = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  if (count === arr.length) {
    response = true;
  }
  return response;
};
