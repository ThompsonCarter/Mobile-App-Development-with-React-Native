import { sum } from './sum';

describe('sum util', () => {
  it('adds two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-5, 5)).toBe(0);
  });
});