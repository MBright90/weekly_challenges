const array = [1, 'b', '!', 4, 'f', 'a', 2, 'g', 8, '}']

// Original challenge

const restructureArray = (arr) => {
    const [numArr, letterArr, nonWordArr] = [[], [], []]
    
    arr.forEach((character) => {
        if (typeof character === "string" && character.match(/[a-z]/i)) 
          letterArr[letterArr.length] = character
        else if (typeof character === "number" || typeof character === "string" && character.match(/[0-9]/)) 
          numArr[numArr.length] = character
        else 
          nonWordArr[nonWordArr.length] = character
    })

    return [...numArr, ...letterArr, ...nonWordArr]

} 

console.log(restructureArray(array))

// Extra challenge

const sortedRestructureArray = (arr) => {
    const [numArr, letterArr, nonWordArr] = [[], [], []]
    
    arr.forEach((character) => {
        if (typeof character === "string" && character.match(/[a-z]/i)) 
          letterArr[letterArr.length] = character
        else if (typeof character === "number" || typeof character === "string" && character.match(/[0-9]/)) 
          numArr[numArr.length] = character
        else 
          nonWordArr[nonWordArr.length] = character
    })

    return [
        ...numArr.sort((numA, numB) => parseInt(numA, 10) - parseInt(numB, 10)),
        ...letterArr.sort((letterA, letterB) => 
          letterA.toLowerCase() >= letterB.toLowerCase() ? 1 : -1),
        ...nonWordArr
    ]
} 

console.log(sortedRestructureArray(testArray))

