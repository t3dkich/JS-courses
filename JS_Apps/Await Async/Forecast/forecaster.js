function attachEvents() {
    let location = $('#location')
    let btn = $('#submit')
    btn.on('click', ()=>{
        let url = 'https://judgetests.firebaseio.com/locations.json'
        $.ajax({url}).then((res)=>{
            let placeCode = ''
            for (let place of res) {
                if (place.name === location.val()) {
                    placeCode = place.code
                    break;
                }
            }
            if (placeCode !== '') {
                let urlDayWeather = `https://judgetests.firebaseio.com/forecast/today/${placeCode}.json`
                $.ajax({
                    url: urlDayWeather
                }).then((resp)=>{
                    let respConditions = resp.forecast.condition
                    let respName = resp.name
                    let [high,low] = [resp.forecast.high, resp.forecast.low]
                    let afterDiv = $('#current div').eq(0)
                    let forecast = $('#forecast')
                    forecast.show()
                    let current = $('#current')
                    current.empty()
                    current.append(afterDiv)
                    let icon = $(`<span>${conditionType(respConditions)}</span>`)
                        .addClass('condition symbol')
                    let conditionsSpan = $('<span>').addClass('condition')
                    let name = $('<span class="forecast-data">')
                        .text(resp.name)
                    let decrees = $(`<span class="forecast-data">${low}&#176;/${high}&#176;</span>`)
                    let typeWeather = $(`<span class="forecast-data">${respConditions}</span>`)
                    conditionsSpan.append(name)
                    conditionsSpan.append(decrees)
                    conditionsSpan.append(typeWeather)
                    icon.insertAfter(afterDiv)
                    conditionsSpan.insertAfter(icon)
                    $.ajax({
                        url: `https://judgetests.firebaseio.com/forecast/upcoming/${placeCode}.json `
                    }).then((succ)=>{
                        let firstDiv = $('#upcoming div').eq(0)
                        let upcomingDiv = $('#upcoming')
                        upcomingDiv.empty()
                        upcomingDiv.append(firstDiv)
                        for (let day of succ.forecast) {
                            console.log(day);
                            let dayType = conditionType(day.condition)
                            let dayHigh = day.high
                            let dayLow = day.low
                            let iconNew = $(`<span class="symbol">${dayType}</span>`)
                            let daysCondition = $(`<span class="forecast-data">${day.condition}</span>`)
                            let decrees = $(`<span class="forecast-data">${dayLow}&#176;/${dayHigh}&#176;</span>`)
                            let spanUpcoming = $('<span class="upcoming">')
                            spanUpcoming.append(iconNew)
                            spanUpcoming.append(decrees)
                            spanUpcoming.append(daysCondition)
                            upcomingDiv.append(spanUpcoming)

                        }
                    })
                 })
            } else {
                let upcoming = $('#forecast')
                upcoming.show()
                let div = $('<div>').text('Error')
                upcoming.empty().append(div)

            }
        })
    })

    function conditionType(type) {
        switch (type) {
            case 'Sunny': return '&#x2600;'
            case 'Partly sunny': return '&#x26C5;'
            case 'Overcast': return '&#x2601;'
            case 'Rain': return '&#x2614;'
        }
    }
}