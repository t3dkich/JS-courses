function solve(arr) {
    let finalSize = arr[0]
    let chunk = 0
    let temp = ''
    let output = ''
    let count = 0
    let isDone = false

    for (let i = 1; i < arr.length; i++) {
        chunk = arr[i]
        output += `Processing chunk ${chunk} microns\n`
        if (isXray(chunk, finalSize)) continue

        temp = cutting(chunk, finalSize)
        if (isDone) {
            chunk = Number(temp.split('-')[0])
            count = temp.split('-')[1]
            output += `Cut x${count}\nTransporting and washing\n`
        }
        if (isXray(chunk, finalSize)) continue
        if (chunk === finalSize) {
            output += `Finished crystal ${finalSize} microns\n`
            continue
        }
        isDone = false

        temp = lapping(chunk, finalSize)
        if (isDone) {
            chunk = Number(temp.split('-')[0])
            count = temp.split('-')[1]
            output += `Lap x${count}\nTransporting and washing\n`
        }
        if (isXray(chunk, finalSize)) continue
        if (chunk === finalSize) {
            output += `Finished crystal ${finalSize} microns\n`
            continue
        }
        isDone = false

        temp = grinding(chunk, finalSize)
        if (isDone) {
            chunk = Number(temp.split('-')[0])
            count = temp.split('-')[1]
            output += `Grind x${count}\nTransporting and washing\n`
        }
        if (isXray(chunk, finalSize)) continue
        if (chunk === finalSize) {
            output += `Finished crystal ${finalSize} microns\n`
            continue
        }
        isDone = false

        temp = etching(chunk, finalSize)
        if (isDone) {
            chunk = Number(temp.split('-')[0])
            count = temp.split('-')[1]
            output += `Etch x${count}\nTransporting and washing\n`
        }
        if (isXray(chunk, finalSize)) continue

        if (chunk === finalSize) {
            output += `Finished crystal ${finalSize} microns\n`
        }
        isDone = false
    }

    function isXray(ch, fS) {
        if (ch + 1 === fS) {
            chunk = xray(chunk)
            output += 'X-ray x1\n'
            output += `Finished crystal ${finalSize} microns\n`
            return true
        }
        return false
    }

    function xray(ch) {
        return ch + 1
    }

    function etching(ch, fS) {
        let count = 0
        while (ch - 2 >= fS - 1) {
            ch = ch - 2
            count++
            isDone = true
        }
        return `${Math.floor(ch)}-${count}`
    }

    function grinding(ch, fS) {
        let count = 0
        while (ch - 20 >= fS - 1) {
            ch = ch - 20
            count++
            isDone = true
        }
        return `${Math.floor(ch)}-${count}`
    }

    function lapping(ch, fS) {
        let count = 0
        while (ch * 0.8 >= fS - 1) {
            ch = ch * 0.8
            count++
            isDone = true
        }
        return `${Math.floor(ch)}-${count}`
    }

    function cutting(ch, fS) {
        let count = 0
        while (ch * 0.25 >= fS - 1) {
            ch = ch * 0.25
            count++
            isDone = true
        }
        return `${Math.floor(ch)}-${count}`
    }

    return output

}

console.log(solve([1456, 50000]));


