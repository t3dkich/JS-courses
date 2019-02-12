function countLetter(word, letter) {
    let count = 0;
    word = word.split('');
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            count++;
        }
    }
    return count;
}

countLetter('hello', 'l')