let check = '';
let usuario = '';
let senha1 = '';
let senha2 = '';
let bar1 = '';

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


function cadastro()
{   
    usuario = document.getElementById('usuario').value;
    senha1 = document.getElementById('senha1').value;
    senha2 = document.getElementById('senha2').value;


    //validacão
    if (usuario != null && usuario.length > 4)
    {
        if(senha1 != null && senha1.length >= 7 )
        {
            if(senha1 == senha2)
            {
                document.getElementById('check').style.animationName = 'positivo';
                //aqui você coloca no banco, e quando colocar no banco você puxa a
                //funcão a baixo para ele chamar outra aba 
                esmaecer();

            }
            else
            {
                document.getElementById('check').style.animationName = 'negativo';
                document.getElementById('senha1').style.animation = '2s erro';
                document.getElementById('senha2').style.animation = '2s erro';
            }
        }

        else
        {
            document.getElementById('senha1').style.animation = '2s erro';
        }
    }
    else
    {
        document.getElementById('usuario').style.animation = '2s erro';
    }

}