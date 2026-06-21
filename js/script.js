
// FORMULÁRIO DE CONTATO

// Seleciona o formulário pelo ID
const formulario = document.getElementById("formContato");

// Executa a função quando o usuário clicar em "Enviar"
formulario.addEventListener("submit", function(event) {

    // Impede o envio real do formulário 
    event.preventDefault();

    // Obtém os valores digitados nos campos 
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verifica se todos os campos foram preenchidos 
    if (nome === "" || email === "" || mensagem === ""){
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Expressão regular para validar o formato do e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica se o e-mail informado é válido 
    if(!emailValido.test(email)){
        alert("Por favor, digite um e-mail válido.");
        return;
    }

    // Simulação de envio do formulário 
    alert("Mensagem enviada com sucesso!");

    // Limpa todos os campos após o envio
    formulario.reset();
});

