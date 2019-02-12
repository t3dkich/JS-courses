class PublicTransportTable {
    constructor(town) {
        PublicTransportTable.changeHeaderName(town)
        this.addEventListeners()
    }

    static changeHeaderName(town) {
        $('caption').text(`${town}\'s Public Transport`)
    }

    addVehicle(obj) {
        let oneZero = 0 % 2
        let vehicleInfo = $('.vehicles-info')
        let moreInfo = $('<tr class="more-info"></tr>')
            .append($('<td colspan="3"></td>')
                .append($('<table></table>')
                    .append($('<tbody></tbody>')
                        .append($(`<tr><td>Route: ${obj.route}</td></tr>`))
                        .append($(`<tr><td>Price: ${obj.price}</td></tr>`))
                        .append($(`<tr><td>Driver: ${obj.driver}</td></tr>`)))))
        let mainTemplate = $('<tr class="hide-info">')
            .append($('<td></td>').text(obj.type))
            .append($('<td></td>').text(obj.name))
            .append($('<td></td>')
                .append($('<button>More Info</button>')
                    .on('click', (ev) => {
                        ++oneZero
                        if (oneZero % 2 === 1) {
                            $(ev.target).text('Less Info')
                            moreInfo.insertAfter($(ev.target).parent().parent())
                        } else {
                            $(ev.target).text('More Info')
                            moreInfo.remove()
                        }
                    })))
        vehicleInfo.append(mainTemplate)
    }

    addEventListeners() {
        let type = $('input[name="type"]')
        let name = $('input[name="name"]')
        $('.search-btn').on('click', () => {
            $('.vehicles-info tr').not('.more-info').toArray().forEach(e => $(e).show())
            let patternType = new RegExp(type.val())
            let patternName = new RegExp(name.val())
            let allTypes = $('.vehicles-info tr td:nth-child(1)').toArray().map(e=>$(e).text())
            let allNames = $('.vehicles-info tr td:nth-child(2)').toArray().map(e=>$(e).text())
            if (type.val() || name.val()) {
                allTypes.forEach((e, i) => {
                    if (!patternType.test(e)) {
                        let button = $('.vehicles-info tr td:nth-child(3) button').toArray()[i]
                        if ($(button).text() === 'Less Info') {
                            $(button).click()
                        }
                        $($('.vehicles-info > tr').toArray()[i]).hide()
                    }
                })
                allNames.forEach((e, i) => {
                    if (!patternName.test(e)) {
                        let button = $('.vehicles-info tr td:nth-child(3) button').toArray()[i]
                        if ($(button).text() === 'Less Info') {
                            $(button).click()
                        }
                        $($('.vehicles-info > tr').toArray()[i]).hide()
                    }
                })
            }
        })
        $('.clear-btn').on('click', () => {
            type.val('')
            name.val('')
            $('.vehicles-info tr').toArray().forEach(e => $(e).show())
        })
    }
}