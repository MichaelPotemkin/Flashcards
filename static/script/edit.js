const addMoreBtn = document.getElementById('create-card')
const totalNewForms = document.getElementById('id_form-TOTAL_FORMS')


addMoreBtn.addEventListener('click', function () {
    const currentCardForms = document.getElementsByClassName('card-form')
    const currentFormCount = currentCardForms.length
    const formCopyTarget = document.getElementById('cards-list')
    const copyEmptyFormEl = document.getElementById('empty-form').cloneNode(true)
    copyEmptyFormEl.setAttribute('class', 'card-form')
    copyEmptyFormEl.setAttribute('id', `form-${currentFormCount}`)

    const regex = new RegExp('__prefix__', 'g')
    copyEmptyFormEl.innerHTML = copyEmptyFormEl.innerHTML.replace(regex, currentFormCount)

    totalNewForms.setAttribute('value', currentFormCount + 1)
    formCopyTarget.append(copyEmptyFormEl)
})


