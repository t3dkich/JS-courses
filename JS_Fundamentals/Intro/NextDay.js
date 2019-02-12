function nextDay(year, month, day) {
    let today = new Date(year, month - 1, day)
    let oneDay = 24 * 60 * 60 * 1000
    let finalDay = new Date(today.getTime() + oneDay)
    return finalDay.getFullYear() + '-'
    + (finalDay.getMonth() + 1) + '-'
    + finalDay.getDate()



}

console.log(nextDay(2016, 9, 30));