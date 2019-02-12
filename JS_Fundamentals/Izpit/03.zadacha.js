function solve(arr) {
    let mainObj = {}
    for (let string of arr) {
        let [country, town, price] = string.split(' > ')
        town = town.split('').map((e,i) => {
            if (i === 0) {
                e = e.toUpperCase()
            }
            return e
        }).join('')
        if (!mainObj.hasOwnProperty(country)) {
            mainObj[country] = {}
            mainObj[country][town] = price
        } else if (!mainObj[country].hasOwnProperty(town)) {
            mainObj[country][town] = price
        } else {
            if (mainObj[country][town] > price) {
                mainObj[country][town] = price
            }
        }
    }
    let sortedCountries = Object.keys(mainObj).sort((a,b) => {
        return a.localeCompare(b)
    })
    let output = ''
    for (let val of sortedCountries) {
        output += `${val} -> `
        let sortedTowns = Object.keys(mainObj[val]).sort((a,b) => {
            return mainObj[val][a] - mainObj[val][b]
        })
        for (let town of sortedTowns) {
            output += `${town} -> ${mainObj[val][town]} `
        }
        output += '\n'
    }
    console.log(output);
}

solve(["Bulgaria > sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200" ]
)