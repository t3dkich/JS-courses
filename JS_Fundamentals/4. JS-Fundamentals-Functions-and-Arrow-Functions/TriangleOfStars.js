function solve(num) {
    let drawing = ''

    for (let i = 1; i <= num; i++) {
        drawing += '*'.repeat(i) + '\n'
    }

    for (let i = num - 1; i >= 1; i--) {
        drawing += '*'.repeat(i) + '\n'
    }
    return drawing
}

console.log(solve(3));