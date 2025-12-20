// Create a function sumDigits(n) that receives a non-negative integer and returns the sum of all its digits.
export const sumDigits = (number) => {
	if (number < 0) {
		throw new Error("It only accepts possitive numbers");
	}

	return number
		.toString()
        .split("")
        .map(el=>+el)
		.reduce((p, c) => p + c, 0);
};
