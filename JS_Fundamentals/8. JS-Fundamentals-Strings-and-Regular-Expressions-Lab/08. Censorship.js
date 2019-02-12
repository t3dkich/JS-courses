function solve(textStr, wordsArr) {
    let startIndex = 0
    for (let wordsArrKey of wordsArr) {
        startIndex = textStr.indexOf(wordsArrKey)
        while (startIndex !== -1) {
            textStr = textStr.replace(wordsArrKey, '-'.repeat(wordsArrKey.length))
            startIndex = textStr.indexOf(wordsArrKey)
        }
    }
    console.log(textStr)
}

solve('roses are red, violets are blue', [', violets are', 'red'])