const input = document.querySelector('.footer_input')
const addBtn = document.querySelector('.footer_button')
const items = document.querySelector('.items')

function addItem() {
    const text = input.value
    if(text === '') {
        input.focus()
        return;
    }

    // 아이템 만들기 (itemRow)
    const itemRow = createItem(text)

    // 아이템 붙이기
    items.appendChild(itemRow)

    // 아이템으로 스크롤 옮기기
    itemRow.scrollIntoView({block: 'center'})

    // 초기화
    input.value=''
    input.focus()
}

function createItem(text) {
    const itemRow = document.createElement('li')
    itemRow.setAttribute('class', 'item_row')
    
    const item = document.createElement('div')
    item.setAttribute('class', 'item')

    const name = document.createElement('span')
    name.setAttribute('class', 'item_name')
    name.innerText = text

    const deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class', 'item_delete')
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow)
    })

    const divider = document.createElement('div')
    divider.setAttribute('class', 'item_divider')

    item.appendChild(name)
    item.appendChild(deleteBtn)

    itemRow.appendChild(item)
    itemRow.appendChild(divider)

    return itemRow
}

addBtn.addEventListener('click', () => {
    addItem()
})

input.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        addItem()
    }
})