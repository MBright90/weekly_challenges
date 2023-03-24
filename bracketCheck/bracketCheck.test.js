import bracketCheck from './bracketCheck'

describe('bracketCheck', () => {
  it('well-formed string returns true', () => {
    expect(bracketCheck('{[(testing)]}')).toBe(true)
  })

  it('malformed string returns false', () => {
    expect(bracketCheck('{[()]{}]')).toBe(false)
  })

  it('empty string returns true', () => {
    expect(bracketCheck('')).toBe(true)
  })

  it('string with only opening brackets returns false', () => {
    expect(bracketCheck('(((')).toBe(false)
  })

  it('string with only closing brackets returns true', () => {
    expect(bracketCheck(')))')).toBe(true)
  })

  it('string with mixed brackets returns false', () => {
    expect(bracketCheck('{[(]}')).toBe(false)
  })
})
