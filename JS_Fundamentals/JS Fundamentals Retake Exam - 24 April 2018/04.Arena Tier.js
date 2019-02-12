function solve(arr) {
    let gladiators = {}
    function filteredAdding([name, power, value]) {
        if (!gladiators.hasOwnProperty(name)) {
            gladiators[name] = {
                '__totalPower__': +value
            }
            gladiators[name][power] = +value
        } else if (!gladiators[name].hasOwnProperty(power)) {
            gladiators[name][power] = +value
            gladiators[name]['__totalPower__'] += +value
        } else {
            let oldValue = gladiators[name][power]
            if (value > oldValue) {
                gladiators[name][power] = value
                gladiators[name]['__totalPower__'] += value - oldValue
            }
        }
    }
    function fighting([g1, g2]) {
        if (gladiators.hasOwnProperty(g1) && gladiators.hasOwnProperty(g2)) {
            let powersG1 = Object.keys(gladiators[g1]).filter(e => e !== '__totalPower__')
            let powersG2 = Object.keys(gladiators[g2])
            let isMatch = false
            LOOP:
            for (let valueG2 of powersG2) {
                for (let valueG1 of powersG1) {
                    if (valueG1 === valueG2) {
                        isMatch = true
                        powersG1 = valueG1
                        powersG2 = valueG2
                        break LOOP
                    }
                }
            }
            if (isMatch) {
                if (gladiators[g1][powersG1] > gladiators[g2][powersG2]) {
                    delete gladiators[g2]
                } else if (gladiators[g1][powersG1] < gladiators[g2][powersG2]) {
                    delete  gladiators[g1]
                }
            }
        }
    }
    for (let string of arr) {
        let tempG = string.split(/[\s->]+|vs/).filter(e => e !== '')
        if (tempG.length === 3) {
            filteredAdding(tempG)
        } else {
            fighting(tempG)
        }
    }
    let sortedGladiators = Object.keys(gladiators).sort((g1, g2) => {
        let diff = gladiators[g2]['__totalPower__'] - gladiators[g1]['__totalPower__']
        if (diff === 0) {
            return g1.localeCompare(g2)
        }
        return diff
    })
    for (let glad of sortedGladiators) {
        console.log(`${glad}: ${gladiators[glad]['__totalPower__']} skill`)
        let sortedPowers = Object.keys(gladiators[glad]).filter(e => e !== '__totalPower__').sort((a,b) => {
            let diff = gladiators[glad][b] - gladiators[glad][a]
            if (diff === 0) {
                return a.localeCompare(b)
            }
            return diff
        })
        for (let pow of sortedPowers) {
            console.log(`- ${pow} <!> ${gladiators[glad][pow]}`)
        }
    }
}

//solve(['Pesho -> BattleCry -> 400',
//'Gosho -> PowerPunch -> 300',
//'Stamat -> Duck -> 200',
//'Stamat -> Tiger -> 250',
//'Ave Cesar'])
solve(['Pesho -> Duck -> 400',
'Julius -> Shield -> 150',
'Gladius -> Heal -> 200',
'Gladius -> Support -> 250',
'Gladius -> Shield -> 250',
'Pesho vs Gladius',
'Gladius vs Julius',
'Gladius vs Gosho',
'Ave Cesar'])