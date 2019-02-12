function result() {
    let argsCount = {}
    for (let arg of arguments) {
        console.log(`${typeof arg}: ${arg}`);
        if (!argsCount[typeof arg]) {
            argsCount[typeof arg] = 0
        }
        argsCount[typeof arg]++
    }
    Object.keys(argsCount).sort((a,b) => {
        return argsCount[b] - argsCount[a]
    }).forEach(e => {
        console.log(`${e} = ${argsCount[e]}`);
    })

}
result('cat', 42,42, function () { console.log('Hello world!'); });
