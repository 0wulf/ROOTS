const Koa = require('koa');
const koaLogger = require('koa-logger');
const { koaBody } = require('koa-body');
const cors = require('@koa/cors');

const router = require('./routes.js');
const orm = require('./models');

const app = new Koa();

app.use(cors());

app.context.orm = orm;

app.use(koaLogger());

app.use(koaBody());

app.use(router.routes());


module.exports = app;
