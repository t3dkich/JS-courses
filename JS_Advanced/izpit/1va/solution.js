function addSticker() {
    let title = $('.title')
    let content = $('.content')
    let stickerList = $('#sticker-list')
    if(title.val() !== '' && content.val() !== '') {
        let element = $('<li class="note-content">')
            .append($('<a class="button">x</a>'))
            .append($(`<h2>${title.val()}</h2>`))
            .append($('<hr>'))
            .append($(`<p>${content.val()}</p>`))
        stickerList.append(element)
        title.val('')
        content.val('')
    }
    $('.button').on('click', (event) => {
        $(event.target).parent().remove()
    })

}

