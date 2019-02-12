function solve(str) {
    str.split('').forEach((e,i) => {
        console.log(`str[${i}] -> ${e}`)
    })
}

solve('Hello, World!')