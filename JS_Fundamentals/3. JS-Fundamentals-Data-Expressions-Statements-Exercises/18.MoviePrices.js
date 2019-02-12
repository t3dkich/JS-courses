function solve(arr) {
    let movie = arr[0].toLowerCase();
    let day = arr[1].toLowerCase()
    let movies = ['the godfather', "schindler's list", 'casablanca', 'the wizard of oz']
    let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

    switch (movie) {
        case movies[0]:
            switch (day) {
                case days[0]:
                    return 12
                case days[1]:
                    return 10
                case days[2]:
                    return 15
                case days[3]:
                    return 12.5
                case days[4]:
                    return 15
                case days[5]:
                    return 25
                case days[6]:
                    return 30
                default:
                    return 'error'
            }
        case movies[1]:
            switch (day) {
                case days[0]:
                    return 8.5
                case days[1]:
                    return 8.5
                case days[2]:
                    return 8.5
                case days[3]:
                    return 8.5
                case days[4]:
                    return 8.5
                case days[5]:
                    return 15
                case days[6]:
                    return 15
                default:
                    return 'error'
            }
        case movies[2]:
            switch (day) {
                case days[0]:
                    return 8
                case days[1]:
                    return 8
                case days[2]:
                    return 8
                case days[3]:
                    return 8
                case days[4]:
                    return 8
                case days[5]:
                    return 10
                case days[6]:
                    return 10
                default:
                    return 'error'
            }
        case movies[3]:
            switch (day) {
                case days[0]:
                    return 10
                case days[1]:
                    return 10
                case days[2]:
                    return 10
                case days[3]:
                    return 10
                case days[4]:
                    return 10
                case days[5]:
                    return 15
                case days[6]:
                    return 15
                default:
                    return 'error'
            }
        default:
            return 'error'


    }
}

console.log(solve(['Casablanca', 'dsadsa']));