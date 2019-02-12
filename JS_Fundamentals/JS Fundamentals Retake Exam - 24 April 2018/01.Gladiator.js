function solve(losses, helm, sword, shield, armor) {
    let helmPrice = 0
    let swordPrice = 0
    let shieldPrice = 0
    let armorPrice = 0
    let shieldCound = 0
    for (let i = 1; i <= losses; i++) {
        if (i % 2 === 0) {
            helmPrice += helm
        }
        if (i % 3 === 0) {
            swordPrice += sword
        }
        if (i % 2 === 0 && i % 3 === 0) {
            shieldPrice += shield
            shieldCound++
        }
        if (shieldCound === 2) {
            shieldCound = 0
            armorPrice += armor
        }
    }
    let all = +helmPrice + swordPrice + shieldPrice + +armorPrice
    console.log(`Gladiator expenses: ${Number.parseFloat(all).toFixed(2)} aureus`);
}

solve(23,
12.50,
21.50,
40,
200)