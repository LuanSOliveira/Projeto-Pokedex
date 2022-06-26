import { buscaGeracao, buscar } from "./funcoes.js"


const botaoGen1 = document.querySelector('#btn-gen1')
const botaoGen2 = document.querySelector('#btn-gen2')
const botaoGen3 = document.querySelector('#btn-gen3')
botaoGen1.addEventListener('click', () => buscaGeracao(botaoGen1.value, botaoGen1))
botaoGen2.addEventListener('click', () => buscaGeracao(botaoGen2.value, botaoGen2))
botaoGen3.addEventListener('click', () => buscaGeracao(botaoGen3.value, botaoGen3))

const botaoBusca = document.querySelector('#btn-buscar')
botaoBusca.addEventListener('click', () => buscar())