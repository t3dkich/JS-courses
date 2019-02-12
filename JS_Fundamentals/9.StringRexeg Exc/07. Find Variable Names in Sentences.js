function solve(string) {
    console.log(string.match(/\b_[a-zA-Z0-9]+\b/g).map(e => e.substring(1)).join(','));
}

solve('The _id and _age variables are both integers.')