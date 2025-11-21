/*Exercise 17 — “Count vowels”

Create a function countVowels(str) that returns how many vowels (a, e, i, o, u, case-insensitive) are present in the given string.

Example
countVowels("Hello World")  // 3
countVowels("AEIOU")        // 5
countVowels("xyz")          // 0 */

export const countVowels = (str) =>
  str
    .toLowerCase()
    .split("")
    .filter(
      (el) => el === "a" || el === "e" || el === "i" || el === "o" || el === "u"
    ).length;
