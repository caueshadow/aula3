var numero = 1;

window.onload = function() {
    document.addEventListener('deviceready', pronto, false);
}

function pronto() {
    var botao = document.getElementById('botao');
    botao.addEventListener('click', buscaPost);

    var scrollContainer = document.getElementById('scrollContainer');
    scrollContainer.addEventListener('scroll', verificaRolagem);
}

function buscaPost() {
    var campoNumero = document.getElementById('num');
    numero = campoNumero.value;

    var titulo = 'Um título';
    var corpo = 'Um corpo';
    var endereco = "https://jsonplaceholder.typicode.com/posts/" + numero;

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        var objetoRecebido = JSON.parse(this.responseText);
        titulo = objetoRecebido.title;
        corpo = objetoRecebido.body;

        var campoTitulo = document.getElementById('title');
        campoTitulo.innerHTML = titulo;

        var campoCorpo = document.getElementById('body');
        campoCorpo.innerHTML = corpo;
    }
    xhttp.open("GET", endereco, true);
    xhttp.send();
}

function verificaRolagem() {
    var scrollContainer = document.getElementById('scrollContainer');
    if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
        // Limpa os campos se chegou ao final
        document.getElementById('num').value = '';
        document.getElementById('title').innerHTML = '';
        document.getElementById('body').innerHTML = '';
    }
}
