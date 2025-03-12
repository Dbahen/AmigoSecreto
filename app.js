// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function getFriendName() {
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo != "") {
        amigos.push(nombreAmigo);
        listingFriends(nombreAmigo);
    } else {
        alert("Por favor, inserte un nombre");
    }
    cleaner();
} 

function listingFriends(friend) {
    let lista = document.getElementById("listaAmigos");
    let amigo = document.createElement('ul');
    amigo.innerHTML = friend;
    lista.appendChild(amigo)
}

function cleaner() {
    document.getElementById("amigo").value = "";
}

function sortearAmigo() {
    let cantidadAmigos = amigos.length;
    let valorAmigo = 0;
    if (cantidadAmigos > 0) {
        valorAmigo = numeroRandom(cantidadAmigos);
        document.getElementById("resultado").innerHTML = amigos[valorAmigo];
    } else {
        alert("No has ingresado ningún amigo, intenta nuevamente.")
    }
}

function numeroRandom(numeroAmigos) {
    return Math.floor(Math.random() * numeroAmigos);
}