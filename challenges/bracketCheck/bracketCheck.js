const bracketPairs = {
  ')': '(',
  '}': '{',
  ']': '[',
}

const bracketCheck = (checkStr) => {
  const openingBrackets = []
  const strArr = checkStr.split('')

  for (let i = 0; i < strArr.length; i += 1) {
    const char = strArr[i]
    // Add opening brackets to bracket array
    if (char === '(' || char === '{' || char === '[') {
      openingBrackets[openingBrackets.length] = char
    // If a closing bracket is found after an opening bracket, remove one opening bracket
    // from the array.
    } else if (openingBrackets.length > 0 && (char === ')' || char === '}' || char === ']')) {
      if (openingBrackets.indexOf(bracketPairs[char]) >= 0) {
        openingBrackets.splice(openingBrackets.indexOf(bracketPairs[char]), 1)
      }
    }
  }

  // Return bool which states whether opening brackets have all been closed.
  return openingBrackets.length === 0
}

export default bracketCheck
