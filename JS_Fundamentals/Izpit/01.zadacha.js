function solve(strArr) {
    let totalGold = 0
    let isSpec = false
    let isAverg = false
    let isClumsy = false
    let specCount = 0
    let clumsyCount = 0
    for (let i = 0; i < strArr.length; i++) {
        let [tempProf, tempGold] = strArr[i].split(' : ')
        sortProf(tempProf)
        if (isSpec && tempGold >= 200) {
            specCount++
            tempGold *= 0.8
            if (specCount % 2 === 0) {
                tempGold += 200
            }
            totalGold += +tempGold
        } else if (isAverg) {
            totalGold += +tempGold
        } else if (isClumsy){
            clumsyCount++
            if (clumsyCount % 2 === 0) {
                tempGold *= 0.95
            } else if (clumsyCount % 3 === 0) {
                tempGold *= 0.9
            }
            totalGold += +tempGold
        }
        isSpec = false
        isAverg = false
        isClumsy = false

    }
    console.log(`Final sum: ${totalGold.toFixed(2)}`)
    if (+totalGold >= 1000) {
        console.log(`Mariyka earned ${(+totalGold - 1000).toFixed(2)} gold more.`);
    } else {
        console.log(`Mariyka need to earn ${(1000 - +totalGold).toFixed(2)} gold more to continue in the next task.`);
    }


    function sortProf(prof) {
        if (prof ==='Programming' || prof === 'Hardware maintenance'
        || prof === 'Cooking' || prof === 'Translating' || prof === 'Designing') {
            isSpec = true
        } else if (prof ==='Driving' || prof === 'Managing'
            || prof === 'Fishing' || prof === 'Gardening') {
            isAverg = true
        } else {
            isClumsy = true
        }

    }
}

solve(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]

)