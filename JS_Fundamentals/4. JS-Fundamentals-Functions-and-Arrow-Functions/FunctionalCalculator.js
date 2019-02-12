function solve(a, b, znak) {

    let plus = (a, b) => a + b
    let minus = (a, b) => a - b
    let po = (a, b) => a * b
    let del = (a, b) => a / b
    switch (znak) {
        case '+': return plus(a, b)
        case '-': return minus(a, b)
        case '*': return po(a, b)
        case '/': return del(a, b)
    }

}

console.log(solve(5, 5, '-'));