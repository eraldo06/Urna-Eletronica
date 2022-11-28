const s = (a)=>document.querySelector(a);

let seuVotoPara = s('.d-1-1 span')
let cargo = s('.d-1-2 span')
let descricao = s('.d-1-4')
let aviso = s('.d-2')
let lateral = s('.d-1-right')
let numeros = s('.d-1-3')

let etapataAtual = 0;
let numero = '';

function comecarEtapa(){
    let etapa = etapas[etapataAtual]

    let numeroHTML = '';
   

    for (let i=0; i<etapa.numeros; i++){
       if(i===0){
        numeroHTML += '<div class="numero pisca"></div>';
       } else{
        numeroHTML += '<div class="numero"></div>';
       }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = ''
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHTML;

}

function atualizarInterface(){
    alert('Voto finalizado')
}

function clicou(n){
    let elNumero = document.querySelector('.numero.pisca')
    if(elNumero !== null){
        elNumero.innerHTML = n;
        numero = `${numero}${n}`

        elNumero.classList.remove('pisca');


        // pegando o proximo elemento
        // no proximo elemento, adicione essa class
        if(elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add('pisca')
        }else{
            atualizarInterface()
        }
        
        
    }
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
