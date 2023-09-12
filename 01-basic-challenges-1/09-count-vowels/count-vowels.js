function countVowels(str) {
  let vowelCount = 0;
  const lowerStr = str.toLowerCase();
  for (let i = 0; i < lowerStr.length; i++) {
    if (
      lowerStr[i] === "a" ||
      lowerStr[i] === "o" ||
      lowerStr[i] === "e" ||
      lowerStr[i] === "i" ||
      lowerStr[i] === "u"
    ) {
      vowelCount++;
    }
  }

  return vowelCount;
}

module.exports = countVowels;
