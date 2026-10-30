import { describe, it, expect } from 'vitest';
import { fibonacci } from '../src/fibonacci.js';

describe('fibonacci', () => {
  it('casos base', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
  });

  it('varios términos', () => {
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(10)).toBe(55);
  });

  it('límite superior', () => {
    expect(fibonacci(78)).toBe(8944394323791464);
  });

  it('entradas inválidas', () => {
    expect(() => fibonacci(-1)).toThrow(RangeError);
    expect(() => fibonacci(79)).toThrow(RangeError);
    expect(() => fibonacci(2.5)).toThrow(RangeError);
    expect(() => fibonacci(NaN)).toThrow(RangeError);
    expect(() => fibonacci(Infinity)).toThrow(RangeError);
    expect(() => fibonacci('5')).toThrow(RangeError);
  });
});