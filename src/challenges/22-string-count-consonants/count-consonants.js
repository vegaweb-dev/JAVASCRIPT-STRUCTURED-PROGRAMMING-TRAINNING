/*
Create a function countConsonants(str) that returns the number of consonants in a string.
Consider only letters (ignore numbers, spaces, symbols).
Vowels: a, e, i, o, u
Everything else that is a letter = consonant.
Examples
countConsonants("abc")                // 2
countConsonants("Hello!")             // 3
countConsonants("123??")              // 0
countConsonants("Automator")          // 5
*/ 

export const countConsonants=(str)=>str.toLowerCase().match(/[a-df-hj-np-tv-z]/g)?.length || 0;