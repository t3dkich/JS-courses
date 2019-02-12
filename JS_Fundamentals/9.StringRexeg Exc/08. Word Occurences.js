function solve(arr) {
    let counter = 0
    arr[0].toLowerCase().split(' ').forEach(e => {
        if (arr[1].match(e)) {
            counter++
        }
    })
    console.log(counter)
}

solve(['How do you plan on achieving that? How? How can you even think of that?',
    'how'])