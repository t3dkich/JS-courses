function solve(str) {
    let pattern = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+/
    let isValid = pattern.test(str)
    if (isValid) return 'Valid'
    return 'Invalid'
}

console.log(solve('valid@gmail.bg'));