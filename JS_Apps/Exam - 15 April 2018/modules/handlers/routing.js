const routing = (() => {
    async function details(ctx) {
        let id = ctx.params.id
        let entries = await entriesServices.getEntriesByReceiptId(id)
        entries.forEach(e => {
            e['subtotal'] = (e.price * e.quantity).toFixed(2)
        })
        ctx.entries = entries
        ctx.loadPartials({
            navigation: 'templates/common/navigation.hbs',
            entry2: 'templates/userReceipts/entry2.hbs',
            footer: 'templates/common/footer.hbs'
        }).then(function () {
            this.partial('templates/userReceipts/details.hbs')
        })
    }

    async function overview(ctx) {
        let id = sessionStorage.getItem('userId')
        let endpoint = `receipts?query={"_acl.creator":"${id}","active":"false"}`
        let receipts = await remote.get('appdata', endpoint, 'kinvey')
        receipts.forEach(e => {
            e['date'] = new Date(e._kmd.ect).toDateString()
        })
        ctx.receipts = receipts
        ctx.loadPartials({
            navigation: 'templates/common/navigation.hbs',
            entry: 'templates/userReceipts/entry.hbs',
            footer: 'templates/common/footer.hbs'
        }).then(function () {
            this.partial('templates/userReceipts/receiptsBody.hbs')
        })
    }

    async function homePage(ctx) {
        ctx.username = sessionStorage.getItem('username')
        let [current] = await receiptService.getUserActive(sessionStorage.getItem('userId'))
        if (!current) current = await receiptService.create()
        ctx.receiptId = current._id
        ctx.entries = await entriesServices.getEntriesByReceiptId(ctx.receiptId)
        let total = 0
        ctx.entries.forEach(e => {
            e['subtotal'] = (e.price * e.quantity).toFixed(2)
            total += +e['subtotal']
        })
        ctx.count = ctx.entries.length
        ctx.total = total
        ctx.loadPartials({
            navigation: 'templates/common/navigation.hbs',
            entry: 'templates/homePage/entry.hbs',
            footer: 'templates/common/footer.hbs'
        }).then(function () {
            this.partial('templates/homePage/receiptView.hbs')
        })
    }

    function logout(ctx) {
        auth.logout()
            .then(function () {
                notify.showInfo('Successful logout')
                sessionStorage.clear()
                ctx.loadPartials({
                    login: 'templates/auth/login.hbs',
                    register: 'templates/auth/register.hbs',
                }).then(function () {
                    this.partial('templates/welcomePage.hbs')
                })
            })
            .catch(notify.handleError)
    }

    function login(ctx) {
        const username = ctx.params.username
        const password = ctx.params.password

        auth.login(username,password)
            .then(function (data) {
                notify.showInfo('Successful login')
                auth.saveSession(data)
                ctx.redirect('#/homepage')
            })
            .catch(notify.handleError)
    }

    function register(ctx) {
        const username = ctx.params.username
        const password = ctx.params.password
        const passwordCheck = ctx.params.passwordCheck

        if (username === '') {
            notify.showError('Invalid username')
        } else if (password === '') {
            notify.showError('Invalid password')
        } else if (passwordCheck !== password) {
            notify.showError('Password do not match')
        } else {
            auth.register(username, password)
                .then(function (data) {
                    notify.showInfo('Successful register')
                    auth.saveSession(data)
                    ctx.redirect('#/homepage')
                })
                .catch(notify.handleError)
        }
    }

    function welcomePage(ctx) {
        if (auth.isAuth()) {
            ctx.redirect('#/homepage')
        } else {
            ctx.loadPartials({
                login: 'templates/auth/login.hbs',
                register: 'templates/auth/register.hbs',
            }).then(function () {
                this.partial('templates/welcomePage.hbs')
            })
        }

    }

    return {
        welcomePage,
        register,
        login,
        homePage,
        logout,
        overview,
        details
    }
})()