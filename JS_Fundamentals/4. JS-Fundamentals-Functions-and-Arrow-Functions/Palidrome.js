function solve(word) {
    let w = word.split('')
    for (let i = 0; i < w.length; i++) {
        if (w[i] !== w[w.length - 1 - i]) return false
    }
    return true
}

console.log(solve('dsadsada'));