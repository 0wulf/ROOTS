const Router = require('koa-router');
const router = new Router();


router.get('show', '/:userId/:unitId', async (ctx) => {
  try {
    const user = await ctx.orm.User.findByPk(ctx.params.userId);
    const declarations = await user.getDeclarations();
    const unit = await ctx.orm.Unit.findByPk(ctx.params.unitId);
    // Sum all the declarations
    let total = 0;
    declarations.forEach((declaration) => {
      total += declaration.value;
    });
    ctx.body = { 
      result: Math.round(total * unit.ponderator * 10000) / 10000,
      symbol: unit.symbol,
      description: unit.description,
    };
    ctx.status = 200;
  } catch (error) {
    ctx.body = { error };
    console.log(error);
    ctx.status = 400;
  }
});

module.exports = router;
