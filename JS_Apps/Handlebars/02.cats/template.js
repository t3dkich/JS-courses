$(() => {
    (async function renderCatTemplate() {
        let html = await $.get('template.hbs')
        let template = Handlebars.compile(html)
        let ctx = {cats: window.cats}
        $('#allCats').append(template(ctx))
        $('.btn-primary').on('click', (ev)=>{
            $(ev.target).next().toggle()
        })
    })()


})
