const {Router} = require('express');

const HelloController = require('../controller/Controller');
const router = Router();

router.get('/hello', HelloController.hello());

module.exports = router;