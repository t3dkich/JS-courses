function attachEvents() {
    let url = 'https://messenger-90673.firebaseio.com/.json'
    let submit = $('#submit')
    let refresh = $('#refresh')
    submit.on('click', ()=>{
        let author = $('#author')
        let content = $('#content')
        if (author !== '' && content !== '') {
            let timestamp = Date.now()
            $.ajax({
                method: 'POST',
                url,
                data: JSON.stringify({
                    author: author.val(),
                    content: content.val(),
                    timestamp
                })
            })
            author.val('')
            content.val('')
        }
    })
    refresh.on('click', ()=>{
        let messagesBox = $('#messages')
        $.ajax({
            method: 'GET',
            url
        }).then((messages)=>{
            let text
            for (let message in messages) {
                text += `${messages[message].author}: ${messages[message].content}\n`
            }
            messagesBox.text(text)
        })
    })

}