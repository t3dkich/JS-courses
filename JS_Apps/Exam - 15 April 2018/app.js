$(()=>{
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs')

        this.get('index.html', routing.welcomePage)

        this.post('#/register', routing.register)
        this.post('#/login', routing.login)
        this.get('#/logout', routing.logout)
        this.get('#/homepage', routing.homePage)
        this.post('#/create', entriesServices.create)
        this.get('#/delete/entry/:id', entriesServices.remove)
        this.post('#/commit', receiptService.commit)
        this.get('#/overview', routing.overview)
        this.get('#/details/:id', routing.details)
    })
    app.run()
})