#!/usr/bin/env node

/**
 * calculator.js — Node.js CLI Calculator
 *
 * Supported operations:
 *   add        <a> <b>  – Addition:         returns a + b
 *   subtract   <a> <b>  – Subtraction:      returns a - b
 *   multiply   <a> <b>  – Multiplication:   returns a × b
 *   divide     <a> <b>  – Division:         returns a ÷ b  (b must not be zero)
 *   modulo     <a> <b>  – Modulo:           returns a % b  (b must not be zero)
 *   power      <a> <b>  – Exponentiation:   returns a ** b
 *   squareroot <n>       – Square Root:      returns √n     (n must not be negative)
 *
 * Usage:
 *   node calculator.js <operation> <number1> [number2]
 *
 * Examples:
 *   node calculator.js add 4 5          → 9
 *   node calculator.js subtract 9 3     → 6
 *   node calculator.js multiply 3 4     → 12
 *   node calculator.js divide 10 2      → 5
 *   node calculator.js modulo 10 3      → 1
 *   node calculator.js power 2 8        → 256
 *   node calculator.js squareroot 16    → 4
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b
// Throws an error if b is zero to prevent division by zero
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// Modulo: returns the remainder of a divided by b
// Throws an error if b is zero to prevent division by zero
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed.");
  }
  return a % b;
}

// Exponentiation: returns base raised to the power of exponent
function power(base, exponent) {
  return base ** exponent;
}

// Square Root: returns the square root of n
// Throws an error if n is negative
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Square root of a negative number is not allowed.");
  }
  return Math.sqrt(n);
}

// Export functions for unit testing
module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// Parse CLI arguments — only run when invoked directly, not when required by tests
/* istanbul ignore next */
if (require.main === module) {
const [, , operation, arg1, arg2] = process.argv;

if (!operation || arg1 === undefined) {
  console.error("Usage: node calculator.js <add|subtract|multiply|divide|modulo|power|squareroot> <number1> [number2]");
  process.exit(1);
}

const isSingleArg = operation.toLowerCase() === "squareroot";

if (!isSingleArg && arg2 === undefined) {
  console.error("Usage: node calculator.js <add|subtract|multiply|divide|modulo|power> <number1> <number2>");
  process.exit(1);
}

const a = parseFloat(arg1);
const b = isSingleArg ? undefined : parseFloat(arg2);

if (isNaN(a) || (!isSingleArg && isNaN(b))) {
  console.error("Error: Arguments must be valid numbers.");
  process.exit(1);
}

// Execute the requested operation
let result;
switch (operation.toLowerCase()) {
  case "add":
    result = add(a, b);
    break;
  case "subtract":
    result = subtract(a, b);
    break;
  case "multiply":
    result = multiply(a, b);
    break;
  case "divide":
    try {
      result = divide(a, b);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
    break;
  case "modulo":
    try {
      result = modulo(a, b);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
    break;
  case "power":
    result = power(a, b);
    break;
  case "squareroot":
    try {
      result = squareRoot(a);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
    break;
  default:
    console.error(`Error: Unknown operation "${operation}". Use add, subtract, multiply, divide, modulo, power, or squareroot.`);
    process.exit(1);
}

const resultLabel = isSingleArg ? `squareroot(${a})` : `${a} ${operation} ${b}`;
console.log(`${resultLabel} = ${result}`);
} // end require.main === module
