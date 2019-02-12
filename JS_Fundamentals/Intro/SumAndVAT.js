function sumAndVat(arr) {
    let sum = 0;
    for (let value of arr) {
        sum += Number(value);
    }
    let vat = sum * 0.2;
    let total = sum * 1.2;
    return `sum = ${sum}
            VAT = ${vat}
            total = ${total}`
}