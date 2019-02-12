function createBook(selector, title, author, isbn) {
    let bookGenerator = (function () {
        let id = 1
        return function (selector, title, author, isbn) {
            let wrapper = $(selector)
            let div = $('<div>').attr('id', `book${id}`).css('border', 'none')
            $('<p class="title"></p>').text(`${title}`).appendTo(div)
            $('<p class="author"></p>').text(`${author}`).appendTo(div)
            $('<p class="isbn"></p>').text(`${isbn}`).appendTo(div)
            $('<button>').text('Select').on('click', select).appendTo(div)
            $('<button>').text('Deselect').on('click', deselect).appendTo(div)
            wrapper.append(div)
            function select() {
                div.css('border', '2px solid blue')
            }
            function deselect() {
                div.css('border', 'none')
            }
            id++
        }
    }())
    bookGenerator(selector, title, author, isbn)

}