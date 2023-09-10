function calculator(num1, num2, op) {
  let result;

  if (op === "+") {
    result = num1 + num2;
  } else if (op === "-") {
    result = num1 - num2;
  } else if (op === "*") {
    result = num1 * num2;
  } else if (op === "/") {
    result = num1 / num2;
  } else {
    throw new Error("Invalid operator");
  }

  return result;
}

module.exports = calculator;
