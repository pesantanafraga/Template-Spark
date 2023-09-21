//Configuração para envio do e-mail ao servidor node.js

document.getElementById('form-contato').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita o comportamento padrão do envio do formulário.
  
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const assunto = document.getElementById('assunto').value;
  const mensagem = document.getElementById('mensagem').value;

  const dadosFormulario = {
      nome: nome,
      email: email,
      assunto: assunto,
      mensagem: mensagem
  };

  fetch('/enviar-dados', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosFormulario)
  })
  .then(response => response.text())
  .then(data => {
      alert(data); // Exibe a resposta do servidor.
  })
  .catch(error => {
      console.error('Erro:', error);
  });
});

  

//Validação dos campos do formulário

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