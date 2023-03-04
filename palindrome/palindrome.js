function isPalindrome(testString) {
    // Split string into array removing spaces and capital letters
      const stringArray = testString.toLowerCase().split('')
    
    // Filter out non-letter characters
    const filteredArray = stringArray.filter(character => character.match(/[a-z]/))
    
    // Create reverse array
    const reverseArray = []
    for (let i = filteredArray.length - 1; i >= 0; i -= 1) {
      reverseArray[reverseArray.length] = filteredArray[i]
    }
    
    // Return comparison
    return filteredArray.join() === reverseArray.join()
}