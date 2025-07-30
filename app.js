let listaAmigos =[];
let nomeAmigo = document.getElementById("amigo");
let lista = document.getElementById("listaAmigos");

document.addEventListener("keypress", function(e) {
    
    if(e.key === "Enter") {
         return adicionarAmigo();   
    }
})

function adicionarNaLista() {
    let novoNome = document.createElement("li");
    novoNome.innerHTML = nomeAmigo.value;
    lista.appendChild(novoNome);
    lista.insertBefore(novoNome, lista.lastChild);
}

function adicionarAmigo() {
    if (nomeAmigo.value == "") {
        window.alert("Por favor, insira um nome válido");
    }
        listaAmigos.push(nomeAmigo.value);
        console.log(listaAmigos);
        adicionarNaLista();
        limparCampo();

    
}
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Você precisa definir pelo menos dois nomes para sortear");
    } else {
        let sortear = parseInt(Math.random() * listaAmigos.length);
        let Sorteado = document.getElementById("resultado");
        Sorteado.innerHTML = ("O amigo secreto sorteado é: " + listaAmigos[sortear]);
        limparLista();
        console.log(listaAmigos);
    }
}

function limparCampo() {
    nomeAmigo.value = "";
}
function limparLista() {
   lista.innerHTML = "";
   listaAmigos = []; 
}