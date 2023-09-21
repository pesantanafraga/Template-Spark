require('dotenv').config();
let express = require('express');
let nodemailer = require('nodemailer');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/enviar-email', function(req, res) {
  let nome = req.body.nome;
  let email = req.body.email;
  let assunto = req.body.assunto;
  let mensagem = req.body.mensagem;

let transporter = nodemailer.createTransport({
    service: 'smpt.gmail.com',
    port: 587,
    secure: false, // true somente para port 465 as outras são false
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

let mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'santanabistec@gmail.com',
    subject: assunto,
    text: 'Nome: ' + nome + '\nEmail: ' + email + '\nMensagem: ' + mensagem
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email enviado: ' + info.response);
      res.send('sucesso');
    }
  });
});

app.listen(3000, function () {
  console.log('Aplicação rodando na porta 3000!');
});
