const { Router } = require('express');
const router = Router();
const spinalMiddleware = require('middleware/spinal');

router.get('/', spinalMiddleware('home.hello'));

module.exports = router;
