function solve(string, match) {
    return string.indexOf(match, string.length - match.length - 1) !== -1 ? 'true' : 'false'
}

console.log(solve('How have you fun?',
    'fun'));