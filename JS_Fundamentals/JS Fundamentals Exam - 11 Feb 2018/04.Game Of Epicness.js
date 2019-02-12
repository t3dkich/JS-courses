function solve(arrStr, matrix) {
    let allKingdoms = {}
    for (let kingdom of arrStr) {
        if (!allKingdoms.hasOwnProperty(kingdom.kingdom)) {
            allKingdoms[kingdom.kingdom] = {
                'allWins': 0,
                'allLosses': 0
            }
            allKingdoms[kingdom.kingdom][kingdom.general] = {
                'army': +kingdom.army,
                'wins': 0,
                'losses': 0
            }
        } else if (!allKingdoms[kingdom.kingdom].hasOwnProperty(kingdom.general)) {
            allKingdoms[kingdom.kingdom][kingdom.general] = {
                'army': +kingdom.army,
                'wins': 0,
                'losses': 0
            }
        } else {
            allKingdoms[kingdom.kingdom][kingdom.general]['army'] += +kingdom.army
        }
    }
    for (let smallArr of matrix) {
        let [ka, ga, kd, gd] = smallArr
        if (ka !== kd) {
            let diff = allKingdoms[ka][ga]['army'] - allKingdoms[kd][gd]['army']
            if (diff < 0) {
                allKingdoms[kd][gd]['army'] = Math.floor(1.10 * allKingdoms[kd][gd]['army'])
                allKingdoms[kd][gd]['wins']++
                allKingdoms[ka][ga]['army'] = Math.floor(0.9 * allKingdoms[ka][ga]['army'])
                allKingdoms[ka][ga]['losses']++
                allKingdoms[kd]['allWins']++
                allKingdoms[ka]['allLosses']++
            } else if (diff > 0) {
                allKingdoms[ka][ga]['army'] = Math.floor(1.10 * allKingdoms[ka][ga]['army'])
                allKingdoms[ka][ga]['wins']++
                allKingdoms[kd][gd]['army'] = Math.floor(0.9 * allKingdoms[kd][gd]['army'])
                allKingdoms[kd][gd]['losses']++
                allKingdoms[ka]['allWins']++
                allKingdoms[kd]['allLosses']++
            }
        }
    }
    let sortedKingdoms = Object.keys(allKingdoms).sort((a,b) => {
        let wins = +allKingdoms[b]['allWins'] - +allKingdoms[a]['allWins']
        if (wins === 0) {
            let losses = +allKingdoms[a]['allLosses'] - +allKingdoms[b]['allLosses']
            if (losses === 0) return a.localeCompare(b)
            return losses
        }
        return wins
    })
    console.log('Winner: ' + sortedKingdoms[0])
    delete allKingdoms[sortedKingdoms[0]]['allWins']
    delete allKingdoms[sortedKingdoms[0]]['allLosses']
    let sortedGenerals = Object.keys(allKingdoms[sortedKingdoms[0]]).sort((a,b) => {
        return allKingdoms[sortedKingdoms[0]][b]['army'] - allKingdoms[sortedKingdoms[0]][a]['army']
    })


    for (let general of sortedGenerals) {
        console.log('/\\general: ' + general)
        console.log('---army: ' + allKingdoms[sortedKingdoms[0]][general]['army'])
        console.log('---wins: ' + allKingdoms[sortedKingdoms[0]][general]['wins'])
        console.log('---losses: ' + allKingdoms[sortedKingdoms[0]][general]['losses'])
    }


}

solve([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]
)