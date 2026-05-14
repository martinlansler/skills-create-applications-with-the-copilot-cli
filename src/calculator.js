/**
 * Calculator - A Node.js CLI calculator supporting:
 * Basic operations: addition, subtraction, multiplication, division
 * Extended operations: modulo, power (exponentiation), squareRoot
 */

/**
 * addition - returns the sum of a and b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function addition(a, b) {
  return a + b;
}

/**
 * subtraction - returns the difference of a and b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtraction(a, b) {
  return a - b;
}

/**
 * multiplication - returns the product of a and b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiplication(a, b) {
  return a * b;
}

/**
 * division - returns the quotient of a divided by b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error} if b is zero
 */
function division(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * modulo - returns the remainder of a divided by b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error} if b is zero
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

/**
 * power - returns base raised to the exponent
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * squareRoot - returns the square root of n
 * @param {number} n
 * @returns {number}
 * @throws {Error} if n is negative
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of a negative number is not allowed');
  }
  return Math.sqrt(n);
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
};
