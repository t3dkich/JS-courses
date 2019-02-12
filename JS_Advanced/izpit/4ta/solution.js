function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);
    let product = $('.custom-select')
    let price = $('#price')
    let quantity = $('#quantity')
    let buttonSubmit = $('#submit')
    let display = $('.display')
    let capacity = $('#capacity')
    let finalPrice = $('#sum')
    product.keypress((ev) => {
        if ($(ev.target).val() !== '') {
            buttonSubmit.attr('disabled', false)
        }
        product.keyup((ev) => {
            if ($(ev.target).val() === '') {
                buttonSubmit.attr('disabled', true)
            }
        })
    })
    buttonSubmit.on('click', () => {
        let li = $('<li>')
        let text = `Product: ${product.val()} Price: ${price.val()} Quantity: ${quantity.val()}\n`;
        li.append(text)
        if (+capacity.val() + +quantity.val() <= 150) {
            capacity.val(+capacity.val() + +quantity.val())
        } else {
            capacity.val('full')
            capacity.removeClass()
            capacity.addClass('fullCapacity')
            buttonSubmit.attr('disabled', true)
            product.attr('disabled', true)
            price.attr('disabled', true)
            quantity.attr('disabled', true)
        }
        finalPrice.val(+finalPrice.val() + +price.val())
        product.val('')
        price.val(1)
        quantity.val(1)
        display.append(li)

    })
}
