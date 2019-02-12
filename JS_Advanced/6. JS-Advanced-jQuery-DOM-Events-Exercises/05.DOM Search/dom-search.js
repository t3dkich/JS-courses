function domSearch(selector, isSensitive) {
    let content = $(selector).addClass('items-control')
    let addControls = $('<div class="add-controls">')
        .append($('<label>Enter Text: </label>')
            .append($('<input>')))
        .append($('<a class="button" style="display: inline-block">Add</a>'))
        .appendTo(content)
    let searchControls = $('<div class="search-controls">')
        .append($('<label>Search: </label>')
            .append($('<input>')))
        .appendTo(content)
    let resultControls = $('<div class="result-controls">')
        .append($('<ul class="items-list">'))
        .appendTo(content)
    let ul = $('.items-list')
    $('.button').on('click', function () {
        let addInput = $('.add-controls input').val()
        let newItem = $('<li class="list-item">')
            .append($('<a class="button">X</a>').on('click', deleteItem))
            .append($(`<strong>${addInput.trim()}</strong>`))
        ul.append(newItem)
        clear()
    })
    function clear() {
        $('.add-controls input').val('')
        $('.search-controls input').val('')
    }

    function deleteItem() {
        $(this).parent().remove()
    }

    $('.search-controls input').on('change', function () {
        let target = $(this).val()
        if (target !== '') {
            if (isSensitive) {
                $(`.list-item:not(:contains(${target}))`)
                    .css('display', 'none')
            } else {
                let itemsArr = $('.list-item strong').toArray()
                itemsArr.forEach(e => {
                    if (e.textContent.toLowerCase() !== target.toLowerCase()) {
                        $(e).parent().hide()
                    }
                })
            }

        } else {
            $('.list-item').show()
        }

    })


}