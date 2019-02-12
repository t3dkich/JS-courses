const receiptService = (() => {
    function commit(ctx) {
        let endpoint = `receipts/${ctx.params.receiptId}`
        let count = +ctx.params.productCount
        let total = +ctx.params.total
        if (count !== 0) {
            let data = {
                "active": false,
                "productCount": count,
                "total": total.toFixed(2)
            }
            remote.update('appdata', endpoint, 'kinvey', data)
                .then(()=>{
                    notify.showInfo('Successful checkout')
                    ctx.redirect('#/homepage')
                })
        } else {
            notify.showError('Must be at least 1 entry')
        }


    }

    function getUserActive() {
        let id = sessionStorage.getItem('userId')
        let endpoint = `receipts?query={"_acl.creator":"${id}","active":"true"}`
        return remote.get('appdata', endpoint, 'kinvey')
    }

    function create() {
        let endpoint = 'receipts'
        let data = {
            "active": true,
            "productCount": 0,
            "total": 0
        }
        return remote.post('appdata', endpoint, 'kinvey', data)
    }

    return {getUserActive, create, commit}
})()