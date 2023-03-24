import longestAlphabeticalSubstring from './alphabeticalSubstrings'

describe('Longest Alphabetical Substring', () => {
  it('Should return longest alphabet link', () => {
    const result = longestAlphabeticalSubstring('abbbcabcdefefg')
    expect(result).toEqual('abcdef')
    expect(result.length).toEqual(6)
  })
})
