function solve(grads) {
    grads %= 400
    grads = grads < 0 ? 400 + grads : grads
    return grads / 400 * 360
}

console.log(solve(850))