// facilitando minha vida
const s = (a) => document.querySelector(a);

// pegando os elementos no html
let seuVotoPara = s('.d-1-1 span')
let cargo = s('.d-1-2 span')
let descricao = s('.d-1-4')
let aviso = s('.d-2')
let lateral = s('.d-1-right')
let numeros = s('.d-1-3')

// Variaveis de toda aplicação
let etapataAtual = 0;
let numero = '';

// Essa função deixa todo o HTML limpo, só com as informções do candidato
function comecarEtapa() {
    let etapa = etapas[etapataAtual]
    let numeroHTML = '';

    // colocando os quadrado dos numeros
    for (let i = 0; i < etapa.numeros; i++) {
        if (i === 0) {
            numeroHTML += '<div class="numero pisca"></div>';
        } else {
            numeroHTML += '<div class="numero"></div>';
        }
    }

    // limpando a tela
    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = ''
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHTML;
}

function atualizarInterface() {
    let etapa = etapas[etapataAtual]
    let condidato = etapa.condidatos.filter((item)=>{
        if(item.numero === numero){
            return true;
        } else{
            return false;
        }
    });

    console.log('Condidato: ', candidito);
}

// adicionando os numeros
function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca')
    if (elNumero !== null) {
        elNumero.innerHTML = n;
        numero = `${numero}${n}`

        elNumero.classList.remove('pisca');


        // pegando o proximo elemento
        // no proximo elemento, adicione essa class
        if (elNumero.nextElementSibling !== null) {
            elNumero.nextElementSibling.classList.add('pisca')
        } else {
            atualizarInterface()
        }}
}
function branco() {
    alert('Clicou em BRANCO')
}
function corrige() {
    alert('Clicou em CORRIGE')
}
function confirma() {
    alert('Clicou em CONFIRMA')
}

comecarEtapa()
