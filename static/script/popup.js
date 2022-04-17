// Модальное окно для логаута


document.addEventListener('click', function (e) {
    let modal_windows = document.querySelectorAll('.modal_window')
    let reg_popup = document.getElementById('popup-reg')
    console.log(e)
    for (let window of modal_windows) {
        console.log(e.target.className)
        if (window.classList.contains('visibility-visible')) {
            if (e.target.classList.contains('dark-fon')) {
                console.log(e.target.classList)
                document.querySelector('.dark-fon').classList.remove('display-block')
                window.classList.remove('visibility-visible')
                window.classList.add('visibility-hidden')
                document.body.classList.remove('block-scroll')
            }
        }
    }
})


let close_btns = document.querySelectorAll('.close-popup-btn')
for (let close_button of close_btns) {
    close_button.addEventListener('click', function (e) {
        let pop_window_close = document.getElementById('popup' + e.target.id.slice(-4))
        console.log(pop_window_close)
        if (pop_window_close.classList.contains('visibility-visible')) {
            pop_window_close.classList.remove('visibility-visible')
            pop_window_close.classList.add('visibility-hidden')
            document.querySelector('.dark-fon').classList.remove('display-block')
            document.body.classList.remove('block-scroll')
        }

    })
}

let popup_btns = document.querySelectorAll('.popup-btn')
for (let open_button of popup_btns) {
    open_button.addEventListener('click', function (e) {
        let pop_window = document.getElementById('popup-reg')
        console.log(e.target.id.slice(-4))
        if (pop_window.classList.contains('visibility-hidden')) {
            pop_window.classList.remove('visibility-hidden')
            pop_window.classList.add('visibility-visible')
            document.querySelector('.dark-fon').classList.add('display-block')
            document.body.classList.add('block-scroll')

        }
    })

}

for (let close_button of close_btns) {
    close_button.addEventListener('click', function (e) {
        let pop_window_close = document.getElementById('popup-del')
        if (pop_window_close.classList.contains('visibility-visible')) {
            pop_window_close.classList.remove('visibility-visible')
            pop_window_close.classList.add('visibility-hidden')
            document.querySelector('.dark-fon').classList.remove('display-block')
            document.body.classList.remove('block-scroll')
        }

    })
}


let popup_btns_delete = document.querySelectorAll('.delete-popup-btn')
for (let open_button of popup_btns_delete) {
    open_button.addEventListener('click', function (e) {
        button_id = open_button.id.slice(14)
        let pop_window_delete = document.getElementById('popup-del-' + button_id)
        if (pop_window_delete.classList.contains('visibility-hidden')) {
            pop_window_delete.classList.remove('visibility-hidden')
            pop_window_delete.classList.add('visibility-visible')
            document.querySelector('.dark-fon').classList.add('display-block')
            document.body.classList.add('block-scroll')

        }
    })

}