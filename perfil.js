let check = '';

let nome = '';
let desc = '';

let link = '';

let menu = '';
let i = 0;


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


function uploadmanual()
{   
    nome = document.getElementById('nome').value;
    desc = document.getElementById('desc').value;

    //validacão
    if (nome != '')
    {
          alert('a');
    }

    else 
    {
        document.getElementById('icon-manual').style.animation = '1s ease 0s normal forwards negativo';
    }
  
} 