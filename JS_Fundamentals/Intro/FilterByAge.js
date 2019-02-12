function filterAge(minAge, firstPerson, firstAge, secondPerson, secondAge) {
    let person1 = {
        name: firstPerson,
        age: firstAge
    }
    let person2 = {
        name: secondPerson,
        age: secondAge
    }

    if (person1.age >= minAge) console.log(person1)
    if (person2.age >= minAge) console.log(person2)
}