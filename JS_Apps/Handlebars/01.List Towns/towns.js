function attachEvents() {
    let root = $('#root')
    $('#btnLoadTowns').on('click', ()=>{
        let towns = $('#towns').val().split(', ')
        let source = $('#handlebars-template').text()
        let template = Handlebars.compile(source)
        let ctx = {towns}
        root.append(template(ctx))
    })
}