var numero = 1;

window.onload = function() {
    document.addEventListener('deviceready', pronto, false);
}

function pronto() {
    var botao = document.getElementById('botao');
    botao.addEventListener('click', buscaPost);
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

    let lastKnownScrollPosition = 0;
    let ticking = false;

    function doSomething(scrollPos) {
    output.textContent = `scrollTop: ${container.scrollTop}`;
    }

    document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
        doSomething(lastKnownScrollPosition);
        ticking = false;
        });

        ticking = true;
    }
    });

}