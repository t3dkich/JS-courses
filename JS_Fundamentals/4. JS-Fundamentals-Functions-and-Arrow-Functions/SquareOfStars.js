function solve(num) {
    let drawing = ''
    for (let i = 0; i < num; i++) {
        drawing += '* '.repeat(num) + '\n'
    }
    return drawing
}

console.log(solve(5));