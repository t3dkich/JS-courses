function solve([sIndex, eIndex, repStr, mainStr]) {
    let countryPatt = /[A-Z][a-z]+[A-Z]/
    let digitPatt = /[0-9]{3}\.*[0-9]*/g
    let city = []
    let countryMatch = countryPatt.exec(mainStr)
    let digitMatch = mainStr.match(digitPatt).map(e => Math.ceil(e))
    if (countryMatch !== null && digitMatch !== null) {
        let country = countryMatch[0].split('')
        let tempStr = ''
        for (let i = sIndex; i <= eIndex; i++) {
            tempStr += country[i]
        }
        country = country.join('').replace(tempStr, repStr).split('')
        for (let i = 0; i < country.length; i++) {
            country[i] = i === country.length - 1 ? country[i].toLowerCase() : country[i]
        }
        for (let digit of digitMatch) {
            city.push(String.fromCharCode(digit))
            city = city.map((e,i) => {
                if (i === 0) {
                    e = e.toUpperCase()
                }
                return e
            })
        }
        console.log(`${country.join('')} => ${city.join('')}`);

    }
}

solve(["1", "4","loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"])
solve(["3", "5", "gar","114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"])