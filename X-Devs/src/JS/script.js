const btnAvancar = document.getElementById('btn-avancar')
const btnVoltar = document.getElementById('btn-voltar')
const cartoes = document.querySelectorAll('.cartao')
let index = 0

btnAvancar.addEventListener('click', () => {
    if (index === cartoes.length - 1) return
    cartoes[index].classList.remove('selecionado')
    index ++
    cartoes[index].classList.toggle('selecionado')
})

btnVoltar.addEventListener('click', () => {
    if (index === 0) return
    cartoes[index].classList.remove('selecionado')
    index --
    cartoes[index].classList.toggle('selecionado')
})
