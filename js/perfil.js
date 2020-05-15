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


//a funcão de ESMAECER *NÃO* DEVE SER CHAMADA quando clicar em nenhum dos dois botões de importacão, pois,
//isso significaria que depois de importar, a pessoa seria direcionada a outra págiona e NÃO é isso que queremos
//já que a pessoa pode querer fazer mais de uma importacão  

//funcao para transicão de páginas
function esmaecer()
{
    for(i = 0; i < 10; i++)
    {
        menu = document.getElementsByClassName('nav')[i]; 
        menu.style.animation = '1s ease 0s normal forwards opc';
    }

    setTimeout( function outraPag(){location.href = 'paginicial.html';},1500);

}
