const Router = require('koa-router');
const router = new Router();


router.get('', '/', async (ctx) => {
  try {
    ctx.body = {
      title: 'Bienvenido a ROOTS-API',
      description: 'Acá te mostramos como utilizar la API:',
      endpoints: [
        {
          uri: '/show/<userId>/<unitId>',
          description: 'Muestra el impacto del usuario userId traducido a la unidad unitId',
          curl: 'curl https://roots-api.onrender.com/show/<userId>/<unitId>',
          params: [
            {
              name: 'userId',
              description: 'Id del usuario',
            },
            {
              name: 'unitId',
              description: 'Id de la unidad a la que queremos traducir el impacto',
              units: [
                {
                  id: 1,
                  description: 'Masa de residuos orgánicos generada',
                  symbol: 'kg RROO',
                },
                {
                  id: 2,
                  descrpition: 'Masa de compost generada',
                  symbol: 'kg COMPOST',
                },
                {
                  id: 3,
                  description: 'Potencial volumen de agua ahorrado por el uso del compost generado',
                  symbol: 'l H2O',
                },
                {
                  id: 4,
                  description: 'Potencial volumen de agua ahorrado por el uso del compost generado',
                  symbol: 'BIDONES DE 20 l de H2O',
                },
                {
                  id: 5,
                  description: 'Disminución de la huella de carbono',
                  symbol: 'kg CO2'
                },
              ],
            }
          ]
        },
        {
          uri: '/declare',
          description: 'Declara el impacto de un usuario',
          curl: "curl -d 'userId=<userId>[&days=<days>][&people=<people>]' https://roots-api.onrender.com/declare",
          params: [
            {
              name: 'userId',
              description: 'Id del usuario',
            },
            {
              name: 'days',
              description: 'Días que contempla la declaración',
              default_value: 7,
            },
            {
              name: 'people',
              description: 'Cantidad de personas en el hogar',
              default_value: 2.3,
            },
          ]
        },
      ]
    };
    ctx.status = 200;
  } catch (error) {
    ctx.body = { error };
    console.log(error);
    ctx.status = 400;
  }
});


module.exports = router;
