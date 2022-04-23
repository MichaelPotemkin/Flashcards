let button_card = document.getElementById('create-card')
let tbody = document.getElementById('tbody')

let array_tr = document.querySelectorAll('.tr-edit')
let counter = 0

for (let tr of array_tr){
    counter++
}

counter--

button_card.addEventListener('click',function (){
    let tr = document.createElement('tr')
    tr.className = "tr-edit"
    tbody.appendChild(tr)
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')

    td1.className = "Front-side"
    td2.className = "Back-side"

    tr.appendChild(td1)
    tr.appendChild(td2)

    let input_card_front = document.createElement('input')
    let input_card_back = document.createElement('input')

    input_card_front.className = 'front-card-input'
    input_card_front.id = `id_form-${++counter}-front_side`
    input_card_front.type = "text"
    input_card_front.name = `form-${counter}-front_side`
    input_card_back.value=""
    input_card_front.maxLength = 100


    input_card_back.id = `id_form-${counter}-flip_side`
    input_card_back.type = "text"
    input_card_back.name = `form-${counter}-flip_side`
    input_card_back.value=""
    input_card_back.maxLength = 100

    td1.appendChild(input_card_front)
    td2.appendChild(input_card_back)
})