let menu = '';
let i = 0;

function esmaecer()
{
    for(i = 0; i < 8; i++)
    {
        menu = document.getElementsByClassName('nav')[i]; 
        menu.style.animation = '1s ease 0s normal forwards opc';
    }

    setTimeout( function outraPag(){location.href = 'paginicial.html';},1100);

}



