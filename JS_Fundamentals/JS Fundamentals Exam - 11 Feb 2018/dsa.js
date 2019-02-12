let func = solve(5, 2)
console.log(func)

function solve(num, num2) {
    let obj = {
        umnojenie: (a,b) => num * num2
    }
    return obj.umnojenie(num, num2)
}
