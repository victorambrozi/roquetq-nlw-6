const Database = require('../db/config');


module.exports = {
    async create(req, res) {

        const db = await Database();
        const password = req.body.password;
        let roomId;
        let isRoom = true;

        while (isRoom) {
            // gera o numero da sala
            for (let i = 0; i < 6; i++) {
                (i == 0) ?
                    roomId = Math.floor(Math.random() * 10).toString() :
                    roomId += Math.floor(Math.random() * 10).toString();
            }

            // verifica se o numero ja existe
            const roomExistIds = await db.all(`SELECT id FROM rooms`);
            isRoom = roomExistIds.some((roomExistId) => roomExistId === roomId);

            if (!isRoom) {
                // insere a sala no banco
                await db.run(`INSERT INTO rooms (
                    id,
                    pass
                ) VALUES (
                    ${+roomId},
                    ${password}
                )`);
            }
        }

        await db.close();

        res.redirect(`/room/${roomId}`);
    },

    async open(req, res) {
        const db = await Database();
        const roomId = req.params.room;
        const questions = await db.all(`SELECT * FROM questions WHERE room  = ${roomId} and read = 0`);
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`);

        let isNoQuestions;

        if (questions == 0) {
            if (questionsRead.length == 0) {
                isNoQuestions = true;
            };
        };

        res.render("room", { roomId: roomId, questions: questions, questionsRead: questionsRead, isNoQuestions: isNoQuestions });

    },

    enter(req, res) {
        const roomId = req.body.roomId;

        res.redirect(`/room/${roomId}`);
    }

}
