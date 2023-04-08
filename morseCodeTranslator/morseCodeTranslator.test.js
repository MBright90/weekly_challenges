import morseCodeTranslator from './morseCodeTranslator'

describe('morseCodeTranslator', () => {
  it('should return the Morse code equivalent of a single letter', () => {
    expect(morseCodeTranslator('a')).toBe('.-')
    expect(morseCodeTranslator('b')).toBe('-...')
    expect(morseCodeTranslator('c')).toBe('-.-.')
  })

  it('should return the Morse code equivalent of a word', () => {
    expect(morseCodeTranslator('hello')).toBe('.... . .-.. .-.. ---')
    expect(morseCodeTranslator('world')).toBe('.-- --- .-. .-.. -..')
  })

  it('should include a space character between each letter', () => {
    expect(morseCodeTranslator('sos')).toBe('... --- ...')
    expect(morseCodeTranslator('help')).toBe('.... . .-.. .--.')
  })

  it('should include a slash character between each word', () => {
    expect(morseCodeTranslator('sos please')).toBe('... --- ... / .--. .-.. . .- ... .')
    expect(morseCodeTranslator('mayday mayday')).toBe('-- .- -.-- -.. .- -.-- / -- .- -.-- -.. .- -.--')
  })
})
