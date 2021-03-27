//exercice 2
const includeAllNumbers = (number) => {
    const digits = new Set(number.toString().split(""))
    const allDigits = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
    const difference = [...allDigits].filter(digit => !digits.has(digit))
    return difference.length === 0
}

//Exercice 3
let findMissingLetterInSequence = (sequence) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
    let sequenceIndex = 0
    let alphabetIndex = alphabet.indexOf(sequence[sequenceIndex])
    while (alphabet[alphabetIndex] === sequence[sequenceIndex]) {
        alphabetIndex += 1
        sequenceIndex += 1
    }
    return alphabet[alphabetIndex]
}

findMissingLetterInSequence(["a", "c"])