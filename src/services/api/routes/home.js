const { Router } = require('express');
const router = Router();
const spinalMiddleware = require('middleware/spinal');

// router.get('/', (req, res) => res.send('hello world'));
router.get('/', spinalMiddleware('home.hello'));

module.exports = router;