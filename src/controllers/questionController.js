module.exports = {
    index(req, res) {
        const roomId = req.params.room;
        const questionId = req.params.question;
        const action = req.params.action;
        const passowrd = req.body.password;

        console.log(roomId, questionId, action,passowrd)
    },

    create(req, res) {
        const question = req.body.question;
        const room = req.params.room;
    }
}