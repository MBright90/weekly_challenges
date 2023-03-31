import bitwiseAndInRange from './bitwiseOperators'

describe('bitwiseAndInRange', () => {
  it('should return the bitwise AND of all integers between 0 and 2 (inclusive)', () => {
    expect(bitwiseAndInRange(0, 2)).toBe(0)
  })

  it('should return the bitwise AND of all integers between 1 and 3 (inclusive)', () => {
    expect(bitwiseAndInRange(1, 3)).toBe(1)
  })

  it('should return the bitwise AND of all integers between 2 and 5 (inclusive)', () => {
    expect(bitwiseAndInRange(2, 5)).toBe(0)
  })

  it('should return the bitwise AND of all integers between 10 and 15 (inclusive)', () => {
    expect(bitwiseAndInRange(10, 15)).toBe(10)
  })

  it('should return the bitwise AND of all integers between 0 and 65535 (inclusive)', () => {
    expect(bitwiseAndInRange(0, 65535)).toBe(0)
  })
})
