const morseDict = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..',
  0: '-----',
  1: '.----',
  2: '..---',
  3: '...--',
  4: '....-',
  5: '.....',
  6: '-....',
  7: '--...',
  8: '---..',
  9: '----.',
  ' ': '/',
}

export function morseCodeTranslator(string) {
  return string.split('').map((character) => morseDict[character]).join(' ')
}

export function morseCodeDecoder(string) {
  const splitString = string.toLowerCase().split(' ')

  return splitString.map((char) => (
    Object.values(morseDict).includes(char)
      ? Object.keys(morseDict)[Object.values(morseDict).indexOf(char)]
      : char
  )).join('')
}
