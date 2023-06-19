const Router = require('koa-router');
const router = new Router();


router.get('', '/', async (ctx) => {
  try {
    ctx.body = {
      message: 'Mensaje de aiuda',
    };
    ctx.status = 200;
  } catch (error) {
    ctx.body = { error };
    console.log(error);
    ctx.status = 400;
  }
});


module.exports = router;
