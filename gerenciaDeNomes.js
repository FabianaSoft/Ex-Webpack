function concatena(){
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var nomeCompleto = nome + " " + sobrenome;
    document.getElementById("nomeCompleto").innerHTML = nomeCompleto;
}