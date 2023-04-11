import { morseCodeDecoder, morseCodeTranslator } from './morseCodeTranslator'

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

describe('morseCodeDecoder', () => {
  it('should return the Morse code equivalent of a single letter', () => {
    expect(morseCodeDecoder('.-')).toBe('a')
    expect(morseCodeDecoder('-...')).toBe('b')
    expect(morseCodeDecoder('-.-.')).toBe('c')
  })

  it('should return the Morse code equivalent of a word', () => {
    expect(morseCodeDecoder('.... . .-.. .-.. ---')).toBe('hello')
    expect(morseCodeDecoder('.-- --- .-. .-.. -..')).toBe('world')
  })

  it('should remove the space character between each letter', () => {
    expect(morseCodeDecoder('... --- ...')).toBe('sos')
    expect(morseCodeDecoder('.... . .-.. .--.')).toBe('help')
  })

  it('should include a space character for between each word', () => {
    expect(morseCodeDecoder('... --- ... / .--. .-.. . .- ... .')).toBe('sos please')
    expect(morseCodeDecoder('-- .- -.-- -.. .- -.-- / -- .- -.-- -.. .- -.--')).toBe('mayday mayday')
  })
})
