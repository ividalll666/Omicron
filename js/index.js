//Primeira funcão que será chamada, ela checará se tudo está em ordem.
let usuario = '';
let senha = '';

function Checagem()
{
    usuario = document.getElementById('usuario').value;
    senha = document.getElementById('senha').value;

    if(usuario == '' || senha == '' )
    {
        status = document.getElementById('status');
        status.innerHTML = 'Preencha o Login, por favor';
        document.getElementById('status').style.animation = '3s status';
        setTimeout( function apagastatus(){document.getElementById('status').style.animation = ''},3001);
    }

    else if(usuario.length < 5)
    {
        status = document.getElementById('status');
        status.innerHTML = 'Usuário com menos de 5 caracteres.';
        document.getElementById('status').style.animation = '3s status';
        setTimeout( function apagastatus(){document.getElementById('status').style.animation = ''},3001);


    }

    else if(senha.length <= 6)
    {
        status = document.getElementById('status');
        status.innerHTML = 'Senha menor que o permitido';
        document.getElementById('status').style.animation = '3s status';
        setTimeout( function apagastatus(){document.getElementById('status').style.animation = ''},3001);


    }

    //caso tudo esteja em ordem você pesquisa o nome do cara no banco
    // else
    // {
    // }
}

//depois de pesquisar o nome do cara no banco, e se os dados estiverem corretos, você chama a funcão 
// esmaecer e depois a home, para que tenha a transicão de páginas e abra a página home.

//variáveis que pegarão todos os elementos do menu para esmaecer para outra página
let menu = '';
let i = 0;

//funcão que esmaece (aumenta a transparência dos elementos)
function esmaecer()
{
    for(i = 0; i < 8; i++)
    {
        menu = document.getElementsByClassName('nav')[i]; 
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

//caso dê algum erro, você chama a funcão equivalente ao erro logo abaixo:

//variavel que dirá o status do login
let status = ''; 

//funcão para ser chamada caso o usuário não seja encontrado: Usuário Não Encontrado
function UNE()
{
    status = document.getElementById('status');
    status.innerHTML = 'Usuário não Encontrado';
    document.getElementById('status').style.animation = '3s status';
    setTimeout( function apagastatus(){document.getElementById('status').style.animation = ''},3001);

}

//funcão para ser chamada caso a senha não coincidir com o usuário: Usuario-Senha Não Coincidem
function USNC()
{
    status = document.getElementById('status');
    status.innerHTML = 'Senha não coincide com usuário'
    document.getElementById('status').style.animation = '3s status';
    setTimeout( function apagastatus(){document.getElementById('status').style.animation = ''},3001);
}

