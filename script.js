const btnContato = document.getElementById("btnContato");

btnContato.addEventListener("click", function() {

    alert("Contato: contato@techfuture.com");

    document.querySelector(".banner p").innerHTML =
    "Obrigado pelo interesse! Em breve entraremos em contato.";

});

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if(nome === "" || email === ""){
        alert("Preencha todos os campos.");
        return;
    }

    document.getElementById("mensagem").innerHTML =
    "✅ Cadastro realizado com sucesso!";

});