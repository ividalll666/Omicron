let check = '';

let nome = '';
let desc = '';

let link = '';

let menu = '';
let i = 0;

//abaixo estarão funcões soltas, e elas devem ser chamadas quando determinada acão ocorra. 
//Ao contrário da outra vez que eu montei já as restricoes, eu dessa vez vou deixar só os 
//as funcões, pois acho que você fará melhor essa parte. Sinta-se a vontade para fazer alteracões 
//nos nomes ou parâmetros, mas não mexa no que tem dentro. Leia todos os comentários que eu deixei 
//para saber o que cada coisa faz e onde ela se aplica



//-- IMPORTACÃO MANUAL --//

//funcão que deve ser chamada quando o campo "nome" estiver vazio e quando ele não conseguir importar o arquivo
function erro_upload_manual()
{
    document.getElementById('icon-manual').style.animation = '.8s ease 0s normal forwards negativo';
    setTimeout( function apagastatus(){document.getElementById('icon-manual').style.animation = ''},1001);

} 

//funcão que deve ser chamada quando o campo "nome" estiver cheio e quando o upload for completado
function sucesso_upload_manual()
{
    document.getElementById('icon-manual').style.animation = '2s ease 0s normal forwards positivo';   
    setTimeout( function apagastatus(){document.getElementById('icon-manual').style.animation = ''},1001);
}


// IMPORTACÃO POR LINK //

//funcão a ser chamada quando o link não é encontrado, ou tá em branco o campo, ou whatever
function erro_link()
{   
    document.getElementById('icon-link').style.animation = '.8s ease-in 0s normal forwards negativo';  
    setTimeout( function apagastatus(){document.getElementById('icon-link').style.animation = ''},1001);
  
} 

//funcão a ser chamada quando o link ta 100% funcionando
function sucesso_upload_link()
{
    document.getElementById('icon-link').style.animation = '.8s ease-in 0s normal forwards positivo';
    setTimeout( function apagastatus(){document.getElementById('icon-link').style.animation = ''},1001);    
}

function navdiminui()
{
    document.getElementById('nav').style.animation = '.2s navbar-diminui'
}

//a funcão de ESMAECER *NÃO* DEVE SER CHAMADA quando clicar em nenhum dos dois botões de importacão, pois,
//isso significaria que depois de importar, a pessoa seria direcionada a outra págiona e NÃO é isso que queremos
//já que a pessoa pode querer fazer mais de uma importacão  

//funcao para transicão de páginas: ela diminui a opacidade dos elementos
function esmaecer()
{
    document.getElementById('perfil').style.animation = '1s ease 0s normal forwards opc';        
}

//diminui a camada que estão os elementos
function camada_diminui()
{
    document.getElementById('camadaperfil').style.animation = '2.2s perfil-reverse';
}

//diminui a navbar para iniciar a transicão
function navdiminui()
{
    document.getElementById('nav').style.animation = '1.2s nav-reverse'
}

// muda para tela de login
function login()
{
    setTimeout( function outraPag(){location.href = 'index.html';},2201);
}

//muda para a tela de video
function video()
{
    setTimeout( function outraPag(){location.href = 'video.html';},2201);
}

//muda para a tela de musica
function musica()
{
    setTimeout( function outraPag(){location.href = 'musica.html';},2201);
}

//muda pro perfil
function perfil()
{
    setTimeout( function outraPag(){location.href = 'perfil.html';},2201);
}

