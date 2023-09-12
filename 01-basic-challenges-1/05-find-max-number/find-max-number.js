function findMaxNumber(numberArr) {
  let max = 0;
  for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > max) {
      max = numberArr[i];
    }
  }

  return max;
}

module.exports = findMaxNumber;
