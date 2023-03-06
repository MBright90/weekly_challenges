const testArrays = [
    'fytsjkfboz vuplmqnrcxaiwedhgBCDEfl',
    'vxbzgqiwdlu!! kcnrpaotsymhjefJKLxy',
    'qblzorPQRSTvwn Lcdefghjkyiaumx',
    'lqxwveHIBCDJUVKbcdjshdfgimoprtunYZa',
    'cvkjziplqrmytuabdnoexfgstwXYZEFGH',
    'sakldnPRSTcdghijbzyvuwxofemq',
    'wszjqfukvnbgtoxprDHIJKLabcdey',
    'xhtizvfdqpnouyjrcmkaWVXYZbgleas',
    'mgnqupsjKLMNOVWXYZabcdefhtlry',
    'qjknctbdmPRSTxyzuvoieflawghEF',
]

const alphabet = {
    'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9, 'k': 10, 'l': 11,
    'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18, 't': 19, 'u': 20, 'v': 21, 'w': 22,
    'x': 23, 'y': 24, 'z': 25
}

const normalizeStringToArray = (string) => {
    // Normalize and split string
    const stringArray = string.toLowerCase().split('')
    // Filter out any non words characters
    return stringArray.filter((character) => character.match(/[a-z]/i))
}

const recursiveSubstringCheck = (array, currentIndex, currentSubstringArray = []) => {
    // if current letter is final letter in array, return
    if (currentIndex === array.length - 1) return [...currentSubstringArray, array[currentIndex]]

    const currentLetter = array[currentIndex]
    const nextLetter = array[currentIndex + 1]

    // base case
    // if next letter does not follow current letter in alphabet, return the current substring
    // including the current letter
    if (alphabet[nextLetter] - alphabet[currentLetter] !== 1) 
        return [...currentSubstringArray, array[currentIndex]]

    // recursive case
    // if next letter does follow current letter in alphabet, add current letter to array 
    // and begin check on next letter
    currentSubstringArray.push(array[currentIndex])
    return recursiveSubstringCheck(array, currentIndex + 1, currentSubstringArray)
}

const longestAlphabeticalSubstring = (string) => {
    const filteredArr = normalizeStringToArray(string)

    let currentLongestSubstring = []
    for (let i = 0; i < filteredArr.length; i++) {
        alphabeticalSubstringArray = recursiveSubstringCheck(filteredArr, i)
        if (alphabeticalSubstringArray.length > currentLongestSubstring.length)
            currentLongestSubstring = alphabeticalSubstringArray
    }

    return currentLongestSubstring.join('')
}

testArrays.forEach((array) => { console.log(longestAlphabeticalSubstring(array)) })