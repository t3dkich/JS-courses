function solve(text) {
    let pattern = /[\s()\t\n;.,'' ]+/gm;
    let result = text.split(pattern);

    console.log(result.join("\n"));
}
solve('let sum = 4 * 4,b = "wow";')