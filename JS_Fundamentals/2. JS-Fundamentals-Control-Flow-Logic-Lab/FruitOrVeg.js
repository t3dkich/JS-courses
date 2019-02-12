function solve(str) {
    let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach']
    let vegies = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley']

    for (let fruit of fruits) {
        if (fruit === str){ return 'fruit' }
    }
    for (let vegy of vegies) {
        if (vegy === str) { return 'vegetable' }
    }
    return 'unknown'
}

console.log(solve('banana'));
