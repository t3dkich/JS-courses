function solve(arr) {
    let towns = []
    let income = 0
    for (let arrKey of arr) {
        let tempArr = arrKey.split(/\s+/).filter(e => e !== '|')
        income += Number(tempArr[tempArr.length - 1])
        towns.push(tempArr.filter((e,i) => i !== tempArr.length - 1).join(' '))

    }
    console.log(towns.join(', '))
    console.log(income);


}
solve(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
)