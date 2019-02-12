function solve(arr) {
    let bitcoin = 0
    let goldLevs = 0
    let thirdDay = 2
    let purchaseDay = 0
    let isPurchased = false
    for (let i = 0; i < arr.length; i++) {
        let goldMined = arr[i]
        if (i === thirdDay) {
            goldLevs +=  goldMined * 0.7 * 67.51
            thirdDay += 3
        } else {
            goldLevs += goldMined * 67.51
        }
        while (goldLevs >= 11949.16) {
            bitcoin++
            goldLevs -= 11949.16
            if (!isPurchased) {
                purchaseDay = i + 1
                isPurchased = true
            }
        }

    }
    console.log(`Bought bitcoins: ${bitcoin}`)
    if (bitcoin !== 0) console.log(`Day of the first purchased bitcoin: ${purchaseDay}`)
    console.log(`Left money: ${goldLevs.toFixed(2)} lv.`)

}

solve([3124.15,504.212,2511.124])