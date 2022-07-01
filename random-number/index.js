function randomNum(){
    const init = parseInt(document.querySelector('#init').value)
    const final = parseInt(document.querySelector('#final').value)
    const result = document.querySelector('#result')

    const random = Math.floor(Math.random() * (final - init + 1) + init)

    if(isNaN(init) || isNaN(final)){
        result.className = 'form-control text-danger'
        return result.value = 'Invalid Value'
    }

    result.className = 'form-control text-success'
    result.value = random
}