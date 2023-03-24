/* eslint-disable max-len */
// Original challenge

export const restructureArray = (arr) => {
  const [numArr, letterArr, nonWordArr] = [[], [], []]

  arr.forEach((character) => {
    if (typeof character === 'string') {
      if (character.match(/[a-z]/i)) letterArr[letterArr.length] = character
      else if (character.match(/[0-9]/)) numArr[numArr.length] = character
    } else if (typeof character === 'number') numArr[numArr.length] = character
    else nonWordArr[nonWordArr.length] = character
  })

  return [...numArr, ...letterArr, ...nonWordArr]
}

// Extra challenge

export const sortedRestructureArray = (arr) => {
  const [numArr, letterArr, nonWordArr] = [[], [], []]

  arr.forEach((character) => {
    if (typeof character === 'string' && character.match(/[a-z]/i)) letterArr[letterArr.length] = character
    else if ((typeof character === 'number' || typeof character === 'string') && character.match(/[0-9]/)) {
      numArr[numArr.length] = character
    } else { nonWordArr[nonWordArr.length] = character }
  })

  return [
    ...numArr.sort((numA, numB) => parseInt(numA, 10) - parseInt(numB, 10)),
    ...letterArr.sort((letterA, letterB) => (letterA.toLowerCase() >= letterB.toLowerCase() ? 1 : -1)),
    ...nonWordArr,
  ]
}
