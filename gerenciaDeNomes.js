function concatenar(){
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var nomeCompleto = nome + "<br>" + sobrenome;
    document.getElementById("nomeCompleto").innerHTML = nomeCompleto;
}