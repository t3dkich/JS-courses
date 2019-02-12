function solve(arr) {
    let mainMap = new Map()
    for (let string of arr) {
        let [system, component, subcomponent] = string.split(' | ')
        if (!mainMap.get(system)) {
            mainMap.set(system, new Map())
            mainMap.get(system).set(component, [])
        } else if (!mainMap.get(system).get(component)) {
            mainMap.get(system).set(component, [])
        }
        mainMap.get(system).get(component).push(subcomponent)
    }


    let sortedMainKeys = Array.from(mainMap.keys()).sort((a,b) => {
        if (mainMap.get(a).size < mainMap.get(b).size) {
            return 1
        } else if (mainMap.get(a).size > mainMap.get(b).size) {
            return -1
        } else {
            if (a.localeCompare(b)) {
                return -1
            } else if (b.localeCompare(a)) {
                return 1
            } else {
                return 0
            }
        }
    })

    for (let system of sortedMainKeys) {
        console.log(system)
        let sortedComponents = Array.from(mainMap.get(system).keys()).sort((a,b) => {
            if (mainMap.get(system).get(a).length < mainMap.get(system).get(b).length) {
                return 1
            } else if (mainMap.get(system).get(a).length > mainMap.get(system).get(b).length) {
                return -1
            } else {
                return 0
            }
        })
        for (let component of sortedComponents) {
            console.log(`|||${component}`)
            for (let subcomponent of mainMap.get(system).get(component)) {
                console.log(`||||||${subcomponent}`)
            }
        }
    }
}

solve(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security'])