const router = require('express').Router();
const users = require('../../controllers/user_controller');

module.exports = router
    .get('/', users.currentUser)
    .get('/list', users.allUsers)
    .post('/', users.registerLogin)
    .delete('/', users.logout);



