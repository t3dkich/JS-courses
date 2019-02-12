function LongestWord(sen) {
    return sen.split('').map(e => String.fromCharCode(e.charCodeAt(0)+1)).join('')



}

// keep this function call here
console.log(LongestWord("sentence"));