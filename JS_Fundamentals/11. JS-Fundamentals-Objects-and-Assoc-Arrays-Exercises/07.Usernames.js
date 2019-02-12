function solve(arr) {
    let after = arr.filter(onlyUnique).sort(byLenghtThenAlphabetticaly)
    console.log(after.join('\n'))


    function byLenghtThenAlphabetticaly(a, b) {
        if (a.length === b.length) {
            return a.localeCompare(b)
        }
        return a.length - b.length
    }
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

}

solve(['Ashton',

    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston','Ashton'])