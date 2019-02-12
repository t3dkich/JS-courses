function solve(num) {
    let pattern = 'ATCGTTAGGG'
    let pattINdex = 0
    for (let i = 0; i < num; i++) {
        let index = i % 4
        pattINdex = pattINdex > 8 ? 0 : pattINdex
        draw(index)
    }

    function draw(i) {
        zero(i)
        oneThee(i)
        two(i)
    }

    function zero(i) {
        if (i === 0) {
            console.log(`**${pattern[pattINdex++]}${pattern[pattINdex++]}**`)
        }
    }

    function oneThee(i) {
        if (i === 1 || i === 3) {
            console.log(`*${pattern[pattINdex++]}--${pattern[pattINdex++]}*`)
        }
    }

    function two(i) {
        if (i === 2) {
            console.log(`${pattern[pattINdex++]}----${pattern[pattINdex++]}`)
        }
    }


}

