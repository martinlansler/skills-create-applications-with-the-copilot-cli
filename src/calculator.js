#!/usr/bin/env node

/**
 * calculator.js — Node.js CLI Calculator
 *
 * Supported operations:
 *   add      <a> <b>  – Addition:       returns a + b
 *   subtract <a> <b>  – Subtraction:    returns a - b
 *   multiply <a> <b>  – Multiplication: returns a × b
 *   divide   <a> <b>  – Division:       returns a ÷ b  (b must not be zero)
 *
 * Usage:
 *   node calculator.js <operation> <number1> <number2>
 *
 * Examples:
 *   node calculator.js add 4 5        → 9
 *   node calculator.js subtract 9 3   → 6
 *   node calculator.js multiply 3 4   → 12
 *   node calculator.js divide 10 2    → 5
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

// Parse CLI arguments
const [, , operation, arg1, arg2] = process.argv;

if (!operation || arg1 === undefined || arg2 === undefined) {
  console.error("Usage: node calculator.js <add|subtract|multiply|divide> <number1> <number2>");
  process.exit(1);
}

const a = parseFloat(arg1);
const b = parseFloat(arg2);

if (isNaN(a) || isNaN(b)) {
  console.error("Error: Both arguments must be valid numbers.");
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
  default:
    console.error(`Error: Unknown operation "${operation}". Use add, subtract, multiply, or divide.`);
    process.exit(1);
}

console.log(`${a} ${operation} ${b} = ${result}`);
