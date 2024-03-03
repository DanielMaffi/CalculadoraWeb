function getHtml(idElemento){
    return window.document.getElementById(idElemento).innerHTML;
}

function setHtml(idElemento, valor){
    window.document.getElementById(idElemento).innerHTML = valor;
}

document.addEventListener('keydown', function(event) {

    switch (event.key) {
        case '1':
            inserir(1);
        break;
        case '2':
            inserir(2);
        break;
        case '3':
            inserir(3);
        break;
        case '4':
            inserir(4);
        break;
        case '5':
            inserir(5);
        break;
        case '6':
            inserir(6);
        break;
        case '7':
            inserir(7);
        break;
        case '8':
            inserir(8);
        break;
        case '9':
            inserir(9);
        break;
        case 'Backspace':
            limpaUltimo();
        break;
        
        default:
        break;
    }
});

function carrega(){
    /*Pegando a data e a hora*/
    let data = new Date()
    let hora = data.getHours()

        if ((hora >= 0) && (hora < 6)){
            setHtml('msg_bemvindo','Boa madrugada');
        }else if((hora >=6 ) && (hora < 12)){
            setHtml('msg_bemvindo','Bom dia');
        }else if((hora >=12 ) && (hora < 18)){
            setHtml('msg_bemvindo','Boa tarde');
        }else if((hora >=18 ) && (hora < 24)){
            setHtml('msg_bemvindo','Boa noite');
        }
}

function inserir(nume){
    let numero = getHtml('resultado');
    setHtml('resultado', numero + nume);
}

function limpa(){
    setHtml('resultado',"");
}

function limpaUltimo(){
    let resultado = getHtml('resultado');
    setHtml('resultado',resultado.substring(0, resultado.length -1)); /*Substring pega o tamanho da string*/
}

function calcula(){
    let resultado = getHtml('resultado');
    if(resultado)
    {
        setHtml('resultado', eval(resultado)); /*Funçao muito foda que usa para calcular um string*/
    }
}

function inverso(){
    let inverso = getHtml('resultado'); /* To pegando o conteudo do campo onde o ID e igual a resultado*/
    if(resultado)
    {
        inverso = 1/inverso;
        setHtml('resultado', inverso);
    }
}

function quadrado(){
    let quadrado = getHtml('resultado');
    if(resultado)
    {             
        quadrado = quadrado**2;
        setHtml('resultado', quadrado);
    }
}

function raiz(){
    let raiz = getHtml('resultado');
    if(resultado)
    {
        raiz = raiz**0.5; /* Matematica 1/2**2 = 2√*/
        setHtml('resultado', raiz);
    }
}

function TrocaSinal(){
    let TrocaSinal = getHtml('resultado');
    if(resultado)
    {
        TrocaSinal = TrocaSinal*-1;
        setHtml('resultado', TrocaSinal);
    }   
}