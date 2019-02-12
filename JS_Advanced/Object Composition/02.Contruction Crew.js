function solve(workerObj) {
    if (workerObj.handsShaking) {
        workerObj.bloodAlcoholLevel += workerObj.weight * 0.1 *
            workerObj.experience
        workerObj.handsShaking = false
    }
    return workerObj
}

console.log(solve({
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true
}));