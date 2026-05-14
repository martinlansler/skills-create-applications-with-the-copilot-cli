const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
} = require('../calculator');

describe('addition', () => {
  test('adds two positive numbers', () => {
    expect(addition(2, 3)).toBe(5);
  });
  test('adds a positive and a negative number', () => {
    expect(addition(5, -3)).toBe(2);
  });
  test('adds two negative numbers', () => {
    expect(addition(-4, -6)).toBe(-10);
  });
});

describe('subtraction', () => {
  test('subtracts two positive numbers', () => {
    expect(subtraction(10, 4)).toBe(6);
  });
  test('subtracts a larger number from a smaller one', () => {
    expect(subtraction(3, 7)).toBe(-4);
  });
});

describe('multiplication', () => {
  test('multiplies two positive numbers', () => {
    expect(multiplication(3, 4)).toBe(12);
  });
  test('multiplies by zero', () => {
    expect(multiplication(5, 0)).toBe(0);
  });
  test('multiplies two negative numbers', () => {
    expect(multiplication(-3, -4)).toBe(12);
  });
});

describe('division', () => {
  test('divides two positive numbers', () => {
    expect(division(10, 2)).toBe(5);
  });
  test('divides resulting in a decimal', () => {
    expect(division(7, 2)).toBe(3.5);
  });
  test('throws an error when dividing by zero', () => {
    expect(() => division(10, 0)).toThrow('Division by zero is not allowed');
  });
});

describe('modulo', () => {
  test('returns the remainder of a division', () => {
    expect(modulo(10, 3)).toBe(1);
  });
  test('returns zero when evenly divisible', () => {
    expect(modulo(9, 3)).toBe(0);
  });
  test('throws an error when modulo by zero', () => {
    expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
  });
});

describe('power', () => {
  test('raises a number to a positive exponent', () => {
    expect(power(2, 10)).toBe(1024);
  });
  test('raises a number to the power of zero', () => {
    expect(power(5, 0)).toBe(1);
  });
  test('raises a number to a negative exponent', () => {
    expect(power(2, -1)).toBe(0.5);
  });
});

describe('squareRoot', () => {
  test('returns the square root of a positive number', () => {
    expect(squareRoot(9)).toBe(3);
  });
  test('returns the square root of zero', () => {
    expect(squareRoot(0)).toBe(0);
  });
  test('returns a decimal square root', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
  });
  test('throws an error for negative numbers', () => {
    expect(() => squareRoot(-4)).toThrow('Square root of a negative number is not allowed');
  });
});
