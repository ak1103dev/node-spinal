const { Router } = require('express');
const router = Router();
const spinalMiddleware = require('middleware/spinal');

router.get('/', spinalMiddleware('home.hello'));
router.post('/post', spinalMiddleware('home.postData'));

module.exports = router;
