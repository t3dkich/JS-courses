class Textbox {
    constructor(elements, invalidSymbols) {
        this._elements = $(elements)
        this.value = ''
        this._invalidSymbols = invalidSymbols
        this.onInput()
    }

    get value() {
        return this._value
    }

    set value(value) {
        this._value = value
        for (let el of this._elements) {
            $(el).val(value)
        }
    }

    get elements() {
        return this._elements
    }

    onInput() {
        this.elements.on('input', (event) => {
            this.value = $(event.target).val()
        })
    }

    isValid() {
        return !this._invalidSymbols.test(this.value)
    }


}

let textbox = new Textbox('.textbox', /[^a-zA-Z0-9]/)
let inputs = $('.textbox')
inputs.on('input', function () {
    console.log(textbox.value);
});