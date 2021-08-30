const input = document.querySelector(".footer_input");
const addBtn = document.querySelector(".footer_button");
const items = document.querySelector(".items");
const form = document.querySelector(".new-form")

form.addEventListener('submit', event => {
  event.preventDefault()
  addItem()
})

function addItem() {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }

  // 아이템 만들기 (itemRow)
  const itemRow = createItem(text);

  // 아이템 붙이기
  items.appendChild(itemRow);

  // 아이템으로 스크롤 옮기기
  itemRow.scrollIntoView({ block: "center" });

  // 초기화
  input.value = "";
  input.focus();
}

let id = 0; // UUID
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item_row");
  itemRow.setAttribute('data-id', id)
  itemRow.innerHTML = `
    <div class="item">
        <span class="item_name">${text}</span>
        <button class="item_delete">
            <i class="fas fa-trash-alt" data-id=${id}></i>
        </button>
    </div>
    <div class="item_divider"></div>
    `;

  id++
  return itemRow;
}

// addBtn.addEventListener("click", () => {
//   addItem();
// });

// input.addEventListener("keyup", (event) => {
//   if (event.isComposing) {
//     return
//   }
//   if (event.key === "Enter") {
//     addItem();
//   }
// });

items.addEventListener('click', event => {
    const id = event.target.dataset.id
    if(id){
        const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`)
        toBeDeleted.remove()
    }
})