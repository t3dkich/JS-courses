function solve(meals, cmds) {
    let count = 0
    let isEnd = false
    let isValidIndex = i => i >= 0 && i < meals.length;
    let commands = {
        'Serve': (s, e) => {
            if (meals.length > 0) console.log(`${meals.pop()} served!`)
        },
        'Add': (s, e) => {
            if (s.length > 0) meals.splice(0, 0, s)
        },
        'Shift': (s, e) => {
            if (isValidIndex(s) && isValidIndex(e) && meals.length > 0) {
                let copy1 = meals[s]
                let copy2 = meals[e]
                meals[s] = copy2
                meals[e] = copy1
            }
        },
        'Eat': (s, e) => {
            if (meals.length > 0) {
                console.log(meals[0] + ' eaten');
                meals.splice(0, 1)
                count++
            }
        },
        'Consume': (s, e) => {
            if (meals.length > 0) {
                for (let i = s; i <= e; i++) {
                    meals.splice(i, 1)
                    i--
                    e--
                    count++
                }
                console.log('Burp!')
            }
        },
        'End': (s, e) => {
            if (meals.length !== 0) {
                console.log(`Meals left: ${meals.join(', ')}`)
            } else {
                console.log('The food is gone')
            }
            console.log(`Meals eaten: ${count}`)
            isEnd = true
        }
    }

    for (let cmd of cmds) {
        let [cmnd, sIndex, eIndex] = cmd.split(' ')
        if (cmnd === 'Serve' || cmnd === 'Add' || cmnd === 'Shift' || cmnd === 'Eat'
        || cmnd === 'Consume' || cmnd === 'End') {
            if (!isEnd) commands[cmnd](sIndex, eIndex)

        }
    }
}

solve(['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'],
    ['Add spaghetti',
        'Shift 0 1',
        'dsadsad 1 2',
        'Consume 1 4',
        'End'])

solve(['carrots', 'apple', 'beet'],
    ['Consume 0 2',
        'End',])

