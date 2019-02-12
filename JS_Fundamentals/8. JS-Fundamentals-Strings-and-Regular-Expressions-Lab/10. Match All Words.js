function solve(text) {
    return text.split(/\W+/).filter(e => e !== '').join('|')
}