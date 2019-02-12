function solve(arr) {
    let output = []
    let num = 1
    for (let arrKey of arr) {
        switch (arrKey) {
            case 'add':
                output.push(num++)
                break
            case 'remove':
                output.pop()
                num++
                break
        }
    }
    if (output.length === 0){
        console.log('Empty')
    } else {
        console.log(output.join('\n'))
    }
}

solve(['remove', 'remove', 'remove'])