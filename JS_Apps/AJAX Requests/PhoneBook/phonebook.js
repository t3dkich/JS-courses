const BASE_URL = 'https://phonebook-a82af.firebaseio.com/phonebook'
const TABLE = $('#phonebook')
const NAME = $('#person')
const PHONE = $('#phone')

$('#btnLoad').on('click', loadContacts)
$('#btnCreate').on('click', createContacts)

function loadContacts() {
    TABLE.empty()
    $.ajax({
        method: 'GET',
        url: BASE_URL + '.json'
    }).then(appendContacts)
        .catch(handleError)
}

function handleError(er) {
    console.log(er);

}

function appendContacts(contacts) {
    console.log(contacts);
    let sorted = Object.keys(contacts).sort((a,b) => {
        console.log(contacts[a]);
        return contacts[a].name.localeCompare(contacts[b].name)
    })
    for (let key of sorted) {
        let li = $(`<li>`)
        li.text(`${contacts[key].name}: ${contacts[key].phone}`)
        let a = $('<button>[Delete]</button>')
        a.on('click', () => {
            $.ajax({
                method: 'DELETE',
                url: BASE_URL + '/' + key + '.json'
            }).then((req)=>{
                li.remove()
            }).catch(handleError)
        })
        li.append(a)
        TABLE.append(li)
    }
}

function createContacts() {
    let name = NAME.val()
    let phone = PHONE.val()
    $.ajax({
        method: 'POST',
        url: BASE_URL + '.json',
        data: JSON.stringify({name,phone})
    }).then((req)=>{
        NAME.val('')
        PHONE.val('')
        console.log(req);})
        .catch(handleError)
}