const express = require('express');
const bodyParser = require('bodyParser');
const nodemailer = require('nodemailer');

const app = express();
const porta = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'contato.html');
});

app.post('/enviar-email', (req, res) => {
    const { nome, email, assunto, mensagem } = req.body;
})

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'pendrivedotecnico@gmail.com',
        pass: 'ybdaanbkapgifqzm'
    }
});

const mailOptions = {
    from: email,
    to: 'pendrivedotecnico@gmail.com',
    subject: assunto,
    text: `Nome: ${nome}\nEmail: ${email}\nAssunto: ${assunto}\nMensagem: ${mensagem}`
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error(error);
        res.send('Erro ao enviar e-mail.');
    }else {
        console.log('E-mail enviado: ' + info.response);
        res.send('E-mail enviado com sucesso.');
    }
});

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
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