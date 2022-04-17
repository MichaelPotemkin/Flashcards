
let cards_array = document.querySelectorAll('.card')

window.addEventListener('resize', function() {
  console.log("Размер окна изменен");
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


// Убираем у инпутов регистации и взода подсказывающее окно

let array_register_inputs = ['register-form-input-username','register-form-input-email','register-form-input-password1','register-form-input-password2','id_username', 'login-form-input-password']



for (let input of array_register_inputs) {
    let cheker = document.getElementById(input)
    if (cheker){
        cheker.setAttribute('autocomplete', 'off')
    }

}




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





