const entriesServices = (() => {
    function remove(ctx) {
        let entryId = ctx.params.id
        let endpoint = `entries/${entryId}`
        remote.remove('appdata', endpoint, 'kinvey')
            .then(()=>{
                ctx.redirect('#/homepage')
            })
    }

    function create(ctx) {
        let name = ctx.params.name
        let quantity = +ctx.params.quantity
        let price = +ctx.params.price
        let receiptId = ctx.params.receiptId
        if (name === '' || quantity === '' || price === '') {
            notify.showError('Invalid entry')
        } else {
            let data = {
                name: name,
                quantity: quantity.toFixed(2),
                price: price.toFixed(2),
                receiptId}
            remote.post('appdata', 'entries', 'kinvey', data)
                .then(()=>{
                    notify.showInfo('Successful added item')
                    ctx.redirect('#/homepage')
                })
        }
    }

    function getEntriesByReceiptId(receiptId) {
        let endpoint = `entries?query={"receiptId":"${receiptId}"}`
        return remote.get('appdata', endpoint, 'kinvey')
    }

    return {
        create,
        getEntriesByReceiptId,
        remove
    }
})()