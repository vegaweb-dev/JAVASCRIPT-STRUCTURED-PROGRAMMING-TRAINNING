import { containElement } from "./challenges/test_challenge.js";
import { findLargestNumber } from "./challenges/01-Arrays-findLargestNumber/findLargestNumberInArray.js";
import { countOccurrences } from "./challenges/02-Arrays-count-occurrences/count-occurrences.js";
import {mergeArrays} from "./challenges/03-arrays-merge-arrays/merge-arrays.js"
import { isEmpty } from "./challenges/04-Arrays-isEmptyOrNot/is-empty.js";
import { removeDuplicates } from "./challenges/05-Arrays-remove-duplicates/remove-duplicates.js";
import { sumEvenNumbers } from "./challenges/06-arrays-sum-even-numbers/sum-even-numbers.js";
import { getOddNumbers } from "./challenges/07-arrays-odd-numbers/odd-numbers.js";
import { multiplyAll } from "./challenges/08-arrays-multiply-elements/multiply-elements.js";
import { getStringLengths } from "./challenges/09-arrays-string-lengths/get-string-lengths.js";
import { findIndexOfvalue } from "./challenges/10-array-index-of-value/find-index-of-value.js";
import { getPositiveNumbers } from "./challenges/11-arrays-filter-positive-numbers/get-positive-numbers.js";
import { reverseString } from "./challenges/12-reverse-string/reverse-str.js";
import { countStrings } from "./challenges/13-arrays-filter-string/filter-string.js";
import { countVowels } from "./challenges/14-strings-count-vowels/count-vowels.js";
import { allGreaterThan } from "./challenges/15-arrys-count-filter/filter-array-limit.js";
import { findFirstNegative } from "./challenges/16-arrays-find-first-negative-number/find-first-negative.js";
import { findSmallestNumber } from "./challenges/17-arrays-filter-smallest-number/filter-smallest-number.js";
import { countGreaterThanAverage } from "./challenges/18-arrays-filter-greater-than-average/count-greater-than-average.js";
import { onlyEven } from "./challenges/19-arrays-filter-even-numbers/only-even.js";
import { squareArray } from "./challenges/20-arrays-square-each-number/square-array.js";
import { filterAllowed } from "./challenges/21-arrays-filter-allowed/filter-allowed.js";
import { countConsonants } from "./challenges/22-string-count-consonants/count-consonants.js";
console.log(containElement([3,3,4,5,6],6));
console.log(findLargestNumber([1,3,10,5,6,7]))
console.log(countOccurrences([1,2,2,3,2],2))
console.log(mergeArrays([1,2],[3,4]))
console.log(isEmpty([]))
console.log(removeDuplicates([1,2,2,3,3,4]))
console.log(sumEvenNumbers([2,2,3]))
console.log(getOddNumbers([1, 2, 3, 4, 5, 6]))
console.log(multiplyAll([1,2,3],3))
console.log(getStringLengths(["cat","house","sun"]))
console.log(findIndexOfvalue([10,20,30,40],30))
console.log(getPositiveNumbers([-9,4,5,-8]))
console.log(reverseString("hello"))
console.log(countStrings(["bob",1,2,3,4,"KISS","SRP","SOLID"]))
console.log(countVowels("how many VOWELS"))
console.log(allGreaterThan([2,3,4,5,6,7],1))
console.log(findFirstNegative([2,3,4,5,6,7]))
console.log(findSmallestNumber([2,3,4,5,6,7,8,9]))
console.log(countGreaterThanAverage([1,2,3,4,5,1]))
console.log(onlyEven([2,4]))
console.log(squareArray([2,3]))
console.log(filterAllowed([1,2,3,4,5,"uva"],[2,3]))
console.log(countConsonants("gg"))