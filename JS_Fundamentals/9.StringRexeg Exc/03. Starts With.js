function solve(string, peace) {
    return string.indexOf(peace) !== -1 ? 'true' : 'false'
}

console.log(solve('How are you doing', 'how'));