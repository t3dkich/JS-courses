function loopNums(strNum) {
    let str = ''
    for (let i = 1; i <= Number(strNum); i++) {
        str += i;
    }
    return str
}

loopNums('11')