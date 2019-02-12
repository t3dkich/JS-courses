function solve() {
    let pattern = /\(.+\)/g
    let text = 'rakiq (Bulgarian brandy) nqkvi drugi tapni tam.\n' +
        '        oshte malko (alcoholic drink) piini da ima basi!\n' +
        '        i pushenka malko :D:D (even apples) '
    let match = text.match(pattern)
    console.log(match);
}
solve()