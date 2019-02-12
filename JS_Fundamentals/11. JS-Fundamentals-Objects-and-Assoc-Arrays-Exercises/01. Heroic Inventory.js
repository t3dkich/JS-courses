function solve(arr) {
    let output = []
    for (let arrKey of arr) {
        let tempArr = arrKey.split(/[/ ,]+/)
        let obj = {
            name: tempArr[0],
            level: Number(tempArr[1]),
            items: []
        }
        tempArr.forEach((e, i) => {
            if (i > 1) obj.items.push(tempArr[i])
        })
        output.push(JSON.stringify(obj))
    }
    console.log(`[${output.join()}]`)
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])
