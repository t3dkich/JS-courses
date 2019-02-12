function attachEvents() {
    let url = 'https://phonebook-nakov.firebaseio.com/phonebook'
    let loadBtn = $('#btnLoad')
    let createBtn = $('#btnCreate')
    let phonebook = $('#phonebook')

    createBtn.on('click', () => {
        let person = $('#person')
        let phone = $('#phone')
        $.ajax({
            method: 'POST',
            url: url + '.json',
            data: JSON.stringify({
                person: person.val(),
                phone: phone.val()
            })
        })
        phone.val('')
        person.val('')
    })

    loadBtn.on('click', () => {
        phonebook.empty()
        $.ajax({
            url: url + '.json'
        }).then((phones) => {
            for (let phone in phones) {
                let li = $('<li>')
                    .text(`${phones[phone].person}: ${phones[phone].phone}`)
                let button = $('<button>').text('[Delete]')
                button.on('click', (event) => {
                    let currentEvent = $(event.target).parent()
                    $.ajax({
                        method: 'DELETE',
                        url: url + '/' + phone + '.json'
                    }).then((ph) => {
                        currentEvent.remove()
                    })
                })
                li.append(button)
                phonebook.append(li)
            }
        })
    })
}