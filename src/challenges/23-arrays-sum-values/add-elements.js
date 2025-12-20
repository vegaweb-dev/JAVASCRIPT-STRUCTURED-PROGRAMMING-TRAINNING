// Create a function sumDigits(n) that receives a non-negative integer and returns the sum of all its digits.
export const sumDigits = (number) =>
	number > 0
		? number.split("").map(el=>+el).reduce((p, c) => p + c)
		: `It only accepts possitive numbers`;
