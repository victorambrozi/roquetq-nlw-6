const express = require('express');

const router = express.Router();


// .get() - captura algo
// .post() - envia ago
router.get('/', (req, res) => res.render("index"));
router.get('/room', (req, res) => res.render("room"));
router.get('/create-pass', (req, res) => res.render("create-pass"));

// Formato que o formulario de dentro da modal tem que passar a informação
// router.get('/room/:room/:question/:action');  res.param.variavel (room, question, action)


module.exports = router;