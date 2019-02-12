class InstanceValidation {
    constructor(clientId, email, firstName, lastName ) {
        this.clientId = clientId
        this.email = email
        this.firstName = firstName
        this.lastName = lastName
    }
    get clientId(){
        return this._clientId
    }
    set clientId(id){
        if (!/^[0-9]{6}$/.test(id) || typeof id !== 'string') {
            throw new TypeError('Client ID must be a 6-digit number')
        }
        this._clientId = id
    }
    get email(){
        return this._email
    }
    set email(email) {
        if(!/[a-zA-Z0-9]+@[a-zA-Z.]+/.test(email)) {
            throw new TypeError('Invalid e-mail')
        }
        this._email = email
    }
    get firstName() {
        return this._firstName
    }
    set firstName(firstName) {
        if(firstName.length < 3 || firstName.length > 20){
            throw  new TypeError('First name must be between 3 and 20 characters long')
        }
        if(!/[A-Za-z]{3,20}/.test(firstName)) {
            throw new TypeError('First name must contain only Latin characters')
        }
        this._firstName = firstName
    }
    get lastName() {
        return this._lastName
    }
    set lastName(lastName) {
        if(lastName.length < 3 || lastName.length > 20){
            throw  new TypeError('Last name must be between 3 and 20 characters long')
        }
        if(!/[A-Za-z]{3,20}/.test(lastName)) {
            throw new TypeError('Last name must contain only Latin characters')
        }
        this._lastName = lastName
    }
}

let acc = new InstanceValidation('423414', 'petkan@another.co.uk', 'Петкан', 'Draganov')
