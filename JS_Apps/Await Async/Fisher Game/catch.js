function attachEvents() {
    const BASE_URL = 'https://baas.kinvey.com/appdata/kid_r1YixZHEX/biggestCatches'
    const HANDSHAKE = {'Authorization': 'Basic ' + btoa('guest:guest')}
    $('.add').on('click', () => {
        $.ajax({
            method: 'POST',
            url: BASE_URL,
            headers: HANDSHAKE,
            data: takeData()
        }).then(()=>{
            $('.load').trigger('click')
        })
        $('#addForm input').val('')
    })

    $('.load').on('click', () => {
        $.ajax({
            url: BASE_URL,
            headers: HANDSHAKE
        }).then((list) => {
            createCatches(list)
        })
    })

    function createCatches(list) {
        let catches = $('#catches')
        catches.empty()
        list.forEach(oneCatch=>{
            let form = $('<div class="catch">')
                .attr('data-id', `${oneCatch._id}`)
                .append($('<label>').text('Angler'))
                .append($('<input type="text" class="angler">').val(oneCatch.angler))
                .append($('<label>').text('Weight'))
                .append($('<input type="number" class="weight">').val(oneCatch.weight))
                .append($('<label>').text('Species'))
                .append($('<input type="text" class="species">').val(oneCatch.species))
                .append($('<label>').text('Location'))
                .append($('<input type="text" class="location">').val(oneCatch.location))
                .append($('<label>').text('Bait'))
                .append($('<input type="text" class="bait">').val(oneCatch.bait))
                .append($('<label>').text('Capture Time'))
                .append($('<input type="number" class="captureTime">').val(oneCatch.captureTime))
                .append($('<button class="update">').text('Update').on('click', putChange))
                .append($('<button class="delete">').text('Delete').on('click', deleteItem))
            catches.append(form)
        })
    }
    
    function deleteItem() {
        let currentDiv = $(this).parent()
        $.ajax({
            method: 'DELETE',
            url: BASE_URL + `/${currentDiv.attr('data-id')}`,
            headers: HANDSHAKE
        })
        currentDiv.remove()
    }
    
    function putChange() {
        let currentDiv = $(this).parent()
        let form = []
        currentDiv.find('input').each((i,e)=>{
            form.push($(e).val())
        })
        $.ajax({
            method: 'PUT',
            url: BASE_URL + `/${currentDiv.attr('data-id')}`,
            headers: HANDSHAKE,
            data: {
                angler: form[0],
                weight: +form[1],
                species: form[2],
                location: form[3],
                bait: form[4],
                captureTime: +form[5],
            }
        })
    }
    
    function takeData() {
        let addForm = []
        $('#addForm input').each((i, e) => {
            addForm.push($(e).val())
        })
        return {
            angler: addForm[0],
            weight: +addForm[1],
            species: addForm[2],
            location: addForm[3],
            bait: addForm[4],
            captureTime: +addForm[5],
        }
    }
}