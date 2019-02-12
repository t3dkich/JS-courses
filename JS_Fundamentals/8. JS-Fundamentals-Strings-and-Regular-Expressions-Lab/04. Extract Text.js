function solve(text) {
    let matchStart = text.indexOf('(')
    let matchEnd = text.indexOf(')')
    let str = []

    while (matchStart !== -1) {
        str.push(text.slice(matchStart + 1, matchEnd))
        matchStart = text.indexOf('(', matchEnd)
        matchEnd = text.indexOf(')', matchEnd + 1)

    }

    console.log(str.join(', '));
}

solve('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)'
)