function solve(text) {
    return text.split(/\W+/).map(w => w.toUpperCase()).filter(w => w !== '').join(', ')
}

console.log(solve('Hi, how are you?'));
