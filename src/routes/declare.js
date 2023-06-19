const Router = require('koa-router');
const router = new Router();


router.post('declare', '/', async (ctx) => {
  try {
    const user = await ctx.orm.User.findByPk(ctx.request.body.userId);
    let people = ctx.request.body.people;
    let days = ctx.request.body.days;
    if (days == null) {
      days = 7;
    };
    if (people == null) {
      people = 2.3;
    };
    let value = days * people;
    const newDeclaration = await ctx.orm.Declaration.create({
      userId: ctx.request.body.userId,
      value: value,
      createdAt: new Date(),
      modifiedAt: new Date(),
      status: 'pending',
    });
    ctx.body = newDeclaration;
    ctx.status = 200;
  } catch (error) {
    ctx.body = { error };
    console.log(error);
    ctx.status = 400;
  }
});


module.exports = router;
