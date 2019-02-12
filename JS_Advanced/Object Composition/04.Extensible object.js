function solve() {
    let myObj = {
        extend: (template) => {
            for (let key in template) {
                if (typeof template[key] !== "function") {
                    myObj[key] = template[key]
                } else {
                    Object.getPrototypeOf(myObj)[key] = template[key]
                }
            }
        }
    }
    return myObj
    // let template = {
    //     extensionMethod: function () {
    //         console.log("From extension method")
    //     },
    //     drugmetod: 'neshto'
    // };
    // myObj.extend(template)
    // console.log(myObj);
}
solve()