function solve(arr) {
    let compnString = arr.shift()
    let delimiter = arr.shift()
    let valids = []
    let invalids = []
    let [comp1, comp2, comp3] = compnString.split(delimiter)
    let pattern1 = new RegExp(comp1.trim())
    let pattern2 = new RegExp(comp2.trim())
    let pattern3 = new RegExp(comp3.trim())
    for (let string of arr) {
        let tempStr = string.toLowerCase().split(' ').map(e => e.trim())
        let match1 = pattern1.exec(tempStr)
        let match2 = pattern2.exec(tempStr)
        let match3 = pattern3.exec(tempStr)
        if (match1 !== null && match2 !== null && match3 !== null) {
            valids.push(tempStr.join(' '))
        } else {
            invalids.push(tempStr.join(' '))
        }
    }
    if (valids.length !== 0 && invalids.length !== 0) {
        console.log('ValidSentences');
        let count1 = 0
        let count2 = 0
        for (let val of valids) {
            count1++
            console.log(`${count1}. ${val}`)
        }
        console.log('='.repeat(30))
        console.log('InvalidSentences');
        for (let val of invalids) {
            count2++
            console.log(`${count2}. ${val}`)
        }
    } else if (valids.length > 0 && invalids.length === 0) {
        console.log('ValidSentences');
        let count = 0
        for (let val of valids) {
            count++
            console.log(`${count}. ${val}`)
        }
    } else if (valids.length === 0 && invalids.length > 0) {
        console.log('InvalidSentences');
        let count = 0
        for (let val of invalids) {
            count++
            console.log(`${count}. ${val}`)
        }
    }
}

solve(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho  e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]




)