function randomNum(){
    let init = document.querySelector('#init').value
    let final = document.querySelector('#final').value
    init = ~~init
    final = ~~final

    const random = Math.floor(Math.random() * (final - init + 1) + init)

    const result = document.querySelector('#result').value = random
}