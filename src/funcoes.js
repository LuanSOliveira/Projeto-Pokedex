export function buscaGeracao(gen, btn){

    limpaEstiloBtn()
    limpaInformacoes()
    limpaEstiloFundo()

    const menuSelect = document.getElementById('selecao-lista')
    menuSelect.innerHTML = ''
    if(btn.id == 'btn-gen1'){
        for (var i = 1; i <= gen; i++){
            btn.style.backgroundColor = 'red'
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
            .then(response => response.json())
            .then((data) => {
                menuSelect.innerHTML += `<option value="${data.id}">${data.name}</option>`
            })
    
        }
    }
    else if(btn.id == 'btn-gen2'){
        for (var i = 152; i <= gen; i++){
            btn.style.backgroundColor = 'red'
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
            .then(response => response.json())
            .then((data) => {
                menuSelect.innerHTML += `<option value="${data.id}">${data.name}</option>`
            })
    
        }
    }
    else if(btn.id == 'btn-gen3'){
        for (var i = 252; i <= gen; i++){
            btn.style.backgroundColor = 'red'
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
            .then(response => response.json())
            .then((data) => {
                menuSelect.innerHTML += `<option value="${data.id}">${data.name}</option>`
            })
    
        }
    }
}

export function buscar(){
    const menuSelect = document.getElementById('selecao-lista')

    if(menuSelect.value == ''){
        alert('Selecione um item para buscar.')
    }
    else{
        fetch(`https://pokeapi.co/api/v2/pokemon/${menuSelect.value}/`)
        .then(response => response.json())
        .then((data) => {
        buscaStatus(data);
        buscaTipo(data);
        buscaImagem(data);
        alteraFundo(data)
    })
    }
}

function buscaStatus(data){
    const valorVida = document.getElementById('status-vida');
    const valorAtaque = document.getElementById('status-ataque');
    const valorDefesa = document.getElementById('status-defesa');
    const valorSpAtaque = document.getElementById('status-spataque');
    const valorSpDefesa = document.getElementById('status-spdefesa');
    const valorVelocidade = document.getElementById('status-velocidade');

    valorVida.textContent = `Vida: ${data.stats[0].base_stat}`
    valorAtaque.textContent = `Ataque: ${data.stats[1].base_stat}`
    valorDefesa.textContent = `Defesa: ${data.stats[2].base_stat}`
    valorSpAtaque.textContent = `Sp. Ataque: ${data.stats[3].base_stat}`
    valorSpDefesa.textContent = `Sp. Defesa: ${data.stats[4].base_stat}`
    valorVelocidade.textContent = `Velocidade: ${data.stats[5].base_stat}`
}

function buscaTipo(data){
    const infoTipo = document.getElementById('tipo-poke')
    infoTipo.innerHTML = '<h2>Tipo:</h2>'

    if(data.types.length < 2){
        infoTipo.innerHTML += estilizarTipo(data.types[0].type.name)
    }
    else{
        infoTipo.innerHTML += estilizarTipo(data.types[0].type.name)
        infoTipo.innerHTML += estilizarTipo(data.types[1].type.name)
    }
}

function buscaImagem(data){
    const imagemPoke = document.getElementById('img-poke')

    const imagemId = String(data.id)

    if(imagemId.length == 1){
        imagemPoke.innerHTML = `<img src="https://www.serebii.net/swordshield/pokemon/00${imagemId}.png"
         alt="imagem-${data.name}">`
    }
    else if(imagemId.length == 2){
        imagemPoke.innerHTML = `<img src="https://www.serebii.net/swordshield/pokemon/0${imagemId}.png"
         alt="imagem-${data.name}">`
    }
    else if(imagemId.length == 3){
        imagemPoke.innerHTML = `<img src="https://www.serebii.net/swordshield/pokemon/${imagemId}.png"
         alt="imagem-${data.name}">`
    }

}

function alteraFundo(data){
    const fundo = document.getElementById('fundo')

    if(data.types.length < 2){
        fundo.style.background = `${estilizaFundo(data.types[0].type.name)}`
    }
    else{
        fundo.style.background = `linear-gradient(70deg, ${estilizaFundo(data.types[0].type.name)},
             ${estilizaFundo(data.types[1].type.name)})`
    }

}

function estilizarTipo(tipo){
    if(tipo == 'bug'){
        return `<p class="tipo-${tipo}">Inseto</p>`
    }
    else if(tipo == 'dark'){
        return `<p class="tipo-${tipo}">Noturno</p>`
    }
    else if(tipo == 'dragon'){
        return `<p class="tipo-${tipo}">Dragão</p>`
    }
    else if(tipo == 'electric'){
        return `<p class="tipo-${tipo}">Elétrico</p>`
    }
    else if(tipo == 'fairy'){
        return `<p class="tipo-${tipo}">Fada</p>`
    }
    else if(tipo == 'fighting'){
        return `<p class="tipo-${tipo}">Lutador</p>`
    }
    else if(tipo == 'fire'){
        return `<p class="tipo-${tipo}">Fogo</p>`
    }
    else if(tipo == 'flying'){
        return `<p class="tipo-${tipo}">Voador</p>`
    }
    else if(tipo == 'ghost'){
        return `<p class="tipo-${tipo}">Fantasma</p>`
    }
    else if(tipo == 'grass'){
        return `<p class="tipo-${tipo}">Grama</p>`
    }
    else if(tipo == 'ground'){
        return `<p class="tipo-${tipo}">Terra</p>`
    }
    else if(tipo == 'ice'){
        return `<p class="tipo-${tipo}">Gelo</p>`
    }
    else if(tipo == 'normal'){
        return `<p class="tipo-${tipo}">Normal</p>`
    }
    else if(tipo == 'poison'){
        return `<p class="tipo-${tipo}">Venenoso</p>`
    }
    else if(tipo == 'psychic'){
        return `<p class="tipo-${tipo}">Psíquico</p>`
    }
    else if(tipo == 'rock'){
        return `<p class="tipo-${tipo}">Pedra</p>`
    }
    else if(tipo == 'steel'){
        return `<p class="tipo-${tipo}">Metal</p>`
    }
    else if(tipo == 'water'){
        return `<p class="tipo-${tipo}">Água</p>`
    }

}

function estilizaFundo(tipo){
    if(tipo == 'bug'){
        return `rgb(123, 212, 71)`
    }
    else if(tipo == 'dark'){
        return `rgb(41, 41, 51)`
    }
    else if(tipo == 'dragon'){
        return `rgb(50, 68, 173)`
    }
    else if(tipo == 'electric'){
        return `rgb(184, 181, 0)`
    }
    else if(tipo == 'fairy'){
        return `rgb(243, 167, 239)`
    }
    else if(tipo == 'fighting'){
        return `rgb(126, 27, 27)`
    }
    else if(tipo == 'fire'){
        return `rgb(255, 104, 35)`
    }
    else if(tipo == 'flying'){
        return `rgb(117, 195, 219)`
    }
    else if(tipo == 'ghost'){
        return `rgb(57, 28, 83)`
    }
    else if(tipo == 'grass'){
        return `rgb(22, 150, 44)`
    }
    else if(tipo == 'ground'){
        return `rgb(211, 169, 56)`
    }
    else if(tipo == 'ice'){
        return `rgb(154, 244, 250)`
    }
    else if(tipo == 'normal'){
        return `rgb(122, 122, 122)`
    }
    else if(tipo == 'poison'){
        return `rgb(133, 63, 212)`
    }
    else if(tipo == 'psychic'){
        return `rgb(214, 55, 193)`
    }
    else if(tipo == 'rock'){
        return `rgb(128, 77, 2)`
    }
    else if(tipo == 'steel'){
        return `rgb(189, 189, 189)`
    }
    else if(tipo == 'water'){
        return `rgb(21, 38, 194)`
    }

}



function limpaEstiloBtn(){
    const gen1 = document.getElementById('btn-gen1')
    const gen2 = document.getElementById('btn-gen2')
    const gen3 = document.getElementById('btn-gen3')

    gen1.style.backgroundColor = ''
    gen2.style.backgroundColor = ''
    gen3.style.backgroundColor = ''
}

function limpaInformacoes(){
    const valorVida = document.getElementById('status-vida')
    const valorAtaque = document.getElementById('status-ataque')
    const valorDefesa = document.getElementById('status-defesa')
    const valorSpAtaque = document.getElementById('status-spataque')
    const valorSpDefesa = document.getElementById('status-spdefesa')
    const valorVelocidade = document.getElementById('status-velocidade')
    valorVida.textContent = 'Vida:'
    valorAtaque.textContent = 'Ataque:'
    valorDefesa.textContent = 'Defesa:'
    valorSpAtaque.textContent = 'Sp. Ataque:'
    valorSpDefesa.textContent = 'Sp. Defesa:'
    valorVelocidade.textContent = 'Velocidade:'

    const imagemPoke = document.getElementById('img-poke')
    imagemPoke.innerHTML = ''

    const infoTipo = document.getElementById('tipo-poke')
    infoTipo.innerHTML = '<h2>Tipo:</h2>'
}

function limpaEstiloFundo(){
    const fundo = document.getElementById('fundo')
    fundo.style.background = 'linear-gradient(45deg, rgb(61, 41, 41), rgb(136, 42, 42))'
}