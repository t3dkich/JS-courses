$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs')

        this.get('#/home', getWelcomePage)
        this.get('index.html', getWelcomePage)

        this.get('#/register', getRegister)
        this.post('#/register', postRegisterForm)
        this.get('#/login', getLogin)
        this.post('#/login', postLoginForm)
        this.get('#/logout', postLogout)
        this.post('#/createFlight', postCreateForm)
        this.get('#/createFlight', getCreateFlight)
        this.get('#/flightDetails/:_id', getDetails)
        this.get('#/edit/:_id', getEdit)
        this.get('#/edit/post/:_id', postEdit)
        this.get('#/myFlights', getMyFlights)
        this.get('#/delete/:id', postDeleteFlight)

        function postDeleteFlight(ctx) {
            let endpoint = ctx.params.id
            remote.remove('appdata', 'flights/'+endpoint, 'kinvey')
                .then(()=>{
                    ctx.redirect('#/myFlights')
                    notify.showInfo('Flight deleted')
                })
        }

        async function getMyFlights(ctx) {
            let userId = sessionStorage.getItem('userId')
            let resp = await flightService.userAdded(userId)
            ctx.usr = sessionStorage.getItem('username')
            ctx.isAuth = auth.isAuth()
            ctx.resp = resp
            ctx.loadPartials({
                navigation: 'templates/navigation.hbs',
                authorSingle: 'templates/authorSingle.hbs',
                footer: 'templates/footer.hbs'
            }).then(function () {
                this.partial('templates/myFlightsView.hbs')
            })
        }
        
        function postEdit(ctx) {
            let id = ctx.params._id
            let data = {
                cost: ctx.params.cost,
                depDate : ctx.params.departureDate,
                depTime : ctx.params.departureTime,
                dest : ctx.params.destination,
                img : ctx.params.img,
                origin : ctx.params.origin,
                seats : ctx.params.seats,
                isPublic: window.isPublic
            }
            flightService.edit(id,data)
                .then((resp)=>{
                    console.log(resp);
                    ctx.redirect('#/home')
                })
        }

        async function getEdit(ctx) {
            let id = ctx.params._id
            let flight = await flightService.getbyId(id)
            window.isPublic = flight.isPublic
            ctx._id = id
            ctx.isPublic = flight.isPublic
            ctx.cost = flight.cost
            ctx.depTime = flight.depTime
            ctx.depDate = flight.depDate
            ctx.dest = flight.dest
            ctx.img = flight.img
            ctx.origin = flight.origin
            ctx.seats = flight.seats
            ctx.isAuth = auth.isAuth()
            ctx.usr = sessionStorage.getItem('username')
            ctx.loadPartials({
                navigation: 'templates/navigation.hbs',
                footer: 'templates/footer.hbs'
            }).then(function () {
                this.partial('templates/editFlightView.hbs')
            })
        }

        async function getDetails(ctx) {
            let id = ctx.params._id
            let flight = await flightService.getbyId(id)
            ctx.isAuthor = flight._acl.creator === sessionStorage.getItem('userId')
            ctx._id = id
            ctx.cost = flight.cost
            ctx.depTime = flight.depTime
            ctx.depDate = flight.depDate
            ctx.dest = flight.dest
            ctx.img = flight.img
            ctx.origin = flight.origin
            ctx.seats = flight.seats
            ctx.isAuth = auth.isAuth()
            ctx.usr = sessionStorage.getItem('username')
            ctx.loadPartials({
                navigation: 'templates/navigation.hbs',
                footer: 'templates/footer.hbs'
            }).then(function () {
                this.partial('templates/flightDetailsView.hbs')
            })
        }

        function postCreateForm(ctx) {
            let cost = ctx.params.cost
            let depDate = ctx.params.departureDate
            let depTime = ctx.params.departureTime
            let dest = ctx.params.destination
            let img = ctx.params.img
            let origin = ctx.params.origin
            let seats = ctx.params.seats
            let isPublic = ctx.target[7].checked
            flightService.create(cost,
                depTime,
                depDate,
                dest,
                img,
                origin,
                isPublic,
                seats).then((flightData) => {
                ctx.redirect('#/home')
            }).catch(notify.handleError)
        }

        function getCreateFlight(ctx) {
            ctx.isAuth = auth.isAuth();
            ctx.usr = sessionStorage.getItem('username')
            ctx.loadPartials({
                navigation: 'templates/navigation.hbs',
                footer: 'templates/footer.hbs'
            }).then(function () {
                this.partial('templates/addFlightView.hbs')
            })
        }

        function postLogout(ctx) {
            let username = sessionStorage.getItem('username')
            auth.logout()
                .then(() => {
                    sessionStorage.clear()
                    notify.showInfo(`User "${username}" logout successful`)
                    ctx.redirect('#/home')
                })
        }

        function postLoginForm(ctx) {
            let username = ctx.params.username
            let pass = ctx.params.pass
            auth.login(username, pass)
                .then((usrData) => {
                    auth.saveSession(usrData)
                    notify.showInfo(`User "${username}" login successful`)
                    ctx.redirect('#/home')
                })
                .catch(notify.handleError)
        }

        function postRegisterForm(ctx) {
            let username = ctx.params.username
            let pass = ctx.params.pass
            let checkPass = ctx.params.checkPass
            if (!/[a-zA-Z]{5,}/.test(username)) {
                notify.showError('Username must be at least 5 chars long')
            } else if (pass === '') {
                notify.showError('Password should not be empty')
            } else if (pass !== checkPass) {
                notify.showError('Password fields must match')
            } else {
                auth.register(username, pass)
                    .then((usrData) => {
                        auth.saveSession(usrData)
                        notify.showInfo('User registration successful.')
                        ctx.redirect('#/home')
                    })
                    .catch(notify.handleError)
            }
        }

        function getLogin(ctx) {
            ctx.isAuth = auth.isAuth()
            ctx.loadPartials({
                navigation: 'templates/navigation.hbs',
                footer: 'templates/footer.hbs'
            }).then(function () {
                this.partial('templates/loginView.hbs')
            })
        }

        function getRegister(ctx) {
            ctx.isAuth = auth.isAuth()
            ctx.loadPartials({
                navigation: 'templates/navigation.hbs',
                footer: 'templates/footer.hbs'
            }).then(function () {
                this.partial('templates/registerView.hbs')
            })
        }

        async function getWelcomePage(ctx) {
            ctx.isAuth = auth.isAuth()
            ctx.usr = sessionStorage.getItem('username')
            if (auth.isAuth()) ctx.flightsList = await flightService.getPublic()
            ctx.loadPartials({
                navigation: 'templates/navigation.hbs',
                catalogView: 'templates/catalogView.hbs',
                singleFlight: 'templates/singleFlight.hbs',
                footer: 'templates/footer.hbs'
            }).then(function () {
                this.partial('templates/homeView.hbs')
            })
        }
    })
    app.run()
})