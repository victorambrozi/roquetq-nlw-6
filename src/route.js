const express = require('express');
const questionController = require("./controllers/questionController");
const roomController = require("./controllers/roomController");
const router = express.Router();


// .get() - captura algo
// .post() - envia ago
router.get('/', (req, res) => res.render("index", {page: "enter-room"}));
router.get('/create-pass', (req, res) => res.render("index", {page: "create-pass"}));

router.get('/room/:room', roomController.open);

// Formato que o formulario de dentro da modal tem que passar a informação
router.post('/create-room', roomController.create);


router.post('/question/create/:room', questionController.create);
router.post('/question/:room/:question/:action', questionController.index)  //res.param.variavel (room, question, action)


module.exports = router;