const express = require('express');
const route = require('./route');
const path = require('path');

const server = express();

server.set('view engine', 'ejs'); // inicia o ejs

server.use(express.static("public")); // indica o caminho da pasta public para o servidor renderizar 

server.set('views', path.join(__dirname, 'views')); // renderiza os arquivos ejs

server.use(express.urlencoded({extended: true})); // ----- middleware ----- decodifica o conteudo do formulário e passa para o .post()

server.use(route); // utiliza as rotas importadas

server.listen(3000, () => console.log('Rodando')); // indica a porta que o servidor deve rodar