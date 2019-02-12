function addItem() {
    let text = document.getElementById('newItemText').value
    let value = document.getElementById('newItemValue').value
    let menu = document.getElementById('menu')
    let newOption = document.createElement('option')
    newOption.textContent = text
    newOption.value = value
    menu.appendChild(newOption)
    document.getElementById('newItemText').value = null
    document.getElementById('newItemValue').value = null
}