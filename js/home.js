//variáveis que pegarão todos os elementos do menu para esmaecer para outra página
let menu = '';
let i = 0;

//funcão que esmaece (aumenta a transparência dos elementos)
function esmaecer()
{
    for(i = 0; i < 2; i++)
    {
        menu = document.getElementById('container'); 
        menu.style.animation = '1s ease 0s normal forwards opc';
    }
}

//funcão que chama a página home
function home()
{
    setTimeout( function outraPag(){location.href = 'home.html';},1100);
}

//funcão que chama a página cadastro
function cadastro()
{
    setTimeout( function outraPag(){location.href = 'cadastro.html';},1100);
}

function perfil()
{
    setTimeout( function outraPag(){location.href = 'perfil.html';},1100);

}
