const Router = require('koa-router');

const help = require('./routes/help');
const declare = require('./routes/declare');
const show = require('./routes/show');


const router = new Router();

router.use('/', help.routes());
router.use('/declare', declare.routes());
router.use('/show', show.routes());

module.exports = router;
