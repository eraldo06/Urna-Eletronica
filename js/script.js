const s = (a)=>document.querySelector(a);

let seuVotoPara = s('.d-1-1 span')
let cargo = s('.d-1-2 span')
let descricao = s('.d-1-4')
let aviso = s('.d-2')
let lateral = s('.d-1-right')
let numeros = s('.d-1-3')

let etapataAtual = 0;

function comecarEtapa(){
    let etapa = etapas[etapataAtual]

    let numeroHTML = '';

    for (let i=0; i<etapa.numeros; i++){
        numeroHTML += '<div class="numero"></div>';
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = ''
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHTML;

}

function clicou(n){
    alert('Clicou em '+n)
}
function branco(){
    alert('Clicou em BRANCO')
}
function corrige(){
    alert('Clicou em CORRIGE')
}
function confirma(){
    alert('Clicou em CONFIRMA')
}

comecarEtapa()
