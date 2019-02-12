function solve(string) {
    let text = string.pop(),
        word = string.pop()
    let finds = text.indexOf(word)
    let count = 0
    while (finds !== -1) {
        count++
        finds = text.indexOf(word, finds + 1)
    }
    console.log(count)
}

solve(['the', 'the edin kvo si the tva e thea'])