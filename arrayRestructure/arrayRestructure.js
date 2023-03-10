const array = [1, 'b', '!', 4, 'f', 'a', 2, 'g', 8, '}']

// Original challenge

const restructureArray = (arr) => {
    const [numArr, letterArr, nonWordArr] = [[], [], []]
    
    arr.forEach((character) => {
        if (typeof character === "string" && character.match(/[a-z]/i)) 
          letterArr[letterArr.length] = character
        else if (typeof character === "number") 
          numArr[numArr.length] = character
        else 
          nonWordArr[nonWordArr.length] = character
    })

    return [...numArr, ...letterArr, ...nonWordArr]

} 

console.log(restructureArray(array))

