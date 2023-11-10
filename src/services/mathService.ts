/**
 * Adds two numbers together.
 * @param a - First number.
 * @param b - Second number.
 * @returns Sum of a and b.
 */
function add(a: number, b: number) {
  return a + b;
}

/**
 * Multiply two numbers together.
 * @param a - First number.
 * @param b - Second number.
 * @returns Multiplier of a and b.
 */
function multiply(a: number, b: number) {
  return a * b;
}

/**
 * Divide two numbers together.
 * @param a - First number.
 * @param b - Second number.
 * @returns Division of a and b.
 */
function divide(a: number, b: number) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

export { add, divide, multiply };
