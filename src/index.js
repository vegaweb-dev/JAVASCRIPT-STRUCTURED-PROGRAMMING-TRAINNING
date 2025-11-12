import { containElement } from "./challenges/test_challenge.js";
import { findLargestNumber } from "./challenges/01-Arrays-findLargestNumber/findLargestNumberInArray.js";
import { countOccurrences } from "./challenges/02-Arrays-count-occurrences/count-occurrences.js";
import {mergeArrays} from "./challenges/03-arrays-merge-arrays/merge-arrays.js"
import { isEmpty } from "./challenges/04-Arrays-isEmptyOrNot/is-empty.js";
import { removeDuplicates } from "./challenges/05-Arrays-remove-duplicates/remove-duplicates.js";
import { sumEvenNumbers } from "./challenges/06-arrays-sum-even-numbers/sum-even-numbers.js";
import { getOddNumbers } from "./challenges/07-arrays-odd-numbers/odd-numbers.js";
import { multiplyAll } from "./challenges/08-arrays-multiply-elements/multiply-elements.js";
console.log(containElement([3,3,4,5,6],6));
console.log(findLargestNumber([1,3,10,5,6,7]))
console.log(countOccurrences([1,2,2,3,2],2))
console.log(mergeArrays([1,2],[3,4]))
console.log(isEmpty([]))
console.log(removeDuplicates([1,2,2,3,3,4]))
console.log(sumEvenNumbers([2,2,3]))
console.log(getOddNumbers([1, 2, 3, 4, 5, 6]))
console.log(multiplyAll([1,2,3],3))
