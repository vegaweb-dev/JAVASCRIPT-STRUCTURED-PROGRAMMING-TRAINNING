export const countVowels = (str) =>
  str
    .toLowerCase()
    .split("")
    .filter(
      (el) => el === "a" || el === "e" || el === "i" || el === "o" || el === "u"
    ).length;
