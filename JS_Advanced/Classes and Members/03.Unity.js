class Rat {
    constructor(name) {
        this.name = name
        this.unitedRats = []
    }
    unite(newRat) {
        if (newRat instanceof Rat)
        this.unitedRats.push(newRat)
    }
    getRats(){
        return this.unitedRats
    }
    toString(){
        let result = `${this.name}\n`
        this.unitedRats.forEach(e=>{
            result += `##${e}\n`
        })
        return result
    }
}