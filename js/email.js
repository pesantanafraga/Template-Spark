//Configuração para envio do e-mail
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var assunto = document.getElementById('assunto').value;
    var mensagem = document.getElementById('mensagem').value;
  
    fetch('/enviar-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome: nome, email: email, assunto: assunto, mensagem: mensagem }),
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch((error) => {
      console.error('Error:', error);
    });
  });
  


//Validação de formulário de e-mail

function validaFormulario() {
    let nome = document.forms["formularioContato"]["nome"].value;
    let email = document.forms["formularioContato"]["email"].value;
    let assunto = document.forms["formularioContato"]["assunto"].value;
    let mensagem = document.forms["formularioContato"]["mensagem"].value;

    if (nome === "" || email === "" || assunto === "" || mensagem === "") {
        alert("Por favor, preencher todos os campos.");
        return false;
    }
}