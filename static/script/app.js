
let cards_array = document.querySelectorAll('.card')

window.addEventListener('resize', function() {
  console.log("Размер окна изменен");
  someFunc();
});

let counter_card = 0
// Выполняем действие, если ширина меньше 1000px
var w = window.innerWidth;
if (w < 1000) {
    for (let card of cards_array){
    if (counter_card > 2){
        card.style.visibility = 'hidden'
        card.style.position = 'absolute'
    }
    counter_card++
}
}

console.log(cards_array)




let triangle_buttons = document.querySelectorAll('.clickable')

function addingTriangle(buttons){
    for(let button of buttons){
        button.addEventListener('click', function(){
            if (this.classList.contains('revers-triangle')){
                this.classList.remove('revers-triangle')
                this.classList.add('triangle')
            }
            else {
                for(let elem of buttons){
                    elem.classList.remove('revers-triangle')
                    elem.classList.add('triangle')
                }
                this.classList.add('revers-triangle')
                this.classList.remove('triangle')
            }
        })

    }
}

// *** Функция которая добавляет класс orangarette при клике на кнопку и убирает его, если клик произошёл повторно ***

function addingOrangerette(nav_buttons){
    for (let button of nav_buttons){
        button.addEventListener('click', function (){
            if (this.classList.contains('orangarette')){
                this.classList.remove('orangarette')
            }
            else {
                for (let elem of nav_buttons){    // Сначала очищаем у всех кнопок класс оранджеретте
                    elem.classList.remove('orangarette')
                }
                this.classList.add('orangarette') // Затем добавляем класс оранджаретте на кнопку
            }
        })
    }
}

let nav_button = document.querySelectorAll('.nav-button');

$(document).on('click', function(e){
    // *** Здесь проверяем кликается ли по блоку дропдоун или нет
    if (!$(e.target).closest(".nav-button").length) {
            for (let button of nav_button){
                button.classList.remove('orangarette')
            }
    }
    e.stopPropagation();
    if (!$(e.target).closest(".clickable").length) {
        for (let button of triangle_buttons){
            button.classList.remove('revers-triangle')
            button.classList.add('triangle')
        }
    }
    e.stopPropagation();

});


addingOrangerette(nav_button)
addingTriangle(triangle_buttons)

let dropDown_flashCard = document.getElementById('flash-card-block')
let flashCard_button = document.getElementById('flash-card-button')

let different_button = document.getElementById('different-button')
let dropDown_different = document.getElementById('different-block')

let category_button = document.getElementById('category_button')
let dropDown_category = document.getElementById('category_block')

dropDown_different.style.visibility = 'hidden'
dropDown_category.style.visibility = 'hidden'

let width_flsh_btn = flashCard_button.clientWidth
dropDown_flashCard.style.visibility = 'hidden'
dropDown_flashCard.style.width = width_flsh_btn + 'px';

flashCard_button.addEventListener('click', function (){
    if (dropDown_flashCard.style.visibility == 'hidden'){
        dropDown_flashCard.style.visibility = 'visible'
    }
    else {
        dropDown_flashCard.style.visibility = 'hidden'
    }

})

different_button.addEventListener('click', function (){
    if (dropDown_different.style.visibility == 'hidden'){
        dropDown_different.style.visibility = 'visible'
    }
    else {
        dropDown_different.style.visibility = 'hidden'
    }
})

category_button.addEventListener('click', function (){
    if (dropDown_category.style.visibility == 'hidden'){
        dropDown_category.style.visibility = 'visible'
    }
    else {
        dropDown_category.style.visibility = 'hidden'
    }
})



