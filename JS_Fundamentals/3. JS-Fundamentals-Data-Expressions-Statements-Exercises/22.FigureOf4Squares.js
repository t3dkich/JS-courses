function solve(num) {
    let drawing = ''
    if (num === 2) {
        drawing += '+'.repeat(3)
    } else {
        drawing += '+' + '-'.repeat(num - 2) + '+' + '-'.repeat(num - 2) + '+\n'
        for (let i = 1; i < num / 2 - 1; i++) {
            drawing += '|' + ' '.repeat(num - 2) + '|' + ' '.repeat(num - 2) + '|\n'
        }
        drawing += '+' + '-'.repeat(num - 2) + '+' + '-'.repeat(num - 2) + '+\n'
        for (let i = 1; i < num / 2 - 1; i++) {
            drawing += '|' + ' '.repeat(num - 2) + '|' + ' '.repeat(num - 2) + '|\n'
        }
        drawing += '+' + '-'.repeat(num - 2) + '+' + '-'.repeat(num - 2) + '+\n'

    }
    return drawing

}

console.log(solve(7));