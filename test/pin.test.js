import { describe, it, expect } from 'vitest';
import { esPinValido } from '../src/pin.js';

describe('esPinValido', () => {
  it('PIN válido', () => {
    expect(esPinValido('0123')).toBe(true);
    expect(esPinValido('1234')).toBe(true);
    expect(esPinValido('000001')).toBe(true);
  });

  it('longitud incorrecta', () => {
    expect(esPinValido('')).toBe(false);
    expect(esPinValido('123')).toBe(false);
    expect(esPinValido('12345')).toBe(false);
    expect(esPinValido('1234567')).toBe(false);
  });

  it('Con errores de formato y espacios', () => {
    expect(esPinValido('1111')).toBe(false);
    expect(esPinValido('888888')).toBe(false);
    expect(esPinValido(' 1234')).toBe(false);
    expect(esPinValido('12 34')).toBe(false);
  });

  it('caracteres no permitidos', () => {
    expect(esPinValido(null)).toBe(false);
    expect(esPinValido(undefined)).toBe(false);
    expect(esPinValido(1234)).toBe(false);
    expect(esPinValido(true)).toBe(false);
    expect(esPinValido(["1", "2", "3", "4"])).toBe(false);
  });
});