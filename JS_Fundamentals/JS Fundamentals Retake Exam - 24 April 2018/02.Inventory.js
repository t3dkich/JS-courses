function solve(arr) {
    let inventory = []
    let commands = {
        'Buy': item => inventory.push(item),
        'Trash': item => {
            if (inventory.includes(item)) inventory.splice(inventory.indexOf(item), 1)
        },
        'Repair': item => {
            if (inventory.includes(item)) {
                let copy = inventory[inventory.indexOf(item)]
                inventory.splice(inventory.indexOf(item), 1)
                inventory.push(copy)
            }
        },
        'Upgrade': item => {
            let [itemm, upg] = item.split('-')
            if (inventory.includes(itemm)) {
                let index = inventory.indexOf(itemm)
                inventory.splice(index+1, 0, `${itemm}:${upg}`)
            }
        }


    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 'Fight!') {
            let tempArr = arr[i].split(' ')
            if (tempArr.length === 2) {
                commands[tempArr[0]](tempArr[1])
            } else {
                tempArr.forEach(e => inventory.push(e))
            }
        } else {
            break
        }

    }
    console.log(inventory.join(' '));
}

solve(['SWORD Shield Spear',
'Buy Bag',

'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel',
'Fight!'])